import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_14_89}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_14_90}
        />
        <View style={styles.View_14_91}>
          <View source={{ uri: "null" }} style={styles.View_14_92} />
          <View style={styles.View_14_93}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_14_94}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_14_95}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_14_98}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_14_101}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_14_104}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_14_105}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_14_111}
          />
          <View style={styles.View_14_118}>
            <View style={styles.View_14_119}>
              <Text style={styles.Text_14_119}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e75/3483/9ff1b4c23f13383aebe3c4705f16b990"
        }}
        style={styles.ImageBackground_14_120}
      />
      <View style={styles.View_14_121}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d106/33be/8a42168373fb727dd7040c4cd1c4587c"
          }}
          style={styles.ImageBackground_14_122}
        />
        <View style={styles.View_14_179}>
          <Text style={styles.Text_14_179}>Version 1.0.0</Text>
        </View>
      </View>
      <View style={styles.View_14_180}>
        <Text style={styles.Text_14_180}>Login Account</Text>
      </View>
      <View style={styles.View_14_181}>
        <View style={styles.View_14_182} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ec4/33c7/f4797b6eb183052f68c77ce7c86fec26"
          }}
          style={styles.ImageBackground_14_183}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbf4/8f92/2c2ea5ed7d049fdb79454e5faaadc35a"
          }}
          style={styles.ImageBackground_14_184}
        />
        <View style={styles.View_14_185}>
          <Text style={styles.Text_14_185}>AGENT_01</Text>
        </View>
      </View>
      <View style={styles.View_14_186}>
        <View style={styles.View_14_187} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ec4/33c7/f4797b6eb183052f68c77ce7c86fec26"
          }}
          style={styles.ImageBackground_14_188}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/480b/b6d2/f59da81ebcf695b780804cc805ca4cc8"
          }}
          style={styles.ImageBackground_14_189}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8eb/9d06/35e73633843570a3e41dd5354f29bed6"
          }}
          style={styles.ImageBackground_14_190}
        />
        <View style={styles.View_14_198}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58e9/af09/4fc85973be7f0018172113a17862a410"
            }}
            style={styles.ImageBackground_14_199}
          />
        </View>
      </View>
      <View style={styles.View_14_202}>
        <View style={styles.View_14_203} />
        <View style={styles.View_14_204}>
          <Text style={styles.Text_14_204}>LOGIN</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b117/0072/7303553838a51317d404471f4d273ac0"
        }}
        style={styles.ImageBackground_14_205}
      />
      <View style={styles.View_14_206}>
        <Text style={styles.Text_14_206}>Forgot your password?</Text>
      </View>
      <View style={styles.View_14_207}>
        <View style={styles.View_14_208}>
          <Text style={styles.Text_14_208}>CTB Mobile</Text>
        </View>
        <View style={styles.View_14_209}>
          <Text style={styles.Text_14_209}>Caring Transaction Based</Text>
        </View>
      </View>
      <View style={styles.View_14_212}>
        <View style={styles.View_14_210} />
        <View style={styles.View_14_211}>
          <Text style={styles.Text_14_211}>
            Login Success! Stay cool.. and we will direct You to Homepage.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faf2/0f8b/880ceee6b82dc1d68c8e3e804e02606b"
          }}
          style={styles.ImageBackground_14_213}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_14_89: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_14_90: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_91: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%"),
    top: hp("0%")
  },
  View_14_92: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_93: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("0.8995502248875562%")
  },
  ImageBackground_14_94: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_14_95: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_14_98: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666667993%"),
    top: hp("0.4497751124437781%")
  },
  ImageBackground_14_101: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.8995502248875562%")
  },
  ImageBackground_14_104: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("0.8995502248875562%"),
    minHeight: hp("0.8995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    top: hp("1.3493253373313343%")
  },
  ImageBackground_14_105: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666677%"),
    top: hp("0.8995502248875562%")
  },
  ImageBackground_14_111: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("1.9490254872563717%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0.7496251874062968%")
  },
  View_14_118: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    height: hp("2.2488755622188905%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333346%"),
    top: hp("0.7496251874062968%")
  },
  View_14_119: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_14_119: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_120: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96.40179910044976%"),
    minHeight: hp("96.40179910044976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.598200899550225%"),
    resizeMode: "cover"
  },
  View_14_121: {
    width: wp("95.73333333333333%"),
    minWidth: wp("95.73333333333333%"),
    height: hp("6.446776611694154%"),
    minHeight: hp("6.446776611694154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("92.20389805097452%")
  },
  ImageBackground_14_122: {
    width: wp("95.73333333333333%"),
    minWidth: wp("95.73333333333333%"),
    height: hp("3.1484257871064467%"),
    minHeight: hp("3.1484257871064467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2983508245877147%")
  },
  View_14_179: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%"),
    top: hp("0%")
  },
  Text_14_179: {
    color: "rgba(221, 221, 221, 1)",
    fontSize: 9,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_180: {
    width: wp("25.909875488281248%"),
    minWidth: wp("25.909875488281248%"),
    minHeight: hp("14.69201769964627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.004541015625001%"),
    top: hp("26.444998745439293%")
  },
  Text_14_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_181: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6.746626686656672%"),
    minHeight: hp("6.746626686656672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("43.47826086956522%")
  },
  View_14_182: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6.746626686656672%"),
    minHeight: hp("6.746626686656672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_14_183: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000003%"),
    top: hp("0.29235565322807133%")
  },
  ImageBackground_14_184: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.949025487256371%")
  },
  View_14_185: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("2.248875562218892%")
  },
  Text_14_185: {
    color: "rgba(52, 52, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_186: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6.746626686656672%"),
    minHeight: hp("6.746626686656672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("52.47376311844077%")
  },
  View_14_187: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6.746626686656672%"),
    minHeight: hp("6.746626686656672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_14_188: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000003%"),
    top: hp("0.29235565322808554%")
  },
  ImageBackground_14_189: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.9490254872563781%")
  },
  ImageBackground_14_190: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("1.199400299850075%"),
    minHeight: hp("1.199400299850075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("2.8485757121439335%")
  },
  View_14_198: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("3.1484257871064467%"),
    minHeight: hp("3.1484257871064467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666667%"),
    top: hp("1.7991004497751177%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_14_199: {
    width: wp("4.195102945963542%"),
    height: hp("1.5742128935532234%"),
    top: hp("0.7871064467766118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.70413411458334%")
  },
  View_14_202: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("68.81559220389805%")
  },
  View_14_203: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 206, 217, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_14_204: {
    flexGrow: 1,
    width: wp("80%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7991004497751106%")
  },
  Text_14_204: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_205: {
    width: wp("82.66666666666667%"),
    minWidth: wp("82.66666666666667%"),
    height: hp("0.000004063127900566627%"),
    minHeight: hp("0.000004063127900566627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("79.31034025223717%")
  },
  View_14_206: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666666%"),
    top: hp("61.46926536731634%")
  },
  Text_14_206: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_207: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    height: hp("6.446776611694154%"),
    minHeight: hp("6.446776611694154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("11.244377811094452%")
  },
  View_14_208: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    minHeight: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_14_208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_209: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666728%"),
    top: hp("4.497751124437782%")
  },
  Text_14_209: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_212: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.598200899550225%")
  },
  View_14_210: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(76, 178, 86, 1)"
  },
  View_14_211: {
    width: wp("68.33333333333333%"),
    minWidth: wp("68.33333333333333%"),
    minHeight: hp("4.7976011994003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944449869791666%"),
    top: hp("0.7496251874062967%")
  },
  Text_14_211: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_213: {
    width: wp("2.933333333333333%"),
    minWidth: wp("2.933333333333333%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("2.0989505247376314%")
  },
  View_2: { height: 667 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
