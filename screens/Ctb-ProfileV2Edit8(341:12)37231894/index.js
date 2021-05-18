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
      <View style={styles.View_341_13}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_341_14}
        />
        <View style={styles.View_341_15}>
          <View source={{ uri: "null" }} style={styles.View_341_16} />
          <View style={styles.View_341_17}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_341_18}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_341_19}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_341_22}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_341_25}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_341_28}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_341_29}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_341_35}
          />
          <View style={styles.View_341_42}>
            <View style={styles.View_341_43}>
              <Text style={styles.Text_341_43}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_341_44}>
        <View style={styles.View_341_46} />
        <View style={styles.View_341_47} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f4e/9be8/38d244db5d2f5137e75bf8fbfb48c459"
          }}
          style={styles.ImageBackground_341_48}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63d6/9941/106f53ab3243538fb94e4c94e93f7cf5"
          }}
          style={styles.ImageBackground_341_49}
        />
      </View>
      <View style={styles.View_341_67}>
        <View style={styles.View_341_69}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
            }}
            style={styles.ImageBackground_341_70}
          />
          <View style={styles.View_341_71}>
            <View source={{ uri: "null" }} style={styles.View_341_72} />
            <View style={styles.View_341_73}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
                }}
                style={styles.ImageBackground_341_74}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
                }}
                style={styles.ImageBackground_341_75}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
                }}
                style={styles.ImageBackground_341_78}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
                }}
                style={styles.ImageBackground_341_81}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
                }}
                style={styles.ImageBackground_341_84}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
              }}
              style={styles.ImageBackground_341_85}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
              }}
              style={styles.ImageBackground_341_91}
            />
            <View style={styles.View_341_98}>
              <View style={styles.View_341_99}>
                <Text style={styles.Text_341_99}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_341_100}>
          <View style={styles.View_341_101}>
            <Text style={styles.Text_341_101}>Edit Profile</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c93/fc33/7fc531d11cc81295adb55d30823af894"
            }}
            style={styles.ImageBackground_341_102}
          />
        </View>
      </View>
      <View style={styles.View_341_121}>
        <View style={styles.View_341_122} />
        <View style={styles.View_341_123}>
          <View style={styles.View_341_124} />
          <View style={styles.View_341_127}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607d/51af/b811d5e9a2bc5c6e74d5fee0505e1ccb"
              }}
              style={styles.ImageBackground_341_128}
            />
          </View>
          <View style={styles.View_341_130}>
            <View style={styles.View_341_131}>
              <Text style={styles.Text_341_131}>Edit name</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_341_132}>
          <View style={styles.View_341_133} />
          <View style={styles.View_341_136}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607d/51af/b811d5e9a2bc5c6e74d5fee0505e1ccb"
              }}
              style={styles.ImageBackground_341_137}
            />
          </View>
          <View style={styles.View_341_139}>
            <View style={styles.View_341_140}>
              <Text style={styles.Text_341_140}>Edit bio</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_341_141}>
          <View style={styles.View_341_142}>
            <View style={styles.View_341_143}>
              <Text style={styles.Text_341_143}>Agent Number One</Text>
            </View>
          </View>
          <View style={styles.View_341_144}>
            <View style={styles.View_341_145}>
              <Text style={styles.Text_341_145}>ID : Agent Digital 001</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_341_146}>
          <View style={styles.View_341_147}>
            <Text style={styles.Text_341_147}>
              This journey feels so lonely, solitary and long one. In the face
              adversity, you must survive and remain unyielding…
            </Text>
          </View>
        </View>
        <View style={styles.View_341_148}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be30/7b26/ae1c4052f08e325505fa589d9e56f49a"
            }}
            style={styles.ImageBackground_341_149}
          />
        </View>
        <View style={styles.View_341_150}>
          <View style={styles.View_341_151} />
          <View style={styles.View_341_152}>
            <View style={styles.View_341_153}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4901/3f83/a3a1cf8bb39458774b125d21658bacf0"
                }}
                style={styles.ImageBackground_341_154}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_341_158}>
        <View style={styles.View_341_159} />
        <View style={styles.View_341_160}>
          <View style={styles.View_341_603}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/950f/69a3/a738149bb1b9dbc8a85540db0f3e0560"
              }}
              style={styles.ImageBackground_341_604}
            />
          </View>
          <View style={styles.View_341_164}>
            <Text style={styles.Text_341_164}>Save</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_341_165}>
        <View style={styles.View_341_166} />
        <View style={styles.View_341_167}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6889/225d/751a5f86cd53eceefe9f5a98fa188820"
            }}
            style={styles.ImageBackground_341_168}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7c5/3b76/a85cfefd413a3ae551e4798b5c5c739a"
            }}
            style={styles.ImageBackground_341_169}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b1/c289/c837757e71a1dc16ff42004d980343f8"
            }}
            style={styles.ImageBackground_341_170}
          />
          <View style={styles.View_341_171}>
            <Text style={styles.Text_341_171}>Loading</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_341_13: {
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
  ImageBackground_341_14: {
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
  View_341_15: {
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
  View_341_16: {
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
  View_341_17: {
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
  ImageBackground_341_18: {
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
  ImageBackground_341_19: {
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
  ImageBackground_341_22: {
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
  ImageBackground_341_25: {
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
  ImageBackground_341_28: {
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
  ImageBackground_341_29: {
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
  ImageBackground_341_35: {
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
  View_341_42: {
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
  View_341_43: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_341_43: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_44: {
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
  View_341_46: {
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
  View_341_47: {
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
  ImageBackground_341_48: {
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
  ImageBackground_341_49: {
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
  View_341_67: {
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
  View_341_69: {
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
  ImageBackground_341_70: {
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
  View_341_71: {
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
  View_341_72: {
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
  View_341_73: {
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
  ImageBackground_341_74: {
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
  ImageBackground_341_75: {
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
  ImageBackground_341_78: {
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
  ImageBackground_341_81: {
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
  ImageBackground_341_84: {
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
  ImageBackground_341_85: {
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
  ImageBackground_341_91: {
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
  View_341_98: {
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
  View_341_99: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_341_99: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_100: {
    width: wp("46.44444173177084%"),
    minWidth: wp("46.44444173177084%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.554654947916666%"),
    top: hp("5.601092896174864%")
  },
  View_341_101: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6444335937500005%"),
    top: hp("0%")
  },
  Text_341_101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_341_102: {
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
  View_341_121: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("66.39344262295081%"),
    minHeight: hp("66.39344262295081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("10.10928961748634%")
  },
  View_341_122: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("66.39344262295081%"),
    minHeight: hp("66.39344262295081%"),
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
  View_341_123: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("27.459016393442617%")
  },
  View_341_124: {
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
  View_341_127: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666667%"),
    top: hp("3.961748633879786%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_341_128: {
    width: wp("3.8144574483235676%"),
    height: hp("1.954176386848825%"),
    top: hp("0.2851642546106561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.69580078125%")
  },
  View_341_130: {
    width: wp("16.8%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%")
  },
  View_341_131: {
    width: wp("16.8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_341_131: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_132: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("27.459016393442624%"),
    minHeight: hp("27.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("37.70491803278688%")
  },
  View_341_133: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688607%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_341_136: {
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
  ImageBackground_341_137: {
    width: wp("3.8144574483235676%"),
    height: hp("1.954176386848825%"),
    top: hp("0.2851642546106632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.69580078125%")
  },
  View_341_139: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("0%")
  },
  View_341_140: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_341_140: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_141: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("22.950819672131146%")
  },
  View_341_142: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%")
  },
  View_341_143: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_341_143: {
    color: "rgba(52, 52, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_144: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_341_145: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_341_145: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_146: {
    width: wp("68.53333333333333%"),
    minWidth: wp("68.53333333333333%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("40.84699453551912%")
  },
  View_341_147: {
    width: wp("68.53333333333333%"),
    minWidth: wp("68.53333333333333%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_341_147: {
    color: "rgba(52, 52, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_148: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333333333333%"),
    top: hp("1.6393442622950811%")
  },
  ImageBackground_341_149: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_341_150: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.00000000000001%"),
    top: hp("17.07650273224044%")
  },
  View_341_151: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 206, 217, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_341_152: {
    width: wp("6.826666768391927%"),
    minWidth: wp("6.826666768391927%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9200195312499915%"),
    top: hp("0.40983606557376717%")
  },
  View_341_153: {
    width: wp("6.826666768391927%"),
    minWidth: wp("6.826666768391927%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_341_154: {
    width: wp("5.6888890584309895%"),
    height: hp("2.73224043715847%"),
    top: hp("0.27322404371584597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5688802083333329%")
  },
  View_341_158: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    top: hp("77.59562841530054%")
  },
  View_341_159: {
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
  View_341_160: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666742%"),
    top: hp("0.546448087431699%")
  },
  View_341_603: {
    width: wp("3.2%"),
    height: hp("1.366120218579235%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_341_604: {
    width: wp("3.2%"),
    height: hp("1.366120218579235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_341_164: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%")
  },
  Text_341_164: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_165: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111.6120218579235%"),
    minHeight: hp("111.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322406%")
  },
  View_341_166: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111.6120218579235%"),
    minHeight: hp("111.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.699999988079071
  },
  View_341_167: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46666666666667%"),
    top: hp("32.37704918032787%")
  },
  ImageBackground_341_168: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_341_169: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_341_170: {
    width: wp("18.10644124348958%"),
    minWidth: wp("18.10644124348958%"),
    height: hp("9.275840800968025%"),
    minHeight: hp("9.275840800968025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6134765624999972%"),
    top: hp("0.8265427552937155%")
  },
  View_341_171: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999993%"),
    top: hp("3.0054644808743163%")
  },
  Text_341_171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
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
