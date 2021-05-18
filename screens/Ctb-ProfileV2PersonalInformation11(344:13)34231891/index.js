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
      <View style={styles.View_344_14}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_344_15}
        />
        <View style={styles.View_344_16}>
          <View source={{ uri: "null" }} style={styles.View_344_17} />
          <View style={styles.View_344_18}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_344_19}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_344_20}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_344_23}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_344_26}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_344_29}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_344_30}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_344_36}
          />
          <View style={styles.View_344_43}>
            <View style={styles.View_344_44}>
              <Text style={styles.Text_344_44}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_344_45}>
        <View style={styles.View_344_47} />
        <View style={styles.View_344_48} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f4e/9be8/38d244db5d2f5137e75bf8fbfb48c459"
          }}
          style={styles.ImageBackground_344_49}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63d6/9941/106f53ab3243538fb94e4c94e93f7cf5"
          }}
          style={styles.ImageBackground_344_50}
        />
      </View>
      <View style={styles.View_344_51}>
        <View style={styles.View_344_53}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
            }}
            style={styles.ImageBackground_344_54}
          />
          <View style={styles.View_344_55}>
            <View source={{ uri: "null" }} style={styles.View_344_56} />
            <View style={styles.View_344_57}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
                }}
                style={styles.ImageBackground_344_58}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
                }}
                style={styles.ImageBackground_344_59}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
                }}
                style={styles.ImageBackground_344_62}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
                }}
                style={styles.ImageBackground_344_65}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
                }}
                style={styles.ImageBackground_344_68}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
              }}
              style={styles.ImageBackground_344_69}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
              }}
              style={styles.ImageBackground_344_75}
            />
            <View style={styles.View_344_82}>
              <View style={styles.View_344_83}>
                <Text style={styles.Text_344_83}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_344_84}>
          <View style={styles.View_344_85}>
            <Text style={styles.Text_344_85}>Personal Information</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c93/fc33/7fc531d11cc81295adb55d30823af894"
            }}
            style={styles.ImageBackground_344_86}
          />
        </View>
      </View>
      <View style={styles.View_344_105}>
        <View style={styles.View_344_106} />
        <View style={styles.View_344_107}>
          <View style={styles.View_344_108}>
            <Text style={styles.Text_344_108}>
              Complete your account setup by providing your proper biography
              info.
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8917/db9b/4c05ab1ffc968b3b408cc099ae8496b4"
          }}
          style={styles.ImageBackground_344_159}
        />
      </View>
      <View style={styles.View_344_110}>
        <View style={styles.View_344_111} />
        <View style={styles.View_344_162}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607d/51af/b811d5e9a2bc5c6e74d5fee0505e1ccb"
            }}
            style={styles.ImageBackground_344_163}
          />
        </View>
        <View style={styles.View_344_118}>
          <View style={styles.View_344_119}>
            <Text style={styles.Text_344_119}>Country</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_344_128}>
        <View style={styles.View_344_129} />
        <View style={styles.View_344_165}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607d/51af/b811d5e9a2bc5c6e74d5fee0505e1ccb"
            }}
            style={styles.ImageBackground_344_166}
          />
        </View>
        <View style={styles.View_344_136}>
          <View style={styles.View_344_137}>
            <Text style={styles.Text_344_137}>City</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_344_186}>
        <View style={styles.View_344_187} />
        <View style={styles.View_344_190}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607d/51af/b811d5e9a2bc5c6e74d5fee0505e1ccb"
            }}
            style={styles.ImageBackground_344_191}
          />
        </View>
        <View style={styles.View_344_193}>
          <View style={styles.View_344_194}>
            <Text style={styles.Text_344_194}>City</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_344_177}>
        <View style={styles.View_344_178} />
        <View style={styles.View_344_181}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607d/51af/b811d5e9a2bc5c6e74d5fee0505e1ccb"
            }}
            style={styles.ImageBackground_344_182}
          />
        </View>
        <View style={styles.View_344_184}>
          <View style={styles.View_344_185}>
            <Text style={styles.Text_344_185}>Address</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_344_195}>
        <View style={styles.View_344_196} />
        <View style={styles.View_344_199}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607d/51af/b811d5e9a2bc5c6e74d5fee0505e1ccb"
            }}
            style={styles.ImageBackground_344_200}
          />
        </View>
        <View style={styles.View_344_202}>
          <View style={styles.View_344_203}>
            <Text style={styles.Text_344_203}>Postal Code</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_344_204}>
        <View style={styles.View_344_205} />
        <View style={styles.View_344_208}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607d/51af/b811d5e9a2bc5c6e74d5fee0505e1ccb"
            }}
            style={styles.ImageBackground_344_209}
          />
        </View>
        <View style={styles.View_344_211}>
          <View style={styles.View_344_212}>
            <Text style={styles.Text_344_212}>Contact Number</Text>
          </View>
        </View>
        <View style={styles.View_344_213} />
      </View>
      <View style={styles.View_344_217}>
        <View style={styles.View_344_218} />
        <View style={styles.View_344_221}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607d/51af/b811d5e9a2bc5c6e74d5fee0505e1ccb"
            }}
            style={styles.ImageBackground_344_222}
          />
        </View>
        <View style={styles.View_344_224}>
          <View style={styles.View_344_225}>
            <Text style={styles.Text_344_225}>Email</Text>
          </View>
        </View>
        <View style={styles.View_344_226} />
      </View>
      <View style={styles.View_344_152}>
        <View style={styles.View_344_153} />
        <View style={styles.View_344_154}>
          <View style={styles.View_344_155}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/950f/69a3/a738149bb1b9dbc8a85540db0f3e0560"
              }}
              style={styles.ImageBackground_344_156}
            />
          </View>
          <View style={styles.View_344_158}>
            <Text style={styles.Text_344_158}>Save</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_344_14: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_344_15: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_344_16: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%"),
    top: hp("0%")
  },
  View_344_17: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_344_18: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_344_19: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_344_20: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_344_23: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666667993%"),
    top: hp("0.4098360655737705%")
  },
  ImageBackground_344_26: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_344_29: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    top: hp("1.2295081967213113%")
  },
  ImageBackground_344_30: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666677%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_344_36: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0.6830601092896175%")
  },
  View_344_43: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333346%"),
    top: hp("0.6830601092896175%")
  },
  View_344_44: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_344_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_45: {
    width: wp("100.00001627604166%"),
    minWidth: wp("100.00001627604166%"),
    height: hp("121.72131147540983%"),
    minHeight: hp("121.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590164%")
  },
  View_344_47: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("121.72131147540983%"),
    minHeight: hp("121.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 246, 250, 1)"
  },
  View_344_48: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.852459016393443%"),
    minHeight: hp("18.852459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_344_49: {
    width: wp("41.73666178385417%"),
    minWidth: wp("41.73666178385417%"),
    height: hp("20.081967213114755%"),
    minHeight: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("91.39344262295081%")
  },
  ImageBackground_344_50: {
    width: wp("24.70128987630208%"),
    minWidth: wp("24.70128987630208%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.59016393442624%")
  },
  View_344_51: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_344_53: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_344_54: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_344_55: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.53333333333333%"),
    top: hp("0%")
  },
  View_344_56: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_344_57: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_344_58: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_344_59: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_344_62: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2666666666666515%"),
    top: hp("0.4098360655737705%")
  },
  ImageBackground_344_65: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_344_68: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333428%"),
    top: hp("1.2295081967213113%")
  },
  ImageBackground_344_69: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666663%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_344_75: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0.6830601092896175%")
  },
  View_344_82: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53333333333333%"),
    top: hp("0.6830601092896175%")
  },
  View_344_83: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_344_83: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_84: {
    width: wp("46.44444173177084%"),
    minWidth: wp("46.44444173177084%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.5546875%"),
    top: hp("5.601092896174864%")
  },
  View_344_85: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6444661458333325%"),
    top: hp("0%")
  },
  Text_344_85: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_344_86: {
    width: wp("1.944444402058919%"),
    minWidth: wp("1.944444402058919%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371584685%")
  },
  View_344_105: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("93.85245901639344%"),
    minHeight: hp("93.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("10.10928961748634%")
  },
  View_344_106: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("93.85245901639344%"),
    minHeight: hp("93.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_344_107: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    height: hp("8.101737955228879%"),
    minHeight: hp("8.101737955228879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666664%"),
    top: hp("5.135558081454919%")
  },
  View_344_108: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("8.101737955228879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_344_108: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_344_159: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%")
  },
  View_344_110: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("23.497267759562842%")
  },
  View_344_111: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_344_162: {
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.9617486338797825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_344_163: {
    width: wp("3.8144574483235676%"),
    height: hp("1.954176386848825%"),
    top: hp("0.2851642546106561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6957682291666742%")
  },
  View_344_118: {
    width: wp("13.333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666669%")
  },
  View_344_119: {
    width: wp("13.333333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_344_119: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_128: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("33.46994535519126%")
  },
  View_344_129: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_344_165: {
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.961748633879786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_344_166: {
    width: wp("3.8144574483235676%"),
    height: hp("1.954176386848825%"),
    top: hp("0.285164254610649%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.69576822916666%")
  },
  View_344_136: {
    width: wp("6.666666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666669%")
  },
  View_344_137: {
    width: wp("6.666666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_344_137: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_186: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("33.46994535519126%")
  },
  View_344_187: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_344_190: {
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.961748633879786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_344_191: {
    width: wp("3.8144574483235676%"),
    height: hp("1.954176386848825%"),
    top: hp("0.285164254610649%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.69576822916666%")
  },
  View_344_193: {
    width: wp("6.666666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666669%")
  },
  View_344_194: {
    width: wp("6.666666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_344_194: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_177: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("27.459016393442624%"),
    minHeight: hp("27.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("43.44262295081967%")
  },
  View_344_178: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_344_181: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666667%"),
    top: hp("23.360655737704917%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_344_182: {
    width: wp("3.8144574483235676%"),
    height: hp("1.954176386848825%"),
    top: hp("0.2851642546106632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.69576822916666%")
  },
  View_344_184: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666669%"),
    top: hp("0%")
  },
  View_344_185: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_344_185: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_195: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("72.40437158469946%")
  },
  View_344_196: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_344_199: {
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_344_200: {
    width: wp("3.8144574483235676%"),
    height: hp("1.954176386848825%"),
    top: hp("0.285164254610649%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.69576822916666%")
  },
  View_344_202: {
    width: wp("20.266666666666666%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666669%")
  },
  View_344_203: {
    width: wp("20.266666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_344_203: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_204: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("82.37704918032787%")
  },
  View_344_205: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_344_208: {
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_344_209: {
    width: wp("3.8144574483235676%"),
    height: hp("1.954176386848825%"),
    top: hp("0.285164254610649%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.69576822916666%")
  },
  View_344_211: {
    width: wp("27.46666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666669%")
  },
  View_344_212: {
    width: wp("27.46666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_344_212: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_213: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_344_217: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("92.34972677595628%")
  },
  View_344_218: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_344_221: {
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_344_222: {
    width: wp("3.8144574483235676%"),
    height: hp("1.954176386848825%"),
    top: hp("0.2851642546106632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.69576822916666%")
  },
  View_344_224: {
    width: wp("9.333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666669%")
  },
  View_344_225: {
    width: wp("9.333333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_344_225: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_226: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_344_152: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("105.05464480874316%")
  },
  View_344_153: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
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
  View_344_154: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("0.5464480874316848%")
  },
  View_344_155: {
    width: wp("3.2%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371587083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_344_156: {
    width: wp("3.2%"),
    height: hp("1.366120218579235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_344_158: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%")
  },
  Text_344_158: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 840 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
