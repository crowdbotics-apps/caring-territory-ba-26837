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
      <View style={styles.View_32_1}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_32_2}
        />
        <View style={styles.View_32_3}>
          <View source={{ uri: "null" }} style={styles.View_32_4} />
          <View style={styles.View_32_5}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_32_6}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_32_7}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_32_10}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_32_13}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_32_16}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_32_17}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_32_23}
          />
          <View style={styles.View_32_30}>
            <View style={styles.View_32_31}>
              <Text style={styles.Text_32_31}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_32_36}>
        <View style={styles.View_32_37} />
      </View>
      <View style={styles.View_32_38}>
        <View style={styles.View_32_40}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
            }}
            style={styles.ImageBackground_32_41}
          />
          <View style={styles.View_32_42}>
            <View source={{ uri: "null" }} style={styles.View_32_43} />
            <View style={styles.View_32_44}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
                }}
                style={styles.ImageBackground_32_45}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
                }}
                style={styles.ImageBackground_32_46}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
                }}
                style={styles.ImageBackground_32_49}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
                }}
                style={styles.ImageBackground_32_52}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
                }}
                style={styles.ImageBackground_32_55}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
              }}
              style={styles.ImageBackground_32_56}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
              }}
              style={styles.ImageBackground_32_62}
            />
            <View style={styles.View_32_69}>
              <View style={styles.View_32_70}>
                <Text style={styles.Text_32_70}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b35/e9f5/27521ed94985a2f0be968d0f03f348f6"
          }}
          style={styles.ImageBackground_32_71}
        />
        <View style={styles.View_32_72}>
          <View style={styles.View_32_73}>
            <Text style={styles.Text_32_73}>Inquiry Customer Prospect</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c93/fc33/7fc531d11cc81295adb55d30823af894"
            }}
            style={styles.ImageBackground_32_74}
          />
        </View>
      </View>
      <View style={styles.View_32_75}>
        <Text style={styles.Text_32_75}>
          This map will showing your prospect customer
        </Text>
      </View>
      <View style={styles.View_32_77}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba6a/a613/1fc4ce96aa9babf84e05cc98d1c3ad00"
          }}
          style={styles.ImageBackground_32_78}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a54e/30c9/26cd37482f195f3a5f947947e911eaba"
          }}
          style={styles.ImageBackground_32_89}
        />
        <View style={styles.View_35_115}>
          <View style={styles.View_32_79}>
            <View style={styles.View_32_80}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c172/9ec9/b714dcfa79e5b6773186e9c641f56202"
                }}
                style={styles.ImageBackground_32_81}
              />
            </View>
            <View style={styles.View_32_83}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66e7/1476/af904147cc6c03b7cef80445fe6075e5"
                }}
                style={styles.ImageBackground_32_84}
              />
            </View>
          </View>
          <View style={styles.View_32_86}>
            <View style={styles.View_32_87} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e238/c879/5641a5edb3fc1d021a756391c5ef457b"
              }}
              style={styles.ImageBackground_32_88}
            />
          </View>
        </View>
        <View style={styles.View_35_127}>
          <View style={styles.View_35_128}>
            <View style={styles.View_35_129}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c172/9ec9/b714dcfa79e5b6773186e9c641f56202"
                }}
                style={styles.ImageBackground_35_130}
              />
            </View>
            <View style={styles.View_35_132}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66e7/1476/af904147cc6c03b7cef80445fe6075e5"
                }}
                style={styles.ImageBackground_35_133}
              />
            </View>
          </View>
          <View style={styles.View_35_135}>
            <View style={styles.View_35_136} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e238/c879/5641a5edb3fc1d021a756391c5ef457b"
              }}
              style={styles.ImageBackground_35_137}
            />
          </View>
        </View>
        <View style={styles.View_35_138}>
          <View style={styles.View_35_139}>
            <View style={styles.View_35_140}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c172/9ec9/b714dcfa79e5b6773186e9c641f56202"
                }}
                style={styles.ImageBackground_35_141}
              />
            </View>
            <View style={styles.View_35_143}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66e7/1476/af904147cc6c03b7cef80445fe6075e5"
                }}
                style={styles.ImageBackground_35_144}
              />
            </View>
          </View>
          <View style={styles.View_35_146}>
            <View style={styles.View_35_147} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e238/c879/5641a5edb3fc1d021a756391c5ef457b"
              }}
              style={styles.ImageBackground_35_148}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_32_107}>
        <View style={styles.View_32_108} />
        <View style={styles.View_32_109}>
          <Text style={styles.Text_32_109}>Phone: +62821345678</Text>
        </View>
        <View style={styles.View_32_110}>
          <Text style={styles.Text_32_110}>Whatsapp: +62821345678</Text>
        </View>
        <View style={styles.View_32_111}>
          <Text style={styles.Text_32_111}>
            Koordinat: -6.1777387,106.8263867
          </Text>
        </View>
        <View style={styles.View_32_112}>
          <Text style={styles.Text_32_112}>
            Alamat: Monas Selatan, Block 1, Indonesia
          </Text>
        </View>
        <View style={styles.View_32_113}>
          <Text style={styles.Text_32_113}>Nama: Pelanggan Setia 1</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b02/db96/8bb9e9e06f93e71676a8df3734689bda"
          }}
          style={styles.ImageBackground_32_114}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_32_1: {
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
  ImageBackground_32_2: {
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
  View_32_3: {
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
  View_32_4: {
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
  View_32_5: {
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
  ImageBackground_32_6: {
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
  ImageBackground_32_7: {
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
  ImageBackground_32_10: {
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
  ImageBackground_32_13: {
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
  ImageBackground_32_16: {
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
  ImageBackground_32_17: {
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
  ImageBackground_32_23: {
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
  View_32_30: {
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
  View_32_31: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_32_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_36: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.793103448275861%"),
    minHeight: hp("13.793103448275861%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.598200899550225%")
  },
  View_32_37: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.793103448275861%"),
    minHeight: hp("13.793103448275861%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_32_38: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.094452773613193%"),
    minHeight: hp("11.094452773613193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_32_40: {
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
  ImageBackground_32_41: {
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
  View_32_42: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.53333333333333%"),
    top: hp("0%")
  },
  View_32_43: {
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
  View_32_44: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("0.8995502248875562%")
  },
  ImageBackground_32_45: {
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
  ImageBackground_32_46: {
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
  ImageBackground_32_49: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2666666666666515%"),
    top: hp("0.4497751124437781%")
  },
  ImageBackground_32_52: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%"),
    top: hp("0.8995502248875562%")
  },
  ImageBackground_32_55: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("0.8995502248875562%"),
    minHeight: hp("0.8995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333428%"),
    top: hp("1.3493253373313343%")
  },
  ImageBackground_32_56: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666663%"),
    top: hp("0.8995502248875562%")
  },
  ImageBackground_32_62: {
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
  View_32_69: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    height: hp("2.2488755622188905%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53333333333333%"),
    top: hp("0.7496251874062968%")
  },
  View_32_70: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_32_70: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_32_71: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("6.146926536731634%")
  },
  View_32_72: {
    width: wp("54.97777506510416%"),
    minWidth: wp("54.97777506510416%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555558268229166%"),
    top: hp("6.146926536731634%")
  },
  View_32_73: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.377775065104167%"),
    top: hp("0%")
  },
  Text_32_73: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_32_74: {
    width: wp("1.944444402058919%"),
    minWidth: wp("1.944444402058919%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2998500749625199%")
  },
  View_32_75: {
    width: wp("55.2%"),
    minWidth: wp("55.2%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("14.992503748125937%")
  },
  Text_32_75: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_77: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("82.6086956521739%"),
    minHeight: hp("82.6086956521739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.391304347826086%")
  },
  ImageBackground_32_78: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("82.6086956521739%"),
    minHeight: hp("82.6086956521739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_32_89: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("44.97751124437781%"),
    minHeight: hp("44.97751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("15.442278860569715%")
  },
  View_35_115: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("17.55899546564608%"),
    minHeight: hp("17.55899546564608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.333333333333336%"),
    top: hp("27.886056971514243%")
  },
  View_32_79: {
    width: wp("14.826744588216146%"),
    minWidth: wp("14.826744588216146%"),
    height: hp("8.413568751207892%"),
    minHeight: hp("8.413568751207892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("9.14542728635682%")
  },
  View_32_80: {
    width: wp("12.758124796549481%"),
    minWidth: wp("12.758124796549481%"),
    height: hp("7.263765234997248%"),
    minHeight: hp("7.263765234997248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.068619791666663%"),
    top: hp("1.1498035162106461%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_32_81: {
    width: wp("9.749445597330729%"),
    height: hp("5.681066784722873%"),
    top: hp("0.7898882589955036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5062988281250043%")
  },
  View_32_83: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("7.19640179910045%"),
    minHeight: hp("7.19640179910045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_32_84: {
    width: wp("9.066677856445313%"),
    height: hp("5.992077851760155%"),
    top: hp("0.5997001499250416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666585286458286%")
  },
  View_32_86: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("9.745127436281859%"),
    minHeight: hp("9.745127436281859%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_32_87: {
    width: wp("13.066666666666665%"),
    height: hp("5.547226386806597%"),
    top: hp("1.3493253373313294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    backgroundColor: "rgba(37, 206, 217, 1)"
  },
  ImageBackground_32_88: {
    width: wp("14.666666666666666%"),
    height: hp("8.120939720874427%"),
    top: hp("0.8121061539542751%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4666666666666615%")
  },
  View_35_127: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("17.55899546564608%"),
    minHeight: hp("17.55899546564608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.4%"),
    top: hp("17.241379310344833%")
  },
  View_35_128: {
    width: wp("14.826744588216146%"),
    minWidth: wp("14.826744588216146%"),
    height: hp("8.413568751207892%"),
    minHeight: hp("8.413568751207892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("9.14542728635682%")
  },
  View_35_129: {
    width: wp("12.758124796549481%"),
    minWidth: wp("12.758124796549481%"),
    height: hp("7.263765234997248%"),
    minHeight: hp("7.263765234997248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.068619791666677%"),
    top: hp("1.1498035162106461%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_35_130: {
    width: wp("9.749445597330729%"),
    height: hp("5.681066784722873%"),
    top: hp("0.7898882589954965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5062988281249972%")
  },
  View_35_132: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("7.19640179910045%"),
    minHeight: hp("7.19640179910045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_35_133: {
    width: wp("9.066677856445313%"),
    height: hp("5.992077851760155%"),
    top: hp("0.5997001499250345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666585286458428%")
  },
  View_35_135: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("9.745127436281859%"),
    minHeight: hp("9.745127436281859%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_35_136: {
    width: wp("13.066666666666665%"),
    height: hp("5.547226386806597%"),
    top: hp("1.3493253373313294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    backgroundColor: "rgba(44, 73, 105, 1)"
  },
  ImageBackground_35_137: {
    width: wp("14.666666666666666%"),
    height: hp("8.120939720874427%"),
    top: hp("0.812106153954268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4666666666666544%")
  },
  View_35_138: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("17.55899546564608%"),
    minHeight: hp("17.55899546564608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("19.490254872563717%")
  },
  View_35_139: {
    width: wp("14.826744588216146%"),
    minWidth: wp("14.826744588216146%"),
    height: hp("8.413568751207892%"),
    minHeight: hp("8.413568751207892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("9.14542728635682%")
  },
  View_35_140: {
    width: wp("12.758124796549481%"),
    minWidth: wp("12.758124796549481%"),
    height: hp("7.263765234997248%"),
    minHeight: hp("7.263765234997248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0686197916666664%"),
    top: hp("1.1498035162106461%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_35_141: {
    width: wp("9.749445597330729%"),
    height: hp("5.681066784722873%"),
    top: hp("0.7898882589955036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5062967936197929%")
  },
  View_35_143: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("7.19640179910045%"),
    minHeight: hp("7.19640179910045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_35_144: {
    width: wp("9.066677856445313%"),
    height: hp("5.992077851760155%"),
    top: hp("0.5997001499250345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666056315104%")
  },
  View_35_146: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("9.745127436281859%"),
    minHeight: hp("9.745127436281859%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_35_147: {
    width: wp("13.066666666666665%"),
    height: hp("5.547226386806597%"),
    top: hp("1.3493253373313365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    backgroundColor: "rgba(44, 73, 105, 1)"
  },
  ImageBackground_35_148: {
    width: wp("14.666666666666666%"),
    height: hp("8.120939720874427%"),
    top: hp("0.8121061539542751%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4666666666666686%")
  },
  View_32_107: {
    width: wp("77.60000000000001%"),
    minWidth: wp("77.60000000000001%"),
    height: hp("15.592203898050974%"),
    minHeight: hp("15.592203898050974%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000001%"),
    top: hp("78.41079460269866%")
  },
  View_32_108: {
    width: wp("77.60000000000001%"),
    minWidth: wp("77.60000000000001%"),
    height: hp("15.592203898050974%"),
    minHeight: hp("15.592203898050974%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_32_109: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999999%"),
    top: hp("10.794602698650664%")
  },
  Text_32_109: {
    color: "rgba(61, 97, 227, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_110: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.33333333333333%"),
    top: hp("10.794602698650664%")
  },
  Text_32_110: {
    color: "rgba(61, 97, 227, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_111: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999999%"),
    top: hp("8.245877061469258%")
  },
  Text_32_111: {
    color: "rgba(52, 52, 52, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_112: {
    width: wp("50.4%"),
    minWidth: wp("50.4%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999999%"),
    top: hp("5.6971514242878385%")
  },
  Text_32_112: {
    color: "rgba(52, 52, 52, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_113: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999999%"),
    top: hp("3.148425787106433%")
  },
  Text_32_113: {
    color: "rgba(52, 52, 52, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_32_114: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333333%"),
    top: hp("1.199400299850069%")
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
