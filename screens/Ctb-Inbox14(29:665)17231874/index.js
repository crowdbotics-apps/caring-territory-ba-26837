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
      <View style={styles.View_29_666}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_29_667}
        />
        <View style={styles.View_29_668}>
          <View source={{ uri: "null" }} style={styles.View_29_669} />
          <View style={styles.View_29_670}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_29_671}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_29_672}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_29_675}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_29_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_29_681}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_29_682}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_29_688}
          />
          <View style={styles.View_29_695}>
            <View style={styles.View_29_696}>
              <Text style={styles.Text_29_696}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_29_697}>
        <View style={styles.View_29_698} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f4e/9be8/38d244db5d2f5137e75bf8fbfb48c459"
          }}
          style={styles.ImageBackground_29_699}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63d6/9941/106f53ab3243538fb94e4c94e93f7cf5"
          }}
          style={styles.ImageBackground_29_700}
        />
      </View>
      <View style={styles.View_29_701}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
          }}
          style={styles.ImageBackground_29_702}
        />
        <View style={styles.View_29_703}>
          <Text style={styles.Text_29_703}>Can’t wait to see you!</Text>
        </View>
        <View style={styles.View_29_704}>
          <Text style={styles.Text_29_704}>5:09 PM</Text>
        </View>
        <View style={styles.View_29_705}>
          <Text style={styles.Text_29_705}>Sandra Adams</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac0/d7ee/e1f428e1d6a7e8ff14e726136be94bee"
          }}
          style={styles.ImageBackground_29_706}
        />
        <View style={styles.View_29_707}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b820/b35f/feabf0879132577ff5b8d74a7ca223d0"
            }}
            style={styles.ImageBackground_29_708}
          />
          <View source={{ uri: "null" }} style={styles.View_29_712} />
        </View>
      </View>
      <View style={styles.View_29_713}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
          }}
          style={styles.ImageBackground_29_714}
        />
        <View style={styles.View_29_715}>
          <Text style={styles.Text_29_715}>Can’t wait to see you!</Text>
        </View>
        <View style={styles.View_29_716}>
          <Text style={styles.Text_29_716}>5:09 PM</Text>
        </View>
        <View style={styles.View_29_717}>
          <Text style={styles.Text_29_717}>Sandra Adams</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac0/d7ee/e1f428e1d6a7e8ff14e726136be94bee"
          }}
          style={styles.ImageBackground_29_718}
        />
        <View style={styles.View_29_719}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b820/b35f/feabf0879132577ff5b8d74a7ca223d0"
            }}
            style={styles.ImageBackground_29_720}
          />
          <View source={{ uri: "null" }} style={styles.View_29_724} />
        </View>
      </View>
      <View style={styles.View_29_725}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
          }}
          style={styles.ImageBackground_29_726}
        />
        <View style={styles.View_29_727}>
          <Text style={styles.Text_29_727}>Can’t wait to see you!</Text>
        </View>
        <View style={styles.View_29_728}>
          <Text style={styles.Text_29_728}>5:09 PM</Text>
        </View>
        <View style={styles.View_29_729}>
          <Text style={styles.Text_29_729}>Sandra Adams</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac0/d7ee/e1f428e1d6a7e8ff14e726136be94bee"
          }}
          style={styles.ImageBackground_29_730}
        />
        <View style={styles.View_29_731}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b820/b35f/feabf0879132577ff5b8d74a7ca223d0"
            }}
            style={styles.ImageBackground_29_732}
          />
          <View source={{ uri: "null" }} style={styles.View_29_736} />
        </View>
      </View>
      <View style={styles.View_29_737}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
          }}
          style={styles.ImageBackground_29_744}
        />
        <View style={styles.View_29_745}>
          <Text style={styles.Text_29_745}>Can’t wait to see you!</Text>
        </View>
        <View style={styles.View_29_746}>
          <Text style={styles.Text_29_746}>5:09 PM</Text>
        </View>
        <View style={styles.View_29_747}>
          <Text style={styles.Text_29_747}>Sandra Adams</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef13/00d7/c609e5d4a51d57f75e1f40f5feaed437"
          }}
          style={styles.ImageBackground_29_748}
        />
        <View style={styles.View_29_749}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b820/b35f/feabf0879132577ff5b8d74a7ca223d0"
            }}
            style={styles.ImageBackground_29_750}
          />
          <View source={{ uri: "null" }} style={styles.View_29_754} />
        </View>
      </View>
      <View style={styles.View_29_755}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
          }}
          style={styles.ImageBackground_29_756}
        />
        <View style={styles.View_29_757}>
          <Text style={styles.Text_29_757}>Can’t wait to see you!</Text>
        </View>
        <View style={styles.View_29_758}>
          <Text style={styles.Text_29_758}>5:09 PM</Text>
        </View>
        <View style={styles.View_29_759}>
          <Text style={styles.Text_29_759}>Sandra Adams</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef13/00d7/c609e5d4a51d57f75e1f40f5feaed437"
          }}
          style={styles.ImageBackground_29_760}
        />
        <View style={styles.View_29_761}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b820/b35f/feabf0879132577ff5b8d74a7ca223d0"
            }}
            style={styles.ImageBackground_29_762}
          />
          <View source={{ uri: "null" }} style={styles.View_29_766} />
        </View>
      </View>
      <View style={styles.View_29_783}>
        <View style={styles.View_29_785}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
            }}
            style={styles.ImageBackground_29_786}
          />
          <View style={styles.View_29_787}>
            <View source={{ uri: "null" }} style={styles.View_29_788} />
            <View style={styles.View_29_789}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
                }}
                style={styles.ImageBackground_29_790}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
                }}
                style={styles.ImageBackground_29_791}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
                }}
                style={styles.ImageBackground_29_794}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
                }}
                style={styles.ImageBackground_29_797}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
                }}
                style={styles.ImageBackground_29_800}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
              }}
              style={styles.ImageBackground_29_801}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
              }}
              style={styles.ImageBackground_29_807}
            />
            <View style={styles.View_29_814}>
              <View style={styles.View_29_815}>
                <Text style={styles.Text_29_815}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b35/e9f5/27521ed94985a2f0be968d0f03f348f6"
          }}
          style={styles.ImageBackground_29_816}
        />
        <View style={styles.View_29_817}>
          <View style={styles.View_29_818}>
            <Text style={styles.Text_29_818}>Inbox</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c93/fc33/7fc531d11cc81295adb55d30823af894"
            }}
            style={styles.ImageBackground_29_819}
          />
        </View>
      </View>
      <View style={styles.View_29_821}>
        <View style={styles.View_29_822} />
        <View style={styles.View_29_823}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2b9/1620/8912a5446171a52d6b1382440d45a48a"
            }}
            style={styles.ImageBackground_29_824}
          />
          <View style={styles.View_29_826}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a943/fc90/15a0f1ae72df4133f12686374a490df4"
              }}
              style={styles.ImageBackground_29_827}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b580/5d51/7aff626a6634a6ae5a3bcc494e9c2105"
              }}
              style={styles.ImageBackground_29_828}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f74a/31c9/c62f940257c89b9b595980f1c170775a"
            }}
            style={styles.ImageBackground_29_829}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97bf/cc1c/0748205e22266d0d07972451054e01c1"
            }}
            style={styles.ImageBackground_29_831}
          />
          <View style={styles.View_29_833}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1103/e1ec/71812e15609825ae35c52f7c0ef956b3"
              }}
              style={styles.ImageBackground_29_834}
            />
            <View style={styles.View_29_835}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/856e/e583/12321cb6c7ce8d9493474eed2a3bd518"
                }}
                style={styles.ImageBackground_29_836}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/5224/c100cf6f9e057cd72950e27f9fc411ae"
                }}
                style={styles.ImageBackground_29_837}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_29_845}>
        <View style={styles.View_29_846} />
        <View style={styles.View_29_847}>
          <Text style={styles.Text_29_847}>
            Success, your data has been deleted
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faf2/0f8b/880ceee6b82dc1d68c8e3e804e02606b"
          }}
          style={styles.ImageBackground_29_848}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_29_666: {
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
  ImageBackground_29_667: {
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
  View_29_668: {
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
  View_29_669: {
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
  View_29_670: {
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
  ImageBackground_29_671: {
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
  ImageBackground_29_672: {
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
  ImageBackground_29_675: {
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
  ImageBackground_29_678: {
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
  ImageBackground_29_681: {
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
  ImageBackground_29_682: {
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
  ImageBackground_29_688: {
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
  View_29_695: {
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
  View_29_696: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_29_696: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_697: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96.40179910044976%"),
    minHeight: hp("96.40179910044976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.598200899550225%")
  },
  View_29_698: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96.40179910044976%"),
    minHeight: hp("96.40179910044976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_29_699: {
    width: wp("41.73666178385417%"),
    minWidth: wp("41.73666178385417%"),
    height: hp("22.038980509745127%"),
    minHeight: hp("22.038980509745127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74.36281859070465%")
  },
  ImageBackground_29_700: {
    width: wp("24.70128987630208%"),
    minWidth: wp("24.70128987630208%"),
    height: hp("13.043478260869565%"),
    minHeight: hp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83.35832083958022%")
  },
  View_29_701: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("17.391304347826086%")
  },
  ImageBackground_29_702: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_703: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("4.6476761619190405%")
  },
  Text_29_703: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_704: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.4%"),
    top: hp("2.248875562218892%")
  },
  Text_29_704: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_705: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("1.1994002998500761%")
  },
  Text_29_705: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_706: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.7991004497751142%")
  },
  View_29_707: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.602150569612655%"),
    minHeight: hp("3.602150569612655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.39999999999999%"),
    top: hp("2.9945476480509754%")
  },
  ImageBackground_29_708: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("2.4014337130751033%"),
    minHeight: hp("2.4014337130751033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.7504487502342592%")
  },
  View_29_712: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.602150569612655%"),
    minHeight: hp("3.602150569612655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_713: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("28.93553223388306%")
  },
  ImageBackground_29_714: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_715: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("4.647676161919044%")
  },
  Text_29_715: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_716: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.4%"),
    top: hp("2.2488755622188883%")
  },
  Text_29_716: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_717: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("1.1994002998500726%")
  },
  Text_29_717: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_718: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.7991004497751106%")
  },
  View_29_719: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.602150569612655%"),
    minHeight: hp("3.602150569612655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.39999999999999%"),
    top: hp("2.994547648050972%")
  },
  ImageBackground_29_720: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("2.4014337130751033%"),
    minHeight: hp("2.4014337130751033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.7504487502342592%")
  },
  View_29_724: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.602150569612655%"),
    minHeight: hp("3.602150569612655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_725: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("40.479760119940025%")
  },
  ImageBackground_29_726: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_727: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("4.647676161919044%")
  },
  Text_29_727: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_728: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.4%"),
    top: hp("2.248875562218899%")
  },
  Text_29_728: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_729: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("1.1994002998500832%")
  },
  Text_29_729: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_730: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.7991004497751177%")
  },
  View_29_731: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.602150569612655%"),
    minHeight: hp("3.602150569612655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.39999999999999%"),
    top: hp("2.9945476480509825%")
  },
  ImageBackground_29_732: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("2.4014337130751033%"),
    minHeight: hp("2.4014337130751033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.7504487502342556%")
  },
  View_29_736: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.602150569612655%"),
    minHeight: hp("3.602150569612655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_737: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("52.023988005997005%")
  },
  ImageBackground_29_744: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_745: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("4.647676161919044%")
  },
  Text_29_745: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_746: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.4%"),
    top: hp("2.2488755622188847%")
  },
  Text_29_746: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_747: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("1.199400299850069%")
  },
  Text_29_747: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_748: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.7991004497751106%")
  },
  View_29_749: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.602150569612655%"),
    minHeight: hp("3.602150569612655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%"),
    top: hp("2.9945476480509683%")
  },
  ImageBackground_29_750: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("2.4014337130751033%"),
    minHeight: hp("2.4014337130751033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.7504487502342556%")
  },
  View_29_754: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.602150569612655%"),
    minHeight: hp("3.602150569612655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_755: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("63.56821589205397%")
  },
  ImageBackground_29_756: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_757: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("4.647676161919051%")
  },
  Text_29_757: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_758: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.4%"),
    top: hp("2.248875562218899%")
  },
  Text_29_758: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_759: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("1.199400299850069%")
  },
  Text_29_759: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_760: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.7991004497751106%")
  },
  View_29_761: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.602150569612655%"),
    minHeight: hp("3.602150569612655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.39999999999999%"),
    top: hp("2.9945476480509825%")
  },
  ImageBackground_29_762: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("2.4014337130751033%"),
    minHeight: hp("2.4014337130751033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.7504487502342556%")
  },
  View_29_766: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("3.602150569612655%"),
    minHeight: hp("3.602150569612655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_783: {
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
  View_29_785: {
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
  ImageBackground_29_786: {
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
  View_29_787: {
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
  View_29_788: {
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
  View_29_789: {
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
  ImageBackground_29_790: {
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
  ImageBackground_29_791: {
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
  ImageBackground_29_794: {
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
  ImageBackground_29_797: {
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
  ImageBackground_29_800: {
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
  ImageBackground_29_801: {
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
  ImageBackground_29_807: {
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
  View_29_814: {
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
  View_29_815: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_29_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_816: {
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
  View_29_817: {
    width: wp("46.177775065104164%"),
    minWidth: wp("46.177775065104164%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555533854166667%"),
    top: hp("6.146926536731634%")
  },
  View_29_818: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.377799479166667%"),
    top: hp("0%")
  },
  Text_29_818: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_819: {
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
  View_29_821: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("7.496251874062969%"),
    minHeight: hp("7.496251874062969%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("91.30434782608695%")
  },
  View_29_822: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("7.496251874062969%"),
    minHeight: hp("7.496251874062969%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_29_823: {
    width: wp("82.66666666666667%"),
    minWidth: wp("82.66666666666667%"),
    height: hp("3.2983508245877062%"),
    minHeight: hp("3.2983508245877062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("1.949025487256364%")
  },
  ImageBackground_29_824: {
    width: wp("6.9333338419596355%"),
    minWidth: wp("6.9333338419596355%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46666666666667%"),
    top: hp("0.4497751124437883%")
  },
  View_29_826: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("2.998500749625187%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.400000000000006%"),
    top: hp("0%")
  },
  ImageBackground_29_827: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5997001499250558%")
  },
  ImageBackground_29_828: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("0%")
  },
  ImageBackground_29_829: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53333333333333%"),
    top: hp("0.4497751124437883%")
  },
  ImageBackground_29_831: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.60000000000001%"),
    top: hp("0.4497751124437883%")
  },
  View_29_833: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.998500749625187%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.299850074962535%")
  },
  ImageBackground_29_834: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.998500749625187%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_835: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.998500749625187%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_29_836: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.998500749625187%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_29_837: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.998500749625187%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_29_845: {
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
  View_29_846: {
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
  View_29_847: {
    width: wp("68.33333333333333%"),
    minWidth: wp("68.33333333333333%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944466145833333%"),
    top: hp("1.7991004497751124%")
  },
  Text_29_847: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_848: {
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
