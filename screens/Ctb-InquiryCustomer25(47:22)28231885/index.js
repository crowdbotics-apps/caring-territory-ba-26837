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
      <View style={styles.View_47_23}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_47_24}
        />
        <View style={styles.View_47_25}>
          <View source={{ uri: "null" }} style={styles.View_47_26} />
          <View style={styles.View_47_27}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_47_28}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_47_29}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_47_32}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_47_35}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_47_38}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_47_39}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_47_45}
          />
          <View style={styles.View_47_52}>
            <View style={styles.View_47_53}>
              <Text style={styles.Text_47_53}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_47_54}>
        <View style={styles.View_47_56} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f4e/9be8/38d244db5d2f5137e75bf8fbfb48c459"
          }}
          style={styles.ImageBackground_47_57}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63d6/9941/106f53ab3243538fb94e4c94e93f7cf5"
          }}
          style={styles.ImageBackground_47_58}
        />
      </View>
      <View style={styles.View_47_63}>
        <View style={styles.View_47_65}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
            }}
            style={styles.ImageBackground_47_66}
          />
          <View style={styles.View_47_67}>
            <View source={{ uri: "null" }} style={styles.View_47_68} />
            <View style={styles.View_47_69}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
                }}
                style={styles.ImageBackground_47_70}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
                }}
                style={styles.ImageBackground_47_71}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
                }}
                style={styles.ImageBackground_47_74}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
                }}
                style={styles.ImageBackground_47_77}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
                }}
                style={styles.ImageBackground_47_80}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
              }}
              style={styles.ImageBackground_47_81}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
              }}
              style={styles.ImageBackground_47_87}
            />
            <View style={styles.View_47_94}>
              <View style={styles.View_47_95}>
                <Text style={styles.Text_47_95}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_47_96}>
          <View style={styles.View_47_97}>
            <Text style={styles.Text_47_97}>Detail Pelanggan</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fd4/892a/c78f88110cc72b6ff26130adda301117"
            }}
            style={styles.ImageBackground_47_98}
          />
        </View>
      </View>
      <View style={styles.View_47_99}>
        <View style={styles.View_47_100} />
        <View style={styles.View_47_101}>
          <Text style={styles.Text_47_101}>
            Success, your data has been updated
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faf2/0f8b/880ceee6b82dc1d68c8e3e804e02606b"
          }}
          style={styles.ImageBackground_47_102}
        />
      </View>
      <View style={styles.View_47_121}>
        <View style={styles.View_47_122} />
        <View style={styles.View_47_123}>
          <Text style={styles.Text_47_123}>Phone: +62821345678</Text>
        </View>
        <View style={styles.View_47_124}>
          <Text style={styles.Text_47_124}>Whatsapp: +62821345678</Text>
        </View>
        <View style={styles.View_47_125}>
          <Text style={styles.Text_47_125}>
            Koordinat: -6.1777387,106.8263867
          </Text>
        </View>
        <View style={styles.View_47_126}>
          <Text style={styles.Text_47_126}>
            Alamat: Monas Selatan, Block 1, Kec. Pusat, 40288, Indonesia
          </Text>
        </View>
        <View style={styles.View_47_127}>
          <Text style={styles.Text_47_127}>Pelanggan Setia 1</Text>
        </View>
        <View style={styles.View_47_789}>
          <View style={styles.View_47_790}>
            <Text style={styles.Text_47_790}>Check Now &gt;&gt;</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d652/13f5/453a09cd03b2de0b1c8fee3cc1f77141"
            }}
            style={styles.ImageBackground_47_791}
          />
        </View>
      </View>
      <View style={styles.View_47_128}>
        <View style={styles.View_47_129} />
        <View style={styles.View_47_130}>
          <View style={styles.View_47_131}>
            <View style={styles.View_47_132} />
            <View style={styles.View_47_133}>
              <View style={styles.View_47_134}>
                <View style={styles.View_47_135}>
                  <View style={styles.View_47_136} />
                  <View style={styles.View_47_137}>
                    <View style={styles.View_47_138}>
                      <Text style={styles.Text_47_138}>Visit Customer</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d0e/bfa4/c8d9f84ed5a43514506d8121a6cd6729"
                    }}
                    style={styles.ImageBackground_47_139}
                  />
                  <View style={styles.View_47_140}>
                    <View style={styles.View_47_141} />
                    <View style={styles.View_47_142}>
                      <Text style={styles.Text_47_142}>Done</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_47_143}>
                  <View style={styles.View_47_144} />
                  <View style={styles.View_47_145}>
                    <View style={styles.View_47_146}>
                      <Text style={styles.Text_47_146}>
                        Accepted by Customer
                      </Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d0e/bfa4/c8d9f84ed5a43514506d8121a6cd6729"
                    }}
                    style={styles.ImageBackground_47_147}
                  />
                  <View style={styles.View_47_148}>
                    <View style={styles.View_47_149} />
                    <View style={styles.View_47_150}>
                      <Text style={styles.Text_47_150}>Done</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_47_151}>
                  <View style={styles.View_47_152} />
                  <View style={styles.View_47_153}>
                    <View style={styles.View_47_154}>
                      <Text style={styles.Text_47_154}>Customer Agreement</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d0e/bfa4/c8d9f84ed5a43514506d8121a6cd6729"
                    }}
                    style={styles.ImageBackground_47_155}
                  />
                  <View style={styles.View_47_156}>
                    <View style={styles.View_47_157} />
                    <View style={styles.View_47_158}>
                      <Text style={styles.Text_47_158}>Done</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_47_159} />
                <View style={styles.View_47_160}>
                  <View style={styles.View_47_161}>
                    <View style={styles.View_47_162}>
                      <Text style={styles.Text_47_162}>
                        Show QR/Link to Pay
                      </Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c801/ae02/cd7d2bd8a6d43bb7af2bb0814ba5ac4a"
                    }}
                    style={styles.ImageBackground_47_163}
                  />
                  <View style={styles.View_47_164}>
                    <View style={styles.View_47_165} />
                    <View style={styles.View_47_166}>
                      <Text style={styles.Text_47_166}>Done</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_47_167}>
                  <View style={styles.View_47_168} />
                  <View style={styles.View_47_169}>
                    <View style={styles.View_47_170}>
                      <Text style={styles.Text_47_170}>Payment Completed</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/227d/3575/e8d5202a4529fd5cc435ca9361340a87"
                    }}
                    style={styles.ImageBackground_47_171}
                  />
                  <View style={styles.View_47_172}>
                    <View style={styles.View_47_173} />
                    <View style={styles.View_47_174}>
                      <Text style={styles.Text_47_174}>Confirm</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_47_175} />
          </View>
          <View style={styles.View_47_176}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f32c/dab8/046bf564b49806f9dff1c05f00b4cfc5"
              }}
              style={styles.ImageBackground_47_177}
            />
            <View style={styles.View_47_178}>
              <Text style={styles.Text_47_178}>Pick up</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edd9/fb4d/69361f557a90270b1e2af841e771e9b8"
            }}
            style={styles.ImageBackground_47_179}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5b8/475e/ff1e9212c281c137097dbe04566091a4"
        }}
        style={styles.ImageBackground_47_180}
      />
      <View style={styles.View_47_182}>
        <View style={styles.View_47_183} />
        <View style={styles.View_47_184}>
          <Text style={styles.Text_47_184}>No. Invoice: 1/xx/2021/bil-1</Text>
        </View>
        <View style={styles.View_47_193}>
          <View style={styles.View_47_194} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9b4/d9d6/3443f8bdc20fe1c07b01bbbed18ceda1"
            }}
            style={styles.ImageBackground_47_195}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_47_23: {
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
  ImageBackground_47_24: {
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
  View_47_25: {
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
  View_47_26: {
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
  View_47_27: {
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
  ImageBackground_47_28: {
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
  ImageBackground_47_29: {
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
  ImageBackground_47_32: {
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
  ImageBackground_47_35: {
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
  ImageBackground_47_38: {
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
  ImageBackground_47_39: {
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
  ImageBackground_47_45: {
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
  View_47_52: {
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
  View_47_53: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_47_53: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_54: {
    width: wp("100.00001627604166%"),
    minWidth: wp("100.00001627604166%"),
    height: hp("111.47540983606557%"),
    minHeight: hp("111.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590164%")
  },
  View_47_56: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111.47540983606557%"),
    minHeight: hp("111.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 246, 250, 1)"
  },
  ImageBackground_47_57: {
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
  ImageBackground_47_58: {
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
  View_47_63: {
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
  View_47_65: {
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
  ImageBackground_47_66: {
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
  View_47_67: {
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
  View_47_68: {
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
  View_47_69: {
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
  ImageBackground_47_70: {
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
  ImageBackground_47_71: {
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
  ImageBackground_47_74: {
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
  ImageBackground_47_77: {
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
  ImageBackground_47_80: {
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
  ImageBackground_47_81: {
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
  ImageBackground_47_87: {
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
  View_47_94: {
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
  View_47_95: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_47_95: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_96: {
    width: wp("46.177775065104164%"),
    minWidth: wp("46.177775065104164%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555598958333333%"),
    top: hp("5.601092896174864%")
  },
  View_47_97: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.377734375%"),
    top: hp("0%")
  },
  Text_47_97: {
    color: "rgba(194, 17, 16, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_98: {
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
  View_47_99: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590164%")
  },
  View_47_100: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(76, 178, 86, 1)"
  },
  View_47_101: {
    width: wp("68.33333333333333%"),
    minWidth: wp("68.33333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944401041666666%"),
    top: hp("1.639344262295082%")
  },
  Text_47_101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_102: {
    width: wp("2.933333333333333%"),
    minWidth: wp("2.933333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("1.9125683060109289%")
  },
  View_47_121: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("23.36065573770492%"),
    minHeight: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("15.983606557377051%")
  },
  View_47_122: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("23.36065573770492%"),
    minHeight: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 73, 105, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_47_123: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    minHeight: hp("2.4114225731521355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("18.57923497267759%")
  },
  Text_47_123: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_124: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("2.4114225731521355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666655%"),
    top: hp("14.754098360655735%")
  },
  Text_47_124: {
    color: "rgba(61, 97, 227, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_125: {
    width: wp("59.46666666666667%"),
    minWidth: wp("59.46666666666667%"),
    minHeight: hp("2.4114225731521355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("10.964215388063526%")
  },
  Text_47_125: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_126: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.4114225731521355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666655%"),
    top: hp("5.464480874316937%")
  },
  Text_47_126: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_127: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    minHeight: hp("2.4114225731521355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("1.6393442622950793%")
  },
  Text_47_127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_789: {
    width: wp("25.984814453125%"),
    minWidth: wp("25.984814453125%"),
    height: hp("3.2394091288248696%"),
    minHeight: hp("3.2394091288248696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.93333333333332%"),
    top: hp("18.16939890710382%")
  },
  View_47_790: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.451432291666677%"),
    top: hp("0.9873020192964503%")
  },
  Text_47_790: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_791: {
    width: wp("6.323326619466147%"),
    height: hp("3.2394091288248696%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_128: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("37.704918032786885%"),
    minHeight: hp("37.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("46.72131147540984%")
  },
  View_47_129: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("37.704918032786885%"),
    minHeight: hp("37.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_47_130: {
    width: wp("92.26666666666667%"),
    minWidth: wp("92.26666666666667%"),
    height: hp("37.704918032786885%"),
    minHeight: hp("37.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("0%")
  },
  View_47_131: {
    width: wp("92.26666666666667%"),
    minWidth: wp("92.26666666666667%"),
    height: hp("37.704918032786885%"),
    minHeight: hp("37.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_47_132: {
    width: wp("92.26666666666667%"),
    minWidth: wp("92.26666666666667%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464482%"),
    backgroundColor: "rgba(247, 248, 249, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_47_133: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("7.786885245901637%")
  },
  View_47_134: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_47_135: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_47_136: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_47_137: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999999%"),
    top: hp("1.0928961748633839%")
  },
  View_47_138: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_47_138: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_139: {
    width: wp("2.957264963785807%"),
    minWidth: wp("2.957264963785807%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.068359374999999%"),
    top: hp("1.639344262295083%")
  },
  View_47_140: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.93333333333332%"),
    top: hp("0.5464480874316919%")
  },
  View_47_141: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(153, 153, 153, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_47_142: {
    width: wp("8.081410725911459%"),
    minWidth: wp("8.081410725911459%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000085%"),
    top: hp("0.6830601092896131%")
  },
  Text_47_142: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_143: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885249%")
  },
  View_47_144: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_47_145: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999999%"),
    top: hp("1.229508196721305%")
  },
  View_47_146: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_47_146: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_147: {
    width: wp("2.957264963785807%"),
    minWidth: wp("2.957264963785807%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.068359374999999%"),
    top: hp("1.6393442622950687%")
  },
  View_47_148: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.66666666666667%"),
    top: hp("0.6830601092896131%")
  },
  View_47_149: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(153, 153, 153, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_47_150: {
    width: wp("11.533333333333333%"),
    minWidth: wp("11.533333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999986%"),
    top: hp("0.6830601092896131%")
  },
  Text_47_150: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_151: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.836065573770483%")
  },
  View_47_152: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_47_153: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999999%"),
    top: hp("1.2295081967213122%")
  },
  View_47_154: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_47_154: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_155: {
    width: wp("2.957264963785807%"),
    minWidth: wp("2.957264963785807%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.068359374999999%"),
    top: hp("1.639344262295083%")
  },
  View_47_156: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.93333333333332%"),
    top: hp("0.6830601092896131%")
  },
  View_47_157: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(153, 153, 153, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_47_158: {
    width: wp("13.469017537434896%"),
    minWidth: wp("13.469017537434896%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("0.8196721311475414%")
  },
  Text_47_158: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_159: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.754098360655746%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_47_160: {
    width: wp("79.33160807291667%"),
    minWidth: wp("79.33160807291667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.068359374999999%"),
    top: hp("15.300546448087431%")
  },
  View_47_161: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.331640625%"),
    top: hp("0.5464480874316848%")
  },
  View_47_162: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_47_162: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_163: {
    width: wp("2.957264963785807%"),
    minWidth: wp("2.957264963785807%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%")
  },
  View_47_164: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.86497395833332%"),
    top: hp("0%")
  },
  View_47_165: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(153, 153, 153, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_47_166: {
    width: wp("13.31929728190104%"),
    minWidth: wp("13.31929728190104%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0736979166666742%"),
    top: hp("0.6830601092896131%")
  },
  Text_47_166: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_167: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.67213114754098%")
  },
  View_47_168: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_47_169: {
    width: wp("36.37435709635417%"),
    minWidth: wp("36.37435709635417%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.461588541666664%"),
    top: hp("1.0928961748633839%")
  },
  View_47_170: {
    width: wp("36.37435709635417%"),
    minWidth: wp("36.37435709635417%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_47_170: {
    color: "rgba(52, 52, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_171: {
    width: wp("2.957264963785807%"),
    minWidth: wp("2.957264963785807%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.068359374999999%"),
    top: hp("1.5027322404371546%")
  },
  View_47_172: {
    width: wp("19.488889567057292%"),
    minWidth: wp("19.488889567057292%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.93333333333332%"),
    top: hp("0.546448087431699%")
  },
  View_47_173: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
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
  View_47_174: {
    width: wp("19.22222086588542%"),
    minWidth: wp("19.22222086588542%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666667993%"),
    top: hp("0.6830601092896131%")
  },
  Text_47_174: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_175: {
    width: wp("92.26666666666667%"),
    minWidth: wp("92.26666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_47_176: {
    width: wp("82.88544921875%"),
    minWidth: wp("82.88544921875%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666655%"),
    top: hp("2.0491803278688465%")
  },
  ImageBackground_47_177: {
    flexGrow: 1,
    width: wp("3.548718007405599%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.33671874999999%"),
    top: hp("0.5464480874316919%")
  },
  View_47_178: {
    width: wp("13.603417968750001%"),
    minWidth: wp("13.603417968750001%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_47_178: {
    color: "rgba(52, 52, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_179: {
    width: wp("92.26666666666667%"),
    minWidth: wp("92.26666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464482%")
  },
  ImageBackground_47_180: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33333333333334%"),
    top: hp("10.10928961748634%")
  },
  View_47_182: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("17.62295081967213%"),
    minHeight: hp("17.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("40.43715846994536%")
  },
  View_47_183: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(158, 7, 7, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_47_184: {
    width: wp("46.400000000000006%"),
    minWidth: wp("46.400000000000006%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000002%"),
    top: hp("1.3661202185792334%")
  },
  Text_47_184: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_193: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.6%"),
    top: hp("0.8196721311475414%")
  },
  View_47_194: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_47_195: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("0.9562842181471527%"),
    minHeight: hp("0.9562842181471527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("1.0928961748633839%")
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
