import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { TextInput } from 'react-native';
import { deleteEmployee, fetchEmployeeData, uploadImage } from "../Services/Api"; // Assuming you have an uploadImage function in your API service
import { useNavigation } from "@react-navigation/native";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [imageURI, setImageURI] = useState(null); // State to store the uploaded image URI
  const [selectedStudent, setSelectedStudent] = useState(null);

  const navigation = useNavigation();

  const callGetAPI = async () => {
    try {
      const response = await fetchEmployeeData();
      if (response.status !== 200) {
        throw new Error("Failed to fetch employee data");
      }
      const employeeData = response.data.map((employee) => ({
        id: employee.id,
        name: employee.name,
        rollNo: employee.rollNo,
        image: employee.image, // Assuming your API response includes an 'image' field
      }));
      setStudents(employeeData);
      console.log("Employee Data:", employeeData);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  useEffect(() => {
    callGetAPI();
  }, []);

  const handleDelete = async (id) => {
    setSelectedStudentId(id);
    setDeleteModalVisible(true);
  };

  const handleEdit = (id) => {
    const studentToEdit = students.find((student) => student.id === id);
    setSelectedStudent(studentToEdit);
    setEditModalVisible(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteEmployee(selectedStudentId);
      setDeleteModalVisible(false);
      callGetAPI(); // Refresh the student list after deletion
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleImageUpload = async () => {
    try {
      const response = await uploadImage(); // Implement your image upload function
      if (response.status === 200) {
        const uploadedImageURI = response.data.uri; // Assuming the response contains the URI of the uploaded image
        setImageURI(uploadedImageURI);
      } else {
        throw new Error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSaveEdit = async () => {
    try {
      const updatedStudents = students.map((student) =>
        student.id === selectedStudent.id ? selectedStudent : student
      );
      setStudents(updatedStudents);
      setEditModalVisible(false);
      await callGetAPI(); // Refresh the student list from the API after saving edit
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };
  
  

  const renderStudentItem = ({ item }) => (
    <View style={styles.studentItem}>
      <Image source={{ uri: item.image }} style={styles.studentImage} />
      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{item.name}</Text>
        <Text style={styles.studentRollNo}>Roll No: {item.rollNo}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleEdit(item.id)}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleDelete(item.id)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      {/* Student list rendering */}
      <FlatList
        data={students}
        renderItem={renderStudentItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* Upload image button */}
      <Button title="Upload Image" onPress={handleImageUpload} />
      {/* Display the uploaded image */}
      {imageURI && <Image source={{ uri: imageURI }} style={styles.uploadedImage} />}
      {/* Delete confirmation modal */}
      <Modal
        visible={isDeleteModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <View style={styles.modalContents}>
          <Text style={styles.Text2}>Are you sure you want to delete this student?</Text>
          <View style={styles.Delete}>
            <Button
              title="Cancel"
              onPress={() => setDeleteModalVisible(false)}
              color="blue"
            />
            <Button title="Yes" onPress={confirmDelete} color="red" />
          </View>
        </View>
      </Modal>
      {/* Edit modal */}
      <Modal
  visible={isEditModalVisible}
  transparent={true}
  animationType="slide"
  onRequestClose={() => setEditModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Edit Student</Text>
      <TextInput
        placeholder="Name"
        value={selectedStudent ? selectedStudent.name : ''}
        onChangeText={(text) => setSelectedStudent({...selectedStudent, name: text})}
        style={styles.input}
      />
      <TextInput
        placeholder="Roll No"
        value={selectedStudent ? selectedStudent.rollNo : ''}
        onChangeText={(text) => setSelectedStudent({...selectedStudent, rollNo: text})}
        style={styles.input}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSaveEdit} />
        <Button title="Cancel" onPress={() => setEditModalVisible(false)} color="gray" />
      </View>
    </View>
  </View>
</Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  studentItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  studentImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  studentRollNo: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  modalContents: {
    position: "absolute",
    width: "70%",
    height: "20%",
    backgroundColor: "white",
    color: "yellow",
    padding: 20, // Adjust the padding as needed
    justifyContent: "center",
    alignItems: "center",
    left: "15%", // Adjust left position to center the modal horizontally
    top: "40%", // Adjust top position to center the modal vertically
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    
  },
  Delete: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Text2: {
    marginBottom: 30,
    color: "black",
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  })
  
  export default StudentList