
// // import React, { useState, useRef } from "react";
// // import { Verify } from "../../../assets";
// // import { ProfileStyle } from "./style";
// // import { Verifystyle, Loginstyle, GlobalStyle } from "../auth/style";
// // import { View, Text, TextInput, TouchableOpacity, Image, StatusBar } from "react-native";

// // const Pcreate: React.FC = () => {
// //   const [verificationCodes, setVerificationCodes] = useState<string[]>(["", "", "", ""]);
// //   const inputRefs = useRef<Array<TextInput | null>>(Array(4).fill(null));

// //   const handleChange = (index: number, value: string) => {
// //     setVerificationCodes((prevCodes) => {
// //       const newCodes = [...prevCodes];
// //       newCodes[index] = value;
          
// //       if (value.length === 1 && index < newCodes.length - 1) {
// //         const nextIndex = index + 1;
// //         const nextInputRef = inputRefs.current[nextIndex];

// //         if (nextInputRef) {
// //           nextInputRef.focus();
// //         }
// //       }

// //       return newCodes;
// //     });
// //   };

// //   return (
// //     <>
// //       <StatusBar backgroundColor="rgb(55, 61, 233)" barStyle="light-content" />

// //       <View style={Verifystyle.container}>
// //         <View style={Verifystyle.imgcontainer}>
// //         <Text style={ProfileStyle.heading}>Profile</Text>
// //           <Image
// //             source={Verify}
// //             style={{ width: 200, height: 200, marginBottom: 20 }}
// //             onLoad={() => console.log("Image loaded")}
// //             onError={(error) => console.error("Image failed to load", error)}
// //           />

// //           <Text style={GlobalStyle.heading}>Enter Verification Codes</Text>
// //           <Text style={GlobalStyle.smpara}>
// //             We are automatically a SVS send to your mobile number
// //           </Text>
// //         </View>

// //         <View style={Verifystyle.input}>
// //           {verificationCodes.map((code, index) => (
// //             <TextInput
// //               key={index}
// //               ref={(el) => (inputRefs.current[index] = el)}
// //               style={Verifystyle.inputs}
// //               maxLength={1}
// //               value={code}
// //               keyboardType="numeric"
// //               onChangeText={(text) => handleChange(index, text)}
// //               onKeyPress={(event) => {
// //                 if (event.nativeEvent.key === "Backspace" && index > 0) {
// //                   const prevIndex = index - 1;
// //                   const prevInputRef = inputRefs.current[prevIndex];

// //                   if (prevInputRef) {
// //                     prevInputRef.focus();
// //                   }
// //                 }
// //               }}
// //             />
// //           ))}
// //         </View>

// //         <TouchableOpacity style={Loginstyle.button}>
// //           <Text style={Loginstyle.btnText}>Verify</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </>
// //   );
// // };

// // export default Pcreate;


// import React, { useState, useRef } from "react";
// import { Verify } from "../../../assets";
// import { ProfileStyle } from "./style";
// import { Verifystyle, Loginstyle, GlobalStyle } from "../auth/style";
// import { View, Text, TextInput, TouchableOpacity, Image, StatusBar } from "react-native";
// import * as ImagePicker from "react-native-image-picker"; // Import ImagePicker

// const Pcreate: React.FC = () => {
//   const [verificationCodes, setVerificationCodes] = useState<string[]>(["", "", "", ""]);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null); // New state for the selected image
//   const inputRefs = useRef<Array<TextInput | null>>(Array(4).fill(null));

//   const handleChange = (index: number, value: string) => {
//     setVerificationCodes((prevCodes) => {
//       const newCodes = [...prevCodes];
//       newCodes[index] = value;

//       if (value.length === 1 && index < newCodes.length - 1) {
//         const nextIndex = index + 1;
//         const nextInputRef = inputRefs.current[nextIndex];

//         if (nextInputRef) {
//           nextInputRef.focus();
//         }
//       }

//       return newCodes;
//     });
//   };

//   const pickImage = () => {
//     ImagePicker.launchImageLibrary({}, (response) => {
//       if (response.uri) {
//         setSelectedImage(response.uri);
//       }
//     });
//   };

//   return (
//     <>
//       <StatusBar backgroundColor="rgb(55, 61, 233)" barStyle="light-content" />

//       <View style={Verifystyle.container}>
//         <View style={Verifystyle.imgcontainer}>
//           <Text style={ProfileStyle.heading}>Profile</Text>

//           {/* Circular div for the image */}
//           <TouchableOpacity onPress={pickImage} style={styles.circle}>
//             {selectedImage ? (
//               <Image source={{ uri: selectedImage }} style={styles.imageInCircle} />
//             ) : (
//               <Text style={styles.addImageText}>Add Image</Text>
//             )}
//           </TouchableOpacity>

//           <Text style={GlobalStyle.heading}>Enter Verification Codes</Text>
//           <Text style={GlobalStyle.smpara}>
//             We are automatically sending a SVS to your mobile number
//           </Text>
//         </View>

//         <View style={Verifystyle.input}>
//           {verificationCodes.map((code, index) => (
//             <TextInput
//               key={index}
//               ref={(el) => (inputRefs.current[index] = el)}
//               style={Verifystyle.inputs}
//               maxLength={1}
//               value={code}
//               keyboardType="numeric"
//               onChangeText={(text) => handleChange(index, text)}
//               onKeyPress={(event) => {
//                 if (event.nativeEvent.key === "Backspace" && index > 0) {
//                   const prevIndex = index - 1;
//                   const prevInputRef = inputRefs.current[prevIndex];

//                   if (prevInputRef) {
//                     prevInputRef.focus();
//                   }
//                 }
//               }}
//             />
//           ))}
//         </View>

//         <TouchableOpacity style={Loginstyle.button}>
//           <Text style={Loginstyle.btnText}>Verify</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };

// const styles = {
//   circle: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: "#ccc",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//     overflow: "hidden",
//   },
//   imageInCircle: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 60,
//   },
//   addImageText: {
//     color: "#555",
//   },
//   // ... other styles
// };

// export default Pcreate;


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

interface ImageUploadProps {}

const Pcreate: React.FC<ImageUploadProps> = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    'http://i.pravatar.cc/500?img=7'
  );

  const pickImage = () => {
    ImagePicker.launchImageLibrary(
      { mediaType: 'photo', includeBase64: false },
      (response) => {
        if (!response.didCancel && !response.error) {
          setSelectedImage(response.uri);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        React Native Image Upload
        <Text style={styles.small}> with preview</Text>
      </Text>
      <View style={styles.avatarUpload}>
        <View style={styles.avatarEdit}>
          <TouchableOpacity onPress={pickImage}>
            <View style={styles.avatarEditButton}></View>
          </TouchableOpacity>
        </View>
        <View style={styles.avatarPreview}>
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    fontFamily: 'Open Sans, sans-serif',
    maxWidth: 960,
    margin: 30,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  small: {
    display: 'flex',
    fontSize: 15,
    paddingTop: 8,
    color: 'gray',
  },
  avatarUpload: {
    position: 'relative',
    maxWidth: 205,
    margin: 50,
  },
  avatarEdit: {
    position: 'absolute',
    right: 12,
    zIndex: 1,
    top: 10,
  },
  avatarEditButton: {
    width: 34,
    height: 34,
    marginBottom: 0,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    borderColor: 'transparent',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    cursor: 'pointer',
    fontWeight: 'normal',
    transition: 'all 0.2s ease-in-out',
  },
  avatarPreview: {
    width: 192,
    height: 192,
    position: 'relative',
    borderRadius: 100,
    borderWidth: 6,
    borderColor: '#F8F8F8',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
});

export default Pcreate;
