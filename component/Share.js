import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Metrics, Images, Colors } from "../theme";
import Button from "../Button/Button";

const Share = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity style={{ flex: 1 }} onPress={openModal}>
          <Image
            source={Images.plant1} // Assuming this is the plant image
            resizeMode="cover"
            style={styles.shareImage}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <Image
                source={Images.plant1} // Assuming this is the plant image
                resizeMode="cover"
                style={styles.sharesImage}
              />
              {/* Plant details content */}
              <View style={styles.containers}>
                <Text style={styles.text}>
                  Front-end web development is the development of the graphical
                  user interface of a website, through the use of HTML, CSS,
                  JavaScript, and various frameworks / libraries of them, so
                  that users can view and interact with that website.
                </Text>
                <Button
                  title="Apply The Course"
                  filled
                  style={{
                    marginBottom: 4,
                  }}
                />
              </View>
              <TouchableOpacity onPress={closeModal}>
             <Text>close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }} onPress={openModal}>
          <Image
            source={Images.plant2} // Assuming this is the plant image
            resizeMode="cover"
            style={styles.shareImage}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <Image
                source={Images.plant2} // Assuming this is the plant image
                resizeMode="cover"
                style={styles.sharesImage}
              />
              {/* Plant details content */}
              <View style={styles.containers}>
                <Text style={styles.text}>
                  Front-end web development is the development of the graphical
                  user interface of a website, through the use of HTML, CSS,
                  JavaScript, and various frameworks / libraries of them, so
                  that users can view and interact with that website.
                </Text>
                <Button
                  title="Apply The Course"
                  filled
                  style={{
                    marginBottom: 4,
                  }}
                />
              </View>
              <TouchableOpacity onPress={closeModal}>
             <Text>close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }} onPress={openModal}>
          <Image
            source={Images.plant4} // Assuming this is the plant image
            resizeMode="cover"
            style={styles.shareImage}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <Image
                source={Images.plant4} // Assuming this is the plant image
                resizeMode="cover"
                style={styles.sharesImage}
              />
              {/* Plant details content */}
              <View style={styles.containers}>
                <Text style={styles.text}>
                  Front-end web development is the development of the graphical
                  user interface of a website, through the use of HTML, CSS,
                  JavaScript, and various frameworks / libraries of them, so
                  that users can view and interact with that website.
                </Text>
                <Button
                  title="Apply The Course"
                  filled
                  style={{
                    marginBottom: 4,
                  }}
                />
              </View>
              <TouchableOpacity onPress={closeModal}>
             <Text>close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper1}>
      <TouchableOpacity style={{ flex: 1 }} onPress={openModal}>
          <Image
            source={Images.plant3} // Assuming this is the plant image
            resizeMode="cover"
            style={styles.shareImage}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <Image
                source={Images.plant3} // Assuming this is the plant image
                resizeMode="cover"
                style={styles.sharesImage}
              />
              {/* Plant details content */}
              <View style={styles.containers}>
                <Text style={styles.text}>
                  Front-end web development is the development of the graphical
                  user interface of a website, through the use of HTML, CSS,
                  JavaScript, and various frameworks / libraries of them, so
                  that users can view and interact with that website.
                </Text>
                <Button
                  title="Apply The Course"
                  filled
                  style={{
                    marginBottom: 4,
                  }}
                />
              </View>
              <TouchableOpacity onPress={closeModal}>
             <Text>close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }} onPress={openModal}>
          <Image
            source={Images.plant5} // Assuming this is the plant image
            resizeMode="cover"
            style={styles.shareImage}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <Image
                source={Images.plant5} // Assuming this is the plant image
                resizeMode="cover"
                style={styles.sharesImage}
              />
              {/* Plant details content */}
              <View style={styles.containers}>
                <Text style={styles.text}>
                  Front-end web development is the development of the graphical
                  user interface of a website, through the use of HTML, CSS,
                  JavaScript, and various frameworks / libraries of them, so
                  that users can view and interact with that website.
                </Text>
                <Button
                  title="Apply The Course"
                  filled
                  style={{
                    marginBottom: 4,
                  }}
                />
              </View>
              <TouchableOpacity onPress={closeModal}>
             <Text>close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Share;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "88%",
    marginTop: Metrics.base,
  },
  wrapper: {
    flex: 1,
  },
  wrapper1: {
    flex: 1,
  },
  shareImage: {
    width: "100%",
    height: "100%",
    borderRadius: Metrics.base,
    borderColor: Colors.gainsboro,
    borderWidth: 0.6,
  },
  containers: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    marginTop:20,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "start",
    color: "black", // You can change the color to whatever you prefer
  },
  sharesImage: {
    position: "absolute",
    top: 53,
    width: "100%",
    height: "30%",
    borderRadius: Metrics.base,
    borderColor: Colors.gainsboro,
    borderWidth: 0.6,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.gainsboro, // Semi-transparent background
    padding: 20,
  },
});
