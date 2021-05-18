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
      <View style={styles.View_216_650}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_216_651}
        />
        <View style={styles.View_216_652}>
          <View source={{ uri: "null" }} style={styles.View_216_653} />
          <View style={styles.View_216_654}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_216_655}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_216_656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_216_659}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_216_662}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_216_665}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_216_666}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_216_672}
          />
          <View style={styles.View_216_679}>
            <View style={styles.View_216_680}>
              <Text style={styles.Text_216_680}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_216_681}>
        <View style={styles.View_216_683} />
      </View>
      <View style={styles.View_216_690}>
        <View style={styles.View_216_691} />
        <View style={styles.View_216_692}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
            }}
            style={styles.ImageBackground_216_693}
          />
          <View style={styles.View_216_694}>
            <View source={{ uri: "null" }} style={styles.View_216_695} />
            <View style={styles.View_216_696}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
                }}
                style={styles.ImageBackground_216_697}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
                }}
                style={styles.ImageBackground_216_698}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
                }}
                style={styles.ImageBackground_216_701}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
                }}
                style={styles.ImageBackground_216_704}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
                }}
                style={styles.ImageBackground_216_707}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
              }}
              style={styles.ImageBackground_216_708}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
              }}
              style={styles.ImageBackground_216_714}
            />
            <View style={styles.View_216_721}>
              <View style={styles.View_216_722}>
                <Text style={styles.Text_216_722}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_216_723}>
          <View style={styles.View_216_724}>
            <Text style={styles.Text_216_724}>Leaderboard</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fd4/892a/c78f88110cc72b6ff26130adda301117"
            }}
            style={styles.ImageBackground_216_725}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9141/a7b6/170847833afbb9639316a8502a770a87"
        }}
        style={styles.ImageBackground_216_1013}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_216_650: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.6308623298033282%"),
    minHeight: hp("3.6308623298033282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_216_651: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3.6308623298033282%"),
    minHeight: hp("3.6308623298033282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_216_652: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    height: hp("3.6308623298033282%"),
    minHeight: hp("3.6308623298033282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%"),
    top: hp("0%")
  },
  View_216_653: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    height: hp("3.6308623298033282%"),
    minHeight: hp("3.6308623298033282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_216_654: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.8154311649016641%"),
    minHeight: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("0.9077155824508321%")
  },
  ImageBackground_216_655: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.8154311649016641%"),
    minHeight: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_216_656: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.8154311649016641%"),
    minHeight: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_216_659: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.723146747352496%"),
    minHeight: hp("2.723146747352496%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666667993%"),
    top: hp("0.45385779122541603%")
  },
  ImageBackground_216_662: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.8154311649016641%"),
    minHeight: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.9077155824508321%")
  },
  ImageBackground_216_665: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("0.9077155824508321%"),
    minHeight: hp("0.9077155824508321%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    top: hp("1.361573373676248%")
  },
  ImageBackground_216_666: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.8154311649016641%"),
    minHeight: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666677%"),
    top: hp("0.9077155824508321%")
  },
  ImageBackground_216_672: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("1.9667170953101363%"),
    minHeight: hp("1.9667170953101363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0.7564296520423601%")
  },
  View_216_679: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    height: hp("2.26928895612708%"),
    minHeight: hp("2.26928895612708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333346%"),
    top: hp("0.7564296520423601%")
  },
  View_216_680: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.26928895612708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_216_680: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_681: {
    width: wp("100.00001627604166%"),
    minWidth: wp("100.00001627604166%"),
    height: hp("123.44931921331317%"),
    minHeight: hp("123.44931921331317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000016276041666666666%"),
    top: hp("3.6308623298033282%")
  },
  View_216_683: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96.36913767019666%"),
    minHeight: hp("96.36913767019666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 246, 250, 1)"
  },
  View_216_690: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.195158850226928%"),
    minHeight: hp("11.195158850226928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_216_691: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7.564296520423601%"),
    minHeight: hp("7.564296520423601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6308623298033282%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_216_692: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.6308623298033282%"),
    minHeight: hp("3.6308623298033282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_216_693: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3.6308623298033282%"),
    minHeight: hp("3.6308623298033282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_216_694: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    height: hp("3.6308623298033282%"),
    minHeight: hp("3.6308623298033282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.53333333333333%"),
    top: hp("0%")
  },
  View_216_695: {
    flexGrow: 1,
    width: wp("31.466666666666665%"),
    height: hp("3.6308623298033282%"),
    minHeight: hp("3.6308623298033282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_216_696: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.8154311649016641%"),
    minHeight: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("0.9077155824508321%")
  },
  ImageBackground_216_697: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.8154311649016641%"),
    minHeight: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_216_698: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.8154311649016641%"),
    minHeight: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_216_701: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.723146747352496%"),
    minHeight: hp("2.723146747352496%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2666666666666515%"),
    top: hp("0.45385779122541603%")
  },
  ImageBackground_216_704: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.8154311649016641%"),
    minHeight: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%"),
    top: hp("0.9077155824508321%")
  },
  ImageBackground_216_707: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("0.9077155824508321%"),
    minHeight: hp("0.9077155824508321%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333428%"),
    top: hp("1.361573373676248%")
  },
  ImageBackground_216_708: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.8154311649016641%"),
    minHeight: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666663%"),
    top: hp("0.9077155824508321%")
  },
  ImageBackground_216_714: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("1.9667170953101363%"),
    minHeight: hp("1.9667170953101363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0.7564296520423601%")
  },
  View_216_721: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    height: hp("2.26928895612708%"),
    minHeight: hp("2.26928895612708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53333333333333%"),
    top: hp("0.7564296520423601%")
  },
  View_216_722: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.26928895612708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_216_722: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_723: {
    width: wp("46.177775065104164%"),
    minWidth: wp("46.177775065104164%"),
    height: hp("2.4205748865355523%"),
    minHeight: hp("2.4205748865355523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.5555664062500005%"),
    top: hp("6.202723146747353%")
  },
  View_216_724: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.4205748865355523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.377766927083333%"),
    top: hp("0%")
  },
  Text_216_724: {
    color: "rgba(194, 17, 16, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_216_725: {
    width: wp("1.944444402058919%"),
    minWidth: wp("1.944444402058919%"),
    height: hp("1.8154311649016641%"),
    minHeight: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.3025718608169434%")
  },
  ImageBackground_216_1013: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("89.25869894099849%"),
    minHeight: hp("89.25869894099849%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.892586989409985%")
  },
  View_2: { height: 661 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
