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
      <View style={styles.View_213_200}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_213_201}
        />
        <View style={styles.View_213_202}>
          <View source={{ uri: "null" }} style={styles.View_213_203} />
          <View style={styles.View_213_204}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_213_205}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_213_206}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_213_209}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_213_212}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_213_215}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_213_216}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_213_222}
          />
          <View style={styles.View_213_229}>
            <View style={styles.View_213_230}>
              <Text style={styles.Text_213_230}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_213_231}>
        <View style={styles.View_213_233} />
      </View>
      <View style={styles.View_213_240}>
        <View style={styles.View_213_242}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
            }}
            style={styles.ImageBackground_213_243}
          />
          <View style={styles.View_213_244}>
            <View source={{ uri: "null" }} style={styles.View_213_245} />
            <View style={styles.View_213_246}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
                }}
                style={styles.ImageBackground_213_247}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
                }}
                style={styles.ImageBackground_213_248}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
                }}
                style={styles.ImageBackground_213_251}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
                }}
                style={styles.ImageBackground_213_254}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
                }}
                style={styles.ImageBackground_213_257}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
              }}
              style={styles.ImageBackground_213_258}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
              }}
              style={styles.ImageBackground_213_264}
            />
            <View style={styles.View_213_271}>
              <View style={styles.View_213_272}>
                <Text style={styles.Text_213_272}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_213_273}>
          <View style={styles.View_213_274}>
            <Text style={styles.Text_213_274}>Gamification</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fd4/892a/c78f88110cc72b6ff26130adda301117"
            }}
            style={styles.ImageBackground_213_275}
          />
        </View>
      </View>
      <View style={styles.View_216_220}>
        <View style={styles.View_216_0}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caf9/3e47/f43103b56b8db890a4c5223f9c6397d4"
            }}
            style={styles.ImageBackground_216_1}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a0d/381d/2ccc7dab782a0f9e82fb4921377bc77c"
            }}
            style={styles.ImageBackground_216_3}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a39d/a166/bd2869b53b74f591656fdebf3d4e7626"
            }}
            style={styles.ImageBackground_216_5}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f036/2ba3/10b687c39fef91a8e38f41b221c272fd"
            }}
            style={styles.ImageBackground_216_7}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/696f/8533/f1851bee3bfe6bdb705433a46107853e"
            }}
            style={styles.ImageBackground_216_9}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560c/5f1c/6a522ac5a06de7facc51910f09974338"
            }}
            style={styles.ImageBackground_216_11}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62a0/75a5/df9fb4a427a305c56acfcc4ff9fc94a3"
            }}
            style={styles.ImageBackground_216_13}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a502/bc36/19ac4ff108e4cd355246eb31fe68f86e"
            }}
            style={styles.ImageBackground_216_15}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/212d/7226/c4ae55a4a30a17a483af4927cec221df"
            }}
            style={styles.ImageBackground_216_17}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc42/c60d/e14fdc4908313c6f0e0bad8ed97bf3b0"
            }}
            style={styles.ImageBackground_216_19}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a104/90cc/c971e4ed8cf013a627348de83ba2278f"
            }}
            style={styles.ImageBackground_216_20}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df09/a812/0b9830b0532e06334461250ef4277f27"
            }}
            style={styles.ImageBackground_216_21}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/032d/2636/c2abbd6cf06eb51e805710fb065e4580"
            }}
            style={styles.ImageBackground_216_22}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eda/8c25/e4f573d34e8df191e2563a0159895bd4"
            }}
            style={styles.ImageBackground_216_23}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c0e/a4d7/f0e03d2a5369ed5afdd22600b1c8cb24"
            }}
            style={styles.ImageBackground_216_24}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca77/c16e/c9e5574bc9cab654f6ad29e6afc54d45"
            }}
            style={styles.ImageBackground_216_25}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d048/e6d5/73f69c1b919c947333cf18a9d2b6d7c8"
            }}
            style={styles.ImageBackground_216_26}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8816/b536/142042699411b255b5ab4b2c673f0a62"
            }}
            style={styles.ImageBackground_216_27}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9282/3a7b/0a935c57405d9af60dae82711a63093a"
            }}
            style={styles.ImageBackground_216_28}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ab3/004b/fe16f67d68978da27fff276a490e39a0"
            }}
            style={styles.ImageBackground_216_29}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843c/90e3/fecfb9b208205dcd86349fe76baf9b8f"
            }}
            style={styles.ImageBackground_216_30}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3a7/a919/4d5a027f3ebf10c55811bd3c46886268"
            }}
            style={styles.ImageBackground_216_31}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4db6/9d9f/bb2b2f6a5792f6e4f53b0caa5b1ab57e"
            }}
            style={styles.ImageBackground_216_32}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4986/548e/75f7f6d4f3013c8cdc4fd00841e70fa1"
            }}
            style={styles.ImageBackground_216_33}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22fc/e591/10f03e0b2ace4bebc07c83a045c8c802"
            }}
            style={styles.ImageBackground_216_34}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc85/ec3a/d01b2ab8f032f257df1bff2db5092eef"
            }}
            style={styles.ImageBackground_216_35}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f52/6d4e/2707583066e52537f09ec4a4aa50db04"
            }}
            style={styles.ImageBackground_216_36}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14d0/829e/826fc132e5d641a9c527ce71ac35efac"
            }}
            style={styles.ImageBackground_216_37}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11d9/dc7b/cf20bdae011f08df18881702b5656fc4"
            }}
            style={styles.ImageBackground_216_39}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80a9/a6e9/b6107c9ed3f2546c694fdbb410ecc024"
            }}
            style={styles.ImageBackground_216_41}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b44c/cdc4/9bad3cfb5b23ee0feac9f8fe03166bd8"
            }}
            style={styles.ImageBackground_216_43}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2420/07a5/5fdd8ed27dff924b4cedfbd1b5495c94"
            }}
            style={styles.ImageBackground_216_45}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c40/9f03/72e13cdfb220d8e7e6d75325e4751cbf"
            }}
            style={styles.ImageBackground_216_47}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17a2/feb6/cce2a0343ad1e73832fc22d5703b163b"
            }}
            style={styles.ImageBackground_216_49}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1e6/e1bc/1e9f378f2f3edb3c3a3a2af8af5f4667"
            }}
            style={styles.ImageBackground_216_51}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/352a/c054/e2d48f7a942bb834da05f64220437881"
            }}
            style={styles.ImageBackground_216_53}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e66f/56c0/270d1472e2271fc95258e23fcb4b9035"
            }}
            style={styles.ImageBackground_216_55}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fa8/cfc7/6706ddcb0b45d7c19f0f4acbf8ea39a6"
            }}
            style={styles.ImageBackground_216_57}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2216/19d4/16115c7958ea46d3025dd46acb22abc0"
            }}
            style={styles.ImageBackground_216_59}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54b4/ab12/a140456df8e1ccaa14f8dadd9571d426"
            }}
            style={styles.ImageBackground_216_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbe8/7261/128207fa01045cc8fc74d7d58035dbf5"
            }}
            style={styles.ImageBackground_216_63}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf2/6ec2/ac9726359749333ac357a0f90bb1be18"
            }}
            style={styles.ImageBackground_216_65}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a636/2ac4/31584468041e72cf491169d1ac6a3865"
            }}
            style={styles.ImageBackground_216_67}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0fc/873e/e9904a62fddf3372e425d5fc554534bc"
            }}
            style={styles.ImageBackground_216_69}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d3b/1cbf/44776997258e7eaf9eed920f78f6181e"
            }}
            style={styles.ImageBackground_216_71}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/effe/e87b/a3ffff37ca9d8891114834493129d2db"
            }}
            style={styles.ImageBackground_216_73}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b432/a9b5/9bf410fd518ddd7fbd8be52904a342d7"
            }}
            style={styles.ImageBackground_216_75}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f00/5225/adec6adf7e75bc08c658be4c61a09e01"
            }}
            style={styles.ImageBackground_216_77}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8b7/0179/60e92f8f82e8b54a967a3579020722bf"
            }}
            style={styles.ImageBackground_216_79}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7352/6b0d/dda6c1ebb0f796612d81535a23ba66af"
            }}
            style={styles.ImageBackground_216_81}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f86d/365a/c9e7f212f5b85210b91347590ae0453b"
            }}
            style={styles.ImageBackground_216_83}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7797/bbd0/95a823d4331dcbd9bcf953c7bb78e868"
            }}
            style={styles.ImageBackground_216_85}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c0a/6a39/bb616038017c9eacfe3599a1e12eb026"
            }}
            style={styles.ImageBackground_216_87}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea3c/c303/ba4646cc5dfbfc1b2a94bf7b06b112c7"
            }}
            style={styles.ImageBackground_216_89}
          />
        </View>
        <View style={styles.View_216_91}>
          <View style={styles.View_216_92}>
            <View style={styles.View_216_93}>
              <View style={styles.View_216_94}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a18/fe59/485b46735692770387f976c27c20e61b"
                  }}
                  style={styles.ImageBackground_216_95}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ec1/2194/06bf5b9ad4e98dd2cbfb7052ee2aafac"
                  }}
                  style={styles.ImageBackground_216_96}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a86/c308/6066b5e676d1f0c1b841b82803871880"
                  }}
                  style={styles.ImageBackground_216_97}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd6/5899/11cf6bd9f8b74999548d208355205161"
                  }}
                  style={styles.ImageBackground_216_98}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9fa/c670/c98ad079965c0b419f9ea7b6780d3edf"
                  }}
                  style={styles.ImageBackground_216_99}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c282/f88d/1f72b791ee8291a34589672e58e2af1a"
                  }}
                  style={styles.ImageBackground_216_100}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3edb/d6ea/eed023b8c135495550658c005b2ca12e"
                  }}
                  style={styles.ImageBackground_216_101}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f256/7929/67fdb598afda79c22b238dbfb1640e93"
                  }}
                  style={styles.ImageBackground_216_102}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e438/ac8c/1f31df11098f09d691a21acda21ec021"
                  }}
                  style={styles.ImageBackground_216_103}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ba0/23d6/e9cdabd239b57f3be78262cf2ad5912c"
                  }}
                  style={styles.ImageBackground_216_104}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5de8/9bb5/8627d73d438222dbef32cc4ad5a29e7b"
                  }}
                  style={styles.ImageBackground_216_112}
                />
                <View style={styles.View_216_113}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9273/2e5e/92b09c0945d1728ab9a71ac5a92639d2"
                    }}
                    style={styles.ImageBackground_216_114}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33c6/8ba9/802c13e94f6669a2d9e3aa350c3d9f2e"
                    }}
                    style={styles.ImageBackground_216_117}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5816/b5cc/34761035bda2faf1c9d338fdd595f9a0"
                    }}
                    style={styles.ImageBackground_216_120}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31b2/7651/239f4d1df74b5139089b0c7ce710872f"
                    }}
                    style={styles.ImageBackground_216_123}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48d7/b4ef/d50fa096c0b6100e9c427467f083eed4"
                    }}
                    style={styles.ImageBackground_216_126}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fa8/77fb/a6df54f66f0bc62cc65c5c279ff2b06e"
                    }}
                    style={styles.ImageBackground_216_129}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e37/1321/a64f3a0a5fedb5e33b01f96adfaf6f73"
                    }}
                    style={styles.ImageBackground_216_132}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/468c/bceb/d555e9bff687f3f97a14d4c190f0b9a6"
                    }}
                    style={styles.ImageBackground_216_135}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91c7/21b6/daa22724180c0d4a12b98d0423fa92a5"
                    }}
                    style={styles.ImageBackground_216_138}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c91/461b/c04b780fa895e1c5ccdac718a72ba1e2"
                    }}
                    style={styles.ImageBackground_216_141}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ebd/edee/8c9989068fcb2dea2348592c32e494a0"
                    }}
                    style={styles.ImageBackground_216_144}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eda/bd3f/36807731dc7f0008b73768a46aa78197"
                    }}
                    style={styles.ImageBackground_216_147}
                  />
                </View>
                <View style={styles.View_216_150}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7be9/f9ce/272ad2a4874ed8662e5d10daaf60b915"
                    }}
                    style={styles.ImageBackground_216_151}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a9/7cdb/a8be2380cd734209e9fb168b11973cc6"
                    }}
                    style={styles.ImageBackground_216_154}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3683/b070/66ff263a3749dc9602a31b20587b2c0f"
                    }}
                    style={styles.ImageBackground_216_157}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8747/59fa/89c8d9b4f49acc4f789320597fe475ef"
                    }}
                    style={styles.ImageBackground_216_160}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d73/ee7f/bd3d72c5c25ebf98b5a420c8fd2ec42d"
                    }}
                    style={styles.ImageBackground_216_163}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7247/2cba/b32e0a79b50334a6d2df855414eda910"
                    }}
                    style={styles.ImageBackground_216_166}
                  />
                </View>
                <View source={{ uri: "null" }} style={styles.View_216_169} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d75d/5b19/50be92658492f7c20f6e0564cbddb027"
                  }}
                  style={styles.ImageBackground_216_170}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fb6/867a/0edd4d654b43224f22a2bf9b0499b3c9"
                }}
                style={styles.ImageBackground_216_191}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de9b/0305/2905bff0f3e02e66b4bdb0f8dbc3d0d8"
          }}
          style={styles.ImageBackground_216_194}
        />
        <View style={styles.View_216_195} />
        <View style={styles.View_216_196} />
        <View style={styles.View_216_197}>
          <Text style={styles.Text_216_197}>PUTAR</Text>
        </View>
        <View style={styles.View_216_198}>
          <View style={styles.View_216_199}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c2c/1b91/2adf35daaeba8bed2b71f0e7d2dcb49d"
              }}
              style={styles.ImageBackground_216_200}
            />
          </View>
          <View style={styles.View_216_215}>
            <Text style={styles.Text_216_215}>Poin kamu</Text>
          </View>
          <View style={styles.View_216_216}>
            <Text style={styles.Text_216_216}>2840 Pts</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aff/b7be/73b617495db756e47bf08104a0beb388"
          }}
          style={styles.ImageBackground_216_217}
        />
        <View style={styles.View_216_218}>
          <Text style={styles.Text_216_218}>2</Text>
        </View>
        <View style={styles.View_216_219}>
          <Text style={styles.Text_216_219}>
            Kamu punya 2 token untuk dimainkan!{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_213_200: {
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
  ImageBackground_213_201: {
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
  View_213_202: {
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
  View_213_203: {
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
  View_213_204: {
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
  ImageBackground_213_205: {
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
  ImageBackground_213_206: {
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
  ImageBackground_213_209: {
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
  ImageBackground_213_212: {
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
  ImageBackground_213_215: {
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
  ImageBackground_213_216: {
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
  ImageBackground_213_222: {
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
  View_213_229: {
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
  View_213_230: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.26928895612708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_213_230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_213_231: {
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
  View_213_233: {
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
  View_213_240: {
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
  View_213_242: {
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
  ImageBackground_213_243: {
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
  View_213_244: {
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
  View_213_245: {
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
  View_213_246: {
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
  ImageBackground_213_247: {
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
  ImageBackground_213_248: {
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
  ImageBackground_213_251: {
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
  ImageBackground_213_254: {
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
  ImageBackground_213_257: {
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
  ImageBackground_213_258: {
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
  ImageBackground_213_264: {
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
  View_213_271: {
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
  View_213_272: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.26928895612708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_213_272: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_213_273: {
    width: wp("46.177775065104164%"),
    minWidth: wp("46.177775065104164%"),
    height: hp("2.4205748865355523%"),
    minHeight: hp("2.4205748865355523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555558268229166%"),
    top: hp("6.202723146747353%")
  },
  View_213_274: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.4205748865355523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.377775065104167%"),
    top: hp("0%")
  },
  Text_213_274: {
    color: "rgba(194, 17, 16, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_213_275: {
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
  View_216_220: {
    width: wp("138.39999999999998%"),
    minWidth: wp("138.39999999999998%"),
    height: hp("85.62783661119516%"),
    minHeight: hp("85.62783661119516%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.2%"),
    top: hp("11.195158850226928%")
  },
  View_216_0: {
    width: wp("138.39999999999998%"),
    minWidth: wp("138.39999999999998%"),
    height: hp("78.66868381240545%"),
    minHeight: hp("78.66868381240545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.6641452344931942%")
  },
  ImageBackground_216_1: {
    width: wp("3.0240938822428385%"),
    minWidth: wp("3.0240938822428385%"),
    height: hp("3.066974472530671%"),
    minHeight: hp("3.066974472530671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.110888671875%"),
    top: hp("18.15512421993192%")
  },
  ImageBackground_216_3: {
    width: wp("7.083365376790364%"),
    minWidth: wp("7.083365376790364%"),
    height: hp("3.1674799147243764%"),
    minHeight: hp("3.1674799147243764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.965588378906247%"),
    top: hp("59.462240568267774%")
  },
  ImageBackground_216_5: {
    width: wp("6.4386352539062495%"),
    minWidth: wp("6.4386352539062495%"),
    height: hp("3.792422261432873%"),
    minHeight: hp("3.792422261432873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("118.82466634114583%"),
    top: hp("45.79302489126324%")
  },
  ImageBackground_216_7: {
    width: wp("2.2436622619628905%"),
    minWidth: wp("2.2436622619628905%"),
    height: hp("2.3036218086277302%"),
    minHeight: hp("2.3036218086277302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.411625162760416%"),
    top: hp("0.9502647503782118%")
  },
  ImageBackground_216_9: {
    width: wp("4.345325724283854%"),
    minWidth: wp("4.345325724283854%"),
    height: hp("2.806561941819184%"),
    minHeight: hp("2.806561941819184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("134.05465494791667%"),
    top: hp("39.43613488086233%")
  },
  ImageBackground_216_11: {
    width: wp("6.30121561686198%"),
    minWidth: wp("6.30121561686198%"),
    height: hp("4.31157110678807%"),
    minHeight: hp("4.31157110678807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.19242350260417%"),
    top: hp("45.96499444496975%")
  },
  ImageBackground_216_13: {
    width: wp("3.872206878662109%"),
    minWidth: wp("3.872206878662109%"),
    height: hp("1.8428977066016956%"),
    minHeight: hp("1.8428977066016956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.8742228867246595%")
  },
  ImageBackground_216_15: {
    width: wp("4.904061381022135%"),
    minWidth: wp("4.904061381022135%"),
    height: hp("2.5239459685586763%"),
    minHeight: hp("2.5239459685586763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("131.43729654947916%"),
    top: hp("11.873655564485627%")
  },
  ImageBackground_216_17: {
    width: wp("7.043850708007812%"),
    minWidth: wp("7.043850708007812%"),
    height: hp("4.300172895238187%"),
    minHeight: hp("4.300172895238187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.867285156250006%"),
    top: hp("45.08372435230711%")
  },
  ImageBackground_216_19: {
    width: wp("4.707566324869792%"),
    minWidth: wp("4.707566324869792%"),
    height: hp("2.6491649933553862%"),
    minHeight: hp("2.6491649933553862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("114.62646484375%"),
    top: hp("2.3036385448184564%")
  },
  ImageBackground_216_20: {
    width: wp("3.7786318461100263%"),
    minWidth: wp("3.7786318461100263%"),
    height: hp("2.130850360541409%"),
    minHeight: hp("2.130850360541409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.40102742513021%"),
    top: hp("28.248141428706504%")
  },
  ImageBackground_216_21: {
    width: wp("3.925996653238932%"),
    minWidth: wp("3.925996653238932%"),
    height: hp("2.246029835064725%"),
    minHeight: hp("2.246029835064725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125.5871337890625%"),
    top: hp("22.604319331505295%")
  },
  ImageBackground_216_22: {
    width: wp("5.89918721516927%"),
    minWidth: wp("5.89918721516927%"),
    height: hp("3.340251362810698%"),
    minHeight: hp("3.340251362810698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.99787190755208%"),
    top: hp("1.3821831268910731%")
  },
  ImageBackground_216_23: {
    width: wp("4.330983988444011%"),
    minWidth: wp("4.330983988444011%"),
    height: hp("2.447598063458834%"),
    minHeight: hp("2.447598063458834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.06333821614584%"),
    top: hp("36.5987849848714%")
  },
  ImageBackground_216_24: {
    width: wp("5.135495503743489%"),
    minWidth: wp("5.135495503743489%"),
    height: hp("2.908319712767262%"),
    minHeight: hp("2.908319712767262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.452294921874998%"),
    top: hp("38.35526782337367%")
  },
  ImageBackground_216_25: {
    width: wp("3.5174166361490884%"),
    minWidth: wp("3.5174166361490884%"),
    height: hp("2.0156690104105106%"),
    minHeight: hp("2.0156690104105106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.644229125976562%"),
    top: hp("72.50651534133887%")
  },
  ImageBackground_216_26: {
    width: wp("6.4891092936197925%"),
    minWidth: wp("6.4891092936197925%"),
    height: hp("3.685795413203391%"),
    minHeight: hp("3.685795413203391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.86799723307291%"),
    top: hp("16.730022574697426%")
  },
  ImageBackground_216_27: {
    width: wp("3.7315025329589844%"),
    minWidth: wp("3.7315025329589844%"),
    height: hp("2.102051127516015%"),
    minHeight: hp("2.102051127516015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.9581787109375%"),
    top: hp("70.0012853394478%")
  },
  ImageBackground_216_28: {
    width: wp("8.333951314290365%"),
    minWidth: wp("8.333951314290365%"),
    height: hp("2.361212339415673%"),
    minHeight: hp("2.361212339415673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.92195638020833%"),
    top: hp("11.604472981278366%")
  },
  ImageBackground_216_29: {
    width: wp("4.268609110514323%"),
    minWidth: wp("4.268609110514323%"),
    height: hp("4.837601700637055%"),
    minHeight: hp("4.837601700637055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4392344156901054%"),
    top: hp("52.75291639088502%")
  },
  ImageBackground_216_30: {
    width: wp("7.978231811523437%"),
    minWidth: wp("7.978231811523437%"),
    height: hp("5.989421550156309%"),
    minHeight: hp("5.989421550156309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("115.354052734375%"),
    top: hp("70.40446825359304%")
  },
  ImageBackground_216_31: {
    width: wp("4.776777140299479%"),
    minWidth: wp("4.776777140299479%"),
    height: hp("2.793141536741502%"),
    minHeight: hp("2.793141536741502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.731386311848958%"),
    top: hp("10.625472768532525%")
  },
  ImageBackground_216_32: {
    width: wp("3.709625752766927%"),
    minWidth: wp("3.709625752766927%"),
    height: hp("4.204111200237418%"),
    minHeight: hp("4.204111200237418%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.19797770182292%"),
    top: hp("54.1350995177761%")
  },
  ImageBackground_216_33: {
    width: wp("4.065341440836589%"),
    minWidth: wp("4.065341440836589%"),
    height: hp("3.3402533826957854%"),
    minHeight: hp("3.3402533826957854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.92568766276041%"),
    top: hp("38.297723028555225%")
  },
  ImageBackground_216_34: {
    width: wp("5.284944661458333%"),
    minWidth: wp("5.284944661458333%"),
    height: hp("2.3036218086277302%"),
    minHeight: hp("2.3036218086277302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.41382649739583%"),
    top: hp("73.91743393059758%")
  },
  ImageBackground_216_35: {
    width: wp("11.535406494140625%"),
    minWidth: wp("11.535406494140625%"),
    height: hp("3.7433852226038025%"),
    minHeight: hp("3.7433852226038025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.622562662760416%"),
    top: hp("30.09105226456127%")
  },
  ImageBackground_216_36: {
    width: wp("5.996380106608073%"),
    minWidth: wp("5.996380106608073%"),
    height: hp("6.795684075752292%"),
    minHeight: hp("6.795684075752292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.450063069661457%"),
    top: hp("0%")
  },
  ImageBackground_216_37: {
    width: wp("8.618853759765626%"),
    minWidth: wp("8.618853759765626%"),
    height: hp("2.0180031319068528%"),
    minHeight: hp("2.0180031319068528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.970008850097656%"),
    top: hp("16.26700489315431%")
  },
  ImageBackground_216_39: {
    width: wp("4.421057637532552%"),
    minWidth: wp("4.421057637532552%"),
    height: hp("2.361213493635723%"),
    minHeight: hp("2.361213493635723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("103.71708170572917%"),
    top: hp("28.593705677950076%")
  },
  ImageBackground_216_41: {
    width: wp("3.6715103149414063%"),
    minWidth: wp("3.6715103149414063%"),
    height: hp("2.3324187332130237%"),
    minHeight: hp("2.3324187332130237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100.10906575520833%"),
    top: hp("65.50924557961422%")
  },
  ImageBackground_216_43: {
    width: wp("2.198009236653646%"),
    minWidth: wp("2.198009236653646%"),
    height: hp("4.693628908466103%"),
    minHeight: hp("4.693628908466103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.55800577799479%"),
    top: hp("48.232067298600604%")
  },
  ImageBackground_216_45: {
    width: wp("7.884381612141928%"),
    minWidth: wp("7.884381612141928%"),
    height: hp("3.772182147189095%"),
    minHeight: hp("3.772182147189095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.31036376953125%"),
    top: hp("68.5903667501891%")
  },
  ImageBackground_216_47: {
    width: wp("4.835374959309896%"),
    minWidth: wp("4.835374959309896%"),
    height: hp("2.793140382521452%"),
    minHeight: hp("2.793140382521452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.134271240234373%"),
    top: hp("25.483849045007567%")
  },
  ImageBackground_216_49: {
    width: wp("6.22244364420573%"),
    minWidth: wp("6.22244364420573%"),
    height: hp("2.1940231323242188%"),
    minHeight: hp("2.1940231323242188%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.09912109375%"),
    top: hp("28.156173175113466%")
  },
  ImageBackground_216_51: {
    width: wp("2.286754862467448%"),
    minWidth: wp("2.286754862467448%"),
    height: hp("4.841590685130248%"),
    minHeight: hp("4.841590685130248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.183259582519529%"),
    top: hp("35.903741371974284%")
  },
  ImageBackground_216_53: {
    width: wp("7.2892333984375%"),
    minWidth: wp("7.2892333984375%"),
    height: hp("2.5395019692840806%"),
    minHeight: hp("2.5395019692840806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.73699544270833%"),
    top: hp("9.986422678706504%")
  },
  ImageBackground_216_55: {
    width: wp("2.3883931477864584%"),
    minWidth: wp("2.3883931477864584%"),
    height: hp("1.2525978319222915%"),
    minHeight: hp("1.2525978319222915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("102.98018391927084%"),
    top: hp("43.14973170385779%")
  },
  ImageBackground_216_57: {
    width: wp("2.3267840067545573%"),
    minWidth: wp("2.3267840067545573%"),
    height: hp("1.4511072329060934%"),
    minHeight: hp("1.4511072329060934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.71687418619791%"),
    top: hp("50.5819485155068%")
  },
  ImageBackground_216_59: {
    width: wp("3.7355255126953124%"),
    minWidth: wp("3.7355255126953124%"),
    height: hp("0.7848117066583906%"),
    minHeight: hp("0.7848117066583906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.052374267578124%"),
    top: hp("20.091776191376702%")
  },
  ImageBackground_216_61: {
    width: wp("3.58307367960612%"),
    minWidth: wp("3.58307367960612%"),
    height: hp("0.7848099753283155%"),
    minHeight: hp("0.7848099753283155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.6750244140625%"),
    top: hp("4.801481538388803%")
  },
  ImageBackground_216_63: {
    width: wp("1.2454991658528645%"),
    minWidth: wp("1.2454991658528645%"),
    height: hp("1.8502337849627106%"),
    minHeight: hp("1.8502337849627106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("133.58436686197916%"),
    top: hp("67.77676165374433%")
  },
  ImageBackground_216_65: {
    width: wp("1.664255142211914%"),
    minWidth: wp("1.664255142211914%"),
    height: hp("1.7097217773345164%"),
    minHeight: hp("1.7097217773345164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.21883951822917%"),
    top: hp("69.61620059568835%")
  },
  ImageBackground_216_67: {
    width: wp("5.3865809122721355%"),
    minWidth: wp("5.3865809122721355%"),
    height: hp("0.6910847824027426%"),
    minHeight: hp("0.6910847824027426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.88224283854167%"),
    top: hp("59.951777609682296%")
  },
  ImageBackground_216_69: {
    width: wp("1.1952250162760418%"),
    minWidth: wp("1.1952250162760418%"),
    height: hp("1.562437672117294%"),
    minHeight: hp("1.562437672117294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.54764811197917%"),
    top: hp("62.47828219553706%")
  },
  ImageBackground_216_71: {
    width: wp("4.776773071289062%"),
    minWidth: wp("4.776773071289062%"),
    height: hp("0.7774714442496942%"),
    minHeight: hp("0.7774714442496942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("132.83497721354166%"),
    top: hp("54.25026297749622%")
  },
  ImageBackground_216_73: {
    width: wp("8.181503295898438%"),
    minWidth: wp("8.181503295898438%"),
    height: hp("2.793140382521452%"),
    minHeight: hp("2.793140382521452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("117.285107421875%"),
    top: hp("35.21660185798033%")
  },
  ImageBackground_216_75: {
    width: wp("4.116161855061849%"),
    minWidth: wp("4.116161855061849%"),
    height: hp("3.3114561695554796%"),
    minHeight: hp("3.3114561695554796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98.48296712239583%"),
    top: hp("52.83934438823752%")
  },
  ImageBackground_216_77: {
    width: wp("5.28494160970052%"),
    minWidth: wp("5.28494160970052%"),
    height: hp("2.0156690104105106%"),
    minHeight: hp("2.0156690104105106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.54815266927083%"),
    top: hp("76.65299085192889%")
  },
  ImageBackground_216_79: {
    width: wp("4.166973622639974%"),
    minWidth: wp("4.166973622639974%"),
    height: hp("2.7355505731210408%"),
    minHeight: hp("2.7355505731210408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("110.57737630208334%"),
    top: hp("12.151628687594553%")
  },
  ImageBackground_216_81: {
    width: wp("7.2667999267578125%"),
    minWidth: wp("7.2667999267578125%"),
    height: hp("2.6203695115451553%"),
    minHeight: hp("2.6203695115451553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.88580729166667%"),
    top: hp("0.23040078952344878%")
  },
  ImageBackground_216_83: {
    width: wp("4.217793782552083%"),
    minWidth: wp("4.217793782552083%"),
    height: hp("2.130848340656321%"),
    minHeight: hp("2.130848340656321%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.64613444010418%"),
    top: hp("24.591129089447804%")
  },
  ImageBackground_216_85: {
    width: wp("5.691469319661458%"),
    minWidth: wp("5.691469319661458%"),
    height: hp("2.073259541198454%"),
    minHeight: hp("2.073259541198454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("132.123681640625%"),
    top: hp("1.7564828385022686%")
  },
  ImageBackground_216_87: {
    width: wp("5.539024861653646%"),
    minWidth: wp("5.539024861653646%"),
    height: hp("2.2748247397649304%"),
    minHeight: hp("2.2748247397649304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.04368489583334%"),
    top: hp("75.24207226267019%")
  },
  ImageBackground_216_89: {
    width: wp("7.876599629720052%"),
    minWidth: wp("7.876599629720052%"),
    height: hp("2.677956723950454%"),
    minHeight: hp("2.677956723950454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("114.89677734375%"),
    top: hp("56.78430231183812%")
  },
  View_216_91: {
    width: wp("113.06666666666668%"),
    minWidth: wp("113.06666666666668%"),
    height: hp("64.14523449319213%"),
    minHeight: hp("64.14523449319213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666666%"),
    top: hp("0%")
  },
  View_216_92: {
    width: wp("113.06666666666668%"),
    minWidth: wp("113.06666666666668%"),
    height: hp("64.14523449319213%"),
    minHeight: hp("64.14523449319213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_216_93: {
    width: wp("113.06666666666668%"),
    minWidth: wp("113.06666666666668%"),
    height: hp("64.14523449319213%"),
    minHeight: hp("64.14523449319213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_216_94: {
    width: wp("113.06665852864583%"),
    minWidth: wp("113.06665852864583%"),
    height: hp("64.14522987631194%"),
    minHeight: hp("64.14522987631194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_216_95: {
    width: wp("95.57518717447917%"),
    minWidth: wp("95.57518717447917%"),
    height: hp("54.22192918370603%"),
    minHeight: hp("54.22192918370603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.745751953125%"),
    top: hp("4.96163187878215%")
  },
  ImageBackground_216_96: {
    width: wp("36.84059244791666%"),
    minWidth: wp("36.84059244791666%"),
    height: hp("20.900487394809%"),
    minHeight: hp("20.900487394809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.533390299479166%"),
    top: hp("23.41541284512103%")
  },
  ImageBackground_216_97: {
    width: wp("36.84059244791666%"),
    minWidth: wp("36.84059244791666%"),
    height: hp("20.900487394809%"),
    minHeight: hp("20.900487394809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.5334228515625%"),
    top: hp("19.829389655824507%")
  },
  ImageBackground_216_98: {
    width: wp("36.84059244791666%"),
    minWidth: wp("36.84059244791666%"),
    height: hp("20.900487394809%"),
    minHeight: hp("20.900487394809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.265690104166666%"),
    top: hp("11.170929462934946%")
  },
  ImageBackground_216_99: {
    width: wp("36.84059244791666%"),
    minWidth: wp("36.84059244791666%"),
    height: hp("20.900487394809%"),
    minHeight: hp("20.900487394809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.944799804687506%"),
    top: hp("11.171003333018156%")
  },
  ImageBackground_216_100: {
    width: wp("36.84059244791666%"),
    minWidth: wp("36.84059244791666%"),
    height: hp("20.900487394809%"),
    minHeight: hp("20.900487394809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.685019938151044%"),
    top: hp("19.82820773449319%")
  },
  ImageBackground_216_101: {
    width: wp("36.84059244791666%"),
    minWidth: wp("36.84059244791666%"),
    height: hp("20.900487394809%"),
    minHeight: hp("20.900487394809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.685019938151044%"),
    top: hp("23.414157053706507%")
  },
  ImageBackground_216_102: {
    width: wp("36.84059244791666%"),
    minWidth: wp("36.84059244791666%"),
    height: hp("20.900487394809%"),
    minHeight: hp("20.900487394809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.94480794270833%"),
    top: hp("32.071435325264744%")
  },
  ImageBackground_216_103: {
    width: wp("36.84059244791666%"),
    minWidth: wp("36.84059244791666%"),
    height: hp("20.900487394809%"),
    minHeight: hp("20.900487394809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2734619140625%"),
    top: hp("32.07261724659607%")
  },
  ImageBackground_216_104: {
    width: wp("44.83367919921875%"),
    minWidth: wp("44.83367919921875%"),
    height: hp("25.435143267332876%"),
    minHeight: hp("25.435143267332876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.10863037109375%"),
    top: hp("19.35381406013616%")
  },
  ImageBackground_216_112: {
    width: wp("86.32278645833334%"),
    minWidth: wp("86.32278645833334%"),
    height: hp("48.97283649300302%"),
    minHeight: hp("48.97283649300302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.372000122070311%"),
    top: hp("7.586235935136159%")
  },
  View_216_113: {
    width: wp("93.37067871093751%"),
    minWidth: wp("93.37067871093751%"),
    height: hp("52.971262506205086%"),
    minHeight: hp("52.971262506205086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.759413655598959%"),
    top: hp("5.523930952155826%")
  },
  ImageBackground_216_114: {
    width: wp("47.787593587239584%"),
    minWidth: wp("47.787593587239584%"),
    height: hp("27.110964591853016%"),
    minHeight: hp("27.110964591853016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.791330973307293%"),
    top: hp("12.930219364599093%")
  },
  ImageBackground_216_117: {
    width: wp("34.36153564453125%"),
    minWidth: wp("34.36153564453125%"),
    height: hp("32.88033351234517%"),
    minHeight: hp("32.88033351234517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.504359944661463%"),
    top: hp("10.045518745272311%")
  },
  ImageBackground_216_120: {
    width: wp("18.593729654947914%"),
    minWidth: wp("18.593729654947914%"),
    height: hp("36.40892963726834%"),
    minHeight: hp("36.40892963726834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.38830769856771%"),
    top: hp("8.281279548033282%")
  },
  ImageBackground_216_123: {
    width: wp("1.5588067372639973%"),
    minWidth: wp("1.5588067372639973%"),
    height: hp("37.45632431330371%"),
    minHeight: hp("37.45632431330371%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.90578002929688%"),
    top: hp("7.757614528177005%")
  },
  ImageBackground_216_126: {
    width: wp("18.59372355143229%"),
    minWidth: wp("18.59372355143229%"),
    height: hp("36.40892963726834%"),
    minHeight: hp("36.40892963726834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.388291422526045%"),
    top: hp("8.281205677950076%")
  },
  ImageBackground_216_129: {
    width: wp("34.361474609374994%"),
    minWidth: wp("34.361474609374994%"),
    height: hp("32.88030350262387%"),
    minHeight: hp("32.88030350262387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.504620361328126%"),
    top: hp("10.045444875189105%")
  },
  ImageBackground_216_132: {
    width: wp("47.78776448567708%"),
    minWidth: wp("47.78776448567708%"),
    height: hp("27.11106154633723%"),
    minHeight: hp("27.11106154633723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.791351318359375%"),
    top: hp("12.929997754349468%")
  },
  ImageBackground_216_135: {
    width: wp("57.95701904296875%"),
    minWidth: wp("57.95701904296875%"),
    height: hp("19.494042562464543%"),
    minHeight: hp("19.494042562464543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.706929524739582%"),
    top: hp("16.738665374432678%")
  },
  ImageBackground_216_138: {
    width: wp("64.17679443359376%"),
    minWidth: wp("64.17679443359376%"),
    height: hp("10.548624797595972%"),
    minHeight: hp("10.548624797595972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.596988932291666%"),
    top: hp("21.211277302382754%")
  },
  ImageBackground_216_141: {
    width: wp("66.02298990885417%"),
    minWidth: wp("66.02298990885417%"),
    height: hp("0.8843464497899504%"),
    minHeight: hp("0.8843464497899504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.673699951171876%"),
    top: hp("26.04356266546899%")
  },
  ImageBackground_216_144: {
    width: wp("64.17681884765625%"),
    minWidth: wp("64.17681884765625%"),
    height: hp("10.548643265116773%"),
    minHeight: hp("10.548643265116773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.596626790364581%"),
    top: hp("21.21135117246596%")
  },
  ImageBackground_216_147: {
    width: wp("57.957002766927076%"),
    minWidth: wp("57.957002766927076%"),
    height: hp("19.49402871182394%"),
    minHeight: hp("19.49402871182394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.706508382161456%"),
    top: hp("16.738665374432678%")
  },
  View_216_150: {
    width: wp("42.83409830729167%"),
    minWidth: wp("42.83409830729167%"),
    height: hp("24.30073655859966%"),
    minHeight: hp("24.30073655859966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.10847981770833%"),
    top: hp("19.921062429084724%")
  },
  ImageBackground_216_151: {
    width: wp("22.217582194010415%"),
    minWidth: wp("22.217582194010415%"),
    height: hp("12.604528476178375%"),
    minHeight: hp("12.604528476178375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.308296712239589%"),
    top: hp("5.8480728772692885%")
  },
  ImageBackground_216_154: {
    width: wp("8.932754516601562%"),
    minWidth: wp("8.932754516601562%"),
    height: hp("16.76394163931011%"),
    minHeight: hp("16.76394163931011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.950801595052084%"),
    top: hp("3.7684084247352487%")
  },
  ImageBackground_216_157: {
    width: wp("8.932759602864584%"),
    minWidth: wp("8.932759602864584%"),
    height: hp("16.76394510197026%"),
    minHeight: hp("16.76394510197026%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.950764973958336%"),
    top: hp("3.7684822948184546%")
  },
  ImageBackground_216_160: {
    width: wp("22.217582194010415%"),
    minWidth: wp("22.217582194010415%"),
    height: hp("12.604528476178375%"),
    minHeight: hp("12.604528476178375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.308272298177087%"),
    top: hp("5.848146747352494%")
  },
  ImageBackground_216_163: {
    width: wp("29.549239095052084%"),
    minWidth: wp("29.549239095052084%"),
    height: hp("5.067757218399856%"),
    minHeight: hp("5.067757218399856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.642390950520841%"),
    top: hp("9.616481302004537%")
  },
  ImageBackground_216_166: {
    width: wp("29.549249267578126%"),
    minWidth: wp("29.549249267578126%"),
    height: hp("5.067742213539204%"),
    minHeight: hp("5.067742213539204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.642346191406254%"),
    top: hp("9.616407431921331%")
  },
  View_216_169: {
    width: wp("55.915917968749994%"),
    minWidth: wp("55.915917968749994%"),
    height: hp("31.722343779548034%"),
    minHeight: hp("31.722343779548034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.56756591796875%"),
    top: hp("16.210272669251136%")
  },
  ImageBackground_216_170: {
    width: wp("63.04110514322917%"),
    minWidth: wp("63.04110514322917%"),
    height: hp("35.77219491286285%"),
    minHeight: hp("35.77219491286285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.9871826171875%"),
    top: hp("14.207211493003022%")
  },
  ImageBackground_216_191: {
    width: wp("8.386592610677084%"),
    minWidth: wp("8.386592610677084%"),
    height: hp("6.919108288371076%"),
    minHeight: hp("6.919108288371076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.33205973307292%"),
    top: hp("10.692177453668684%")
  },
  ImageBackground_216_194: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("11.649016641452345%"),
    minHeight: hp("11.649016641452345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.2%"),
    top: hp("27.38275340393343%"),
    resizeMode: "cover"
  },
  View_216_195: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("9.379727685325264%"),
    minHeight: hp("9.379727685325264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.599999999999998%"),
    top: hp("76.24810892586989%"),
    backgroundColor: "rgba(224, 57, 57, 1)"
  },
  View_216_196: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("5.29500756429652%"),
    minHeight: hp("5.29500756429652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.39999999999999%"),
    top: hp("57.48865355521937%"),
    backgroundColor: "rgba(224, 57, 57, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_216_197: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.26928895612708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8%"),
    top: hp("59.001512859304086%")
  },
  Text_216_197: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_198: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("4.841149773071105%"),
    minHeight: hp("4.841149773071105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333333%"),
    top: hp("78.51739788199697%")
  },
  View_216_199: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.841149773071105%"),
    minHeight: hp("4.841149773071105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_216_200: {
    width: wp("8.533333333333333%"),
    height: hp("4.841149773071105%"),
    minHeight: hp("4.841149773071105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_216_215: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("0.3025718608169541%")
  },
  Text_216_215: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_216: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.5718608169440245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("1.9667170953101305%")
  },
  Text_216_216: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_216_217: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("4.387291981845689%"),
    minHeight: hp("4.387291981845689%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%"),
    top: hp("55.52193645990923%")
  },
  View_216_218: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("2.5718608169440245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666667%"),
    top: hp("56.42965204236005%")
  },
  Text_216_218: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_219: {
    width: wp("63.733333333333334%"),
    minWidth: wp("63.733333333333334%"),
    minHeight: hp("2.5718608169440245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666667%"),
    top: hp("67.77609682299547%")
  },
  Text_216_219: {
    color: "rgba(224, 57, 57, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
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
