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
      <View style={styles.View_216_222}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_216_223}
        />
        <View style={styles.View_216_224}>
          <View source={{ uri: "null" }} style={styles.View_216_225} />
          <View style={styles.View_216_226}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_216_227}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_216_228}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_216_231}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_216_234}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_216_237}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_216_238}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_216_244}
          />
          <View style={styles.View_216_251}>
            <View style={styles.View_216_252}>
              <Text style={styles.Text_216_252}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_216_253}>
        <View style={styles.View_216_255} />
      </View>
      <View style={styles.View_216_262}>
        <View style={styles.View_216_264}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
            }}
            style={styles.ImageBackground_216_265}
          />
          <View style={styles.View_216_266}>
            <View source={{ uri: "null" }} style={styles.View_216_267} />
            <View style={styles.View_216_268}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
                }}
                style={styles.ImageBackground_216_269}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
                }}
                style={styles.ImageBackground_216_270}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
                }}
                style={styles.ImageBackground_216_273}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
                }}
                style={styles.ImageBackground_216_276}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
                }}
                style={styles.ImageBackground_216_279}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
              }}
              style={styles.ImageBackground_216_280}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
              }}
              style={styles.ImageBackground_216_286}
            />
            <View style={styles.View_216_293}>
              <View style={styles.View_216_294}>
                <Text style={styles.Text_216_294}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_216_295}>
          <View style={styles.View_216_296}>
            <Text style={styles.Text_216_296}>Gamification</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fd4/892a/c78f88110cc72b6ff26130adda301117"
            }}
            style={styles.ImageBackground_216_297}
          />
        </View>
      </View>
      <View style={styles.View_216_298}>
        <View style={styles.View_216_299}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caf9/3e47/f43103b56b8db890a4c5223f9c6397d4"
            }}
            style={styles.ImageBackground_216_300}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a0d/381d/2ccc7dab782a0f9e82fb4921377bc77c"
            }}
            style={styles.ImageBackground_216_302}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a39d/a166/bd2869b53b74f591656fdebf3d4e7626"
            }}
            style={styles.ImageBackground_216_304}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f036/2ba3/10b687c39fef91a8e38f41b221c272fd"
            }}
            style={styles.ImageBackground_216_306}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/696f/8533/f1851bee3bfe6bdb705433a46107853e"
            }}
            style={styles.ImageBackground_216_308}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560c/5f1c/6a522ac5a06de7facc51910f09974338"
            }}
            style={styles.ImageBackground_216_310}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62a0/75a5/df9fb4a427a305c56acfcc4ff9fc94a3"
            }}
            style={styles.ImageBackground_216_312}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a502/bc36/19ac4ff108e4cd355246eb31fe68f86e"
            }}
            style={styles.ImageBackground_216_314}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/212d/7226/c4ae55a4a30a17a483af4927cec221df"
            }}
            style={styles.ImageBackground_216_316}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc42/c60d/e14fdc4908313c6f0e0bad8ed97bf3b0"
            }}
            style={styles.ImageBackground_216_318}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a104/90cc/c971e4ed8cf013a627348de83ba2278f"
            }}
            style={styles.ImageBackground_216_319}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df09/a812/0b9830b0532e06334461250ef4277f27"
            }}
            style={styles.ImageBackground_216_320}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/032d/2636/c2abbd6cf06eb51e805710fb065e4580"
            }}
            style={styles.ImageBackground_216_321}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eda/8c25/e4f573d34e8df191e2563a0159895bd4"
            }}
            style={styles.ImageBackground_216_322}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c0e/a4d7/f0e03d2a5369ed5afdd22600b1c8cb24"
            }}
            style={styles.ImageBackground_216_323}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca77/c16e/c9e5574bc9cab654f6ad29e6afc54d45"
            }}
            style={styles.ImageBackground_216_324}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d048/e6d5/73f69c1b919c947333cf18a9d2b6d7c8"
            }}
            style={styles.ImageBackground_216_325}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8816/b536/142042699411b255b5ab4b2c673f0a62"
            }}
            style={styles.ImageBackground_216_326}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9282/3a7b/0a935c57405d9af60dae82711a63093a"
            }}
            style={styles.ImageBackground_216_327}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ab3/004b/fe16f67d68978da27fff276a490e39a0"
            }}
            style={styles.ImageBackground_216_328}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843c/90e3/fecfb9b208205dcd86349fe76baf9b8f"
            }}
            style={styles.ImageBackground_216_329}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3a7/a919/4d5a027f3ebf10c55811bd3c46886268"
            }}
            style={styles.ImageBackground_216_330}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4db6/9d9f/bb2b2f6a5792f6e4f53b0caa5b1ab57e"
            }}
            style={styles.ImageBackground_216_331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4986/548e/75f7f6d4f3013c8cdc4fd00841e70fa1"
            }}
            style={styles.ImageBackground_216_332}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22fc/e591/10f03e0b2ace4bebc07c83a045c8c802"
            }}
            style={styles.ImageBackground_216_333}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc85/ec3a/d01b2ab8f032f257df1bff2db5092eef"
            }}
            style={styles.ImageBackground_216_334}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f52/6d4e/2707583066e52537f09ec4a4aa50db04"
            }}
            style={styles.ImageBackground_216_335}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14d0/829e/826fc132e5d641a9c527ce71ac35efac"
            }}
            style={styles.ImageBackground_216_336}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11d9/dc7b/cf20bdae011f08df18881702b5656fc4"
            }}
            style={styles.ImageBackground_216_338}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80a9/a6e9/b6107c9ed3f2546c694fdbb410ecc024"
            }}
            style={styles.ImageBackground_216_340}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b44c/cdc4/9bad3cfb5b23ee0feac9f8fe03166bd8"
            }}
            style={styles.ImageBackground_216_342}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2420/07a5/5fdd8ed27dff924b4cedfbd1b5495c94"
            }}
            style={styles.ImageBackground_216_344}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c40/9f03/72e13cdfb220d8e7e6d75325e4751cbf"
            }}
            style={styles.ImageBackground_216_346}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17a2/feb6/cce2a0343ad1e73832fc22d5703b163b"
            }}
            style={styles.ImageBackground_216_348}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1e6/e1bc/1e9f378f2f3edb3c3a3a2af8af5f4667"
            }}
            style={styles.ImageBackground_216_350}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/352a/c054/e2d48f7a942bb834da05f64220437881"
            }}
            style={styles.ImageBackground_216_352}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e66f/56c0/270d1472e2271fc95258e23fcb4b9035"
            }}
            style={styles.ImageBackground_216_354}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fa8/cfc7/6706ddcb0b45d7c19f0f4acbf8ea39a6"
            }}
            style={styles.ImageBackground_216_356}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2216/19d4/16115c7958ea46d3025dd46acb22abc0"
            }}
            style={styles.ImageBackground_216_358}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54b4/ab12/a140456df8e1ccaa14f8dadd9571d426"
            }}
            style={styles.ImageBackground_216_360}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbe8/7261/128207fa01045cc8fc74d7d58035dbf5"
            }}
            style={styles.ImageBackground_216_362}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf2/6ec2/ac9726359749333ac357a0f90bb1be18"
            }}
            style={styles.ImageBackground_216_364}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a636/2ac4/31584468041e72cf491169d1ac6a3865"
            }}
            style={styles.ImageBackground_216_366}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0fc/873e/e9904a62fddf3372e425d5fc554534bc"
            }}
            style={styles.ImageBackground_216_368}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d3b/1cbf/44776997258e7eaf9eed920f78f6181e"
            }}
            style={styles.ImageBackground_216_370}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/effe/e87b/a3ffff37ca9d8891114834493129d2db"
            }}
            style={styles.ImageBackground_216_372}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b432/a9b5/9bf410fd518ddd7fbd8be52904a342d7"
            }}
            style={styles.ImageBackground_216_374}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f00/5225/adec6adf7e75bc08c658be4c61a09e01"
            }}
            style={styles.ImageBackground_216_376}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8b7/0179/60e92f8f82e8b54a967a3579020722bf"
            }}
            style={styles.ImageBackground_216_378}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7352/6b0d/dda6c1ebb0f796612d81535a23ba66af"
            }}
            style={styles.ImageBackground_216_380}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f86d/365a/c9e7f212f5b85210b91347590ae0453b"
            }}
            style={styles.ImageBackground_216_382}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7797/bbd0/95a823d4331dcbd9bcf953c7bb78e868"
            }}
            style={styles.ImageBackground_216_384}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c0a/6a39/bb616038017c9eacfe3599a1e12eb026"
            }}
            style={styles.ImageBackground_216_386}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea3c/c303/ba4646cc5dfbfc1b2a94bf7b06b112c7"
            }}
            style={styles.ImageBackground_216_388}
          />
        </View>
        <View style={styles.View_216_390}>
          <View style={styles.View_216_391}>
            <View style={styles.View_216_392}>
              <View style={styles.View_216_393}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a18/fe59/485b46735692770387f976c27c20e61b"
                  }}
                  style={styles.ImageBackground_216_394}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ec1/2194/06bf5b9ad4e98dd2cbfb7052ee2aafac"
                  }}
                  style={styles.ImageBackground_216_395}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a86/c308/6066b5e676d1f0c1b841b82803871880"
                  }}
                  style={styles.ImageBackground_216_396}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5262/f50c/cd8086d5fe15b1cb8b0749def8b243b8"
                  }}
                  style={styles.ImageBackground_216_397}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9fa/c670/c98ad079965c0b419f9ea7b6780d3edf"
                  }}
                  style={styles.ImageBackground_216_398}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c282/f88d/1f72b791ee8291a34589672e58e2af1a"
                  }}
                  style={styles.ImageBackground_216_399}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3edb/d6ea/eed023b8c135495550658c005b2ca12e"
                  }}
                  style={styles.ImageBackground_216_400}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f256/7929/67fdb598afda79c22b238dbfb1640e93"
                  }}
                  style={styles.ImageBackground_216_401}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e438/ac8c/1f31df11098f09d691a21acda21ec021"
                  }}
                  style={styles.ImageBackground_216_402}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ba0/23d6/e9cdabd239b57f3be78262cf2ad5912c"
                  }}
                  style={styles.ImageBackground_216_403}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5de8/9bb5/8627d73d438222dbef32cc4ad5a29e7b"
                  }}
                  style={styles.ImageBackground_216_411}
                />
                <View style={styles.View_216_412}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9273/2e5e/92b09c0945d1728ab9a71ac5a92639d2"
                    }}
                    style={styles.ImageBackground_216_413}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33c6/8ba9/802c13e94f6669a2d9e3aa350c3d9f2e"
                    }}
                    style={styles.ImageBackground_216_416}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5816/b5cc/34761035bda2faf1c9d338fdd595f9a0"
                    }}
                    style={styles.ImageBackground_216_419}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31b2/7651/239f4d1df74b5139089b0c7ce710872f"
                    }}
                    style={styles.ImageBackground_216_422}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48d7/b4ef/d50fa096c0b6100e9c427467f083eed4"
                    }}
                    style={styles.ImageBackground_216_425}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fa8/77fb/a6df54f66f0bc62cc65c5c279ff2b06e"
                    }}
                    style={styles.ImageBackground_216_428}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e37/1321/a64f3a0a5fedb5e33b01f96adfaf6f73"
                    }}
                    style={styles.ImageBackground_216_431}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/468c/bceb/d555e9bff687f3f97a14d4c190f0b9a6"
                    }}
                    style={styles.ImageBackground_216_434}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91c7/21b6/daa22724180c0d4a12b98d0423fa92a5"
                    }}
                    style={styles.ImageBackground_216_437}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c91/461b/c04b780fa895e1c5ccdac718a72ba1e2"
                    }}
                    style={styles.ImageBackground_216_440}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ebd/edee/8c9989068fcb2dea2348592c32e494a0"
                    }}
                    style={styles.ImageBackground_216_443}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eda/bd3f/36807731dc7f0008b73768a46aa78197"
                    }}
                    style={styles.ImageBackground_216_446}
                  />
                </View>
                <View style={styles.View_216_449}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7be9/f9ce/272ad2a4874ed8662e5d10daaf60b915"
                    }}
                    style={styles.ImageBackground_216_450}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a9/7cdb/a8be2380cd734209e9fb168b11973cc6"
                    }}
                    style={styles.ImageBackground_216_453}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3683/b070/66ff263a3749dc9602a31b20587b2c0f"
                    }}
                    style={styles.ImageBackground_216_456}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8747/59fa/89c8d9b4f49acc4f789320597fe475ef"
                    }}
                    style={styles.ImageBackground_216_459}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d73/ee7f/bd3d72c5c25ebf98b5a420c8fd2ec42d"
                    }}
                    style={styles.ImageBackground_216_462}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7247/2cba/b32e0a79b50334a6d2df855414eda910"
                    }}
                    style={styles.ImageBackground_216_465}
                  />
                </View>
                <View source={{ uri: "null" }} style={styles.View_216_468} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d75d/5b19/50be92658492f7c20f6e0564cbddb027"
                  }}
                  style={styles.ImageBackground_216_469}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fb6/867a/0edd4d654b43224f22a2bf9b0499b3c9"
                }}
                style={styles.ImageBackground_216_490}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de9b/0305/2905bff0f3e02e66b4bdb0f8dbc3d0d8"
          }}
          style={styles.ImageBackground_216_493}
        />
        <View style={styles.View_216_494} />
        <View style={styles.View_216_495} />
        <View style={styles.View_216_496}>
          <Text style={styles.Text_216_496}>PUTAR</Text>
        </View>
        <View style={styles.View_216_497}>
          <View style={styles.View_216_498}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c2c/1b91/2adf35daaeba8bed2b71f0e7d2dcb49d"
              }}
              style={styles.ImageBackground_216_499}
            />
          </View>
          <View style={styles.View_216_514}>
            <Text style={styles.Text_216_514}>Poin kamu</Text>
          </View>
          <View style={styles.View_216_515}>
            <Text style={styles.Text_216_515}>2840 Pts</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aff/b7be/73b617495db756e47bf08104a0beb388"
          }}
          style={styles.ImageBackground_216_516}
        />
        <View style={styles.View_216_517}>
          <Text style={styles.Text_216_517}>2</Text>
        </View>
        <View style={styles.View_216_518}>
          <Text style={styles.Text_216_518}>
            Kamu punya 2 token untuk dimainkan!{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_216_647} />
      <View style={styles.View_216_646}>
        <View style={styles.View_216_583} />
        <View style={styles.View_216_584}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a3f/5e27/4c10e2fbb2898142f99309032f05d552"
            }}
            style={styles.ImageBackground_216_585}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/997d/4b46/5da0b289731395a21adea4771a93eb4f"
            }}
            style={styles.ImageBackground_216_586}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30c8/1ad3/3e4efd6b85d50c98d1e02a49b78d8dbc"
            }}
            style={styles.ImageBackground_216_587}
          />
          <View style={styles.View_216_594}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a275/45aa/0cdad6fdcc53eb72b375d56eac1864e0"
              }}
              style={styles.ImageBackground_216_595}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d8b/2608/26ac7b1f2f3912662b6c48c407dcd318"
              }}
              style={styles.ImageBackground_216_596}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6335/561e/054af606ea81488f76857d229b460025"
              }}
              style={styles.ImageBackground_216_597}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0947/f41f/9325af77a9ce12cd271ee3a88b738aaf"
              }}
              style={styles.ImageBackground_216_598}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aedc/a4fb/7bb8809ccc1753ce6269849b54280fba"
              }}
              style={styles.ImageBackground_216_599}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc06/254f/e3c33347234e8bcd46a49667eb4d71ef"
              }}
              style={styles.ImageBackground_216_600}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ba3/739b/a00d83a4ff38ae25d4c5cebf15858c60"
              }}
              style={styles.ImageBackground_216_601}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ac6/77c4/122aac895e959a4aaebb9a6b920b7423"
              }}
              style={styles.ImageBackground_216_602}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f450/5fc1/5916f01663558d893ff01cbfa3f195f4"
              }}
              style={styles.ImageBackground_216_605}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feb9/b32c/c3be46da8f2ba1599288d8cfc4844f25"
            }}
            style={styles.ImageBackground_216_608}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eaa/9558/9906eec8d0edaa2a6bded8a1eb29a672"
            }}
            style={styles.ImageBackground_216_614}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ef8/e673/5b6575fd9b34d72c6ab4d4c10bc7b747"
            }}
            style={styles.ImageBackground_216_625}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9328/9ea8/c974a2c287110bbc2d27f32a03f49b48"
            }}
            style={styles.ImageBackground_216_632}
          />
        </View>
        <View style={styles.View_216_637} />
        <View style={styles.View_216_638}>
          <Text style={styles.Text_216_638}>20</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1435/046f/39e488f1cf5f8bcb6cb9a176ebc56a2d"
          }}
          style={styles.ImageBackground_216_639}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d94/dc8d/5979cca5912e2fdc4bf61349f8ccf4e4"
          }}
          style={styles.ImageBackground_216_640}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f5d/39de/33ff6cf5473226d7d6b1c6042fbcc598"
          }}
          style={styles.ImageBackground_216_641}
        />
        <View style={styles.View_216_642}>
          <Text style={styles.Text_216_642}>Kamu mendapatkan 20 Poin</Text>
        </View>
        <View style={styles.View_216_643}>
          <Text style={styles.Text_216_643}>SELAMAT!</Text>
        </View>
        <View style={styles.View_216_644} />
        <View style={styles.View_216_645}>
          <Text style={styles.Text_216_645}>Lihat Voucher</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_216_222: {
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
  ImageBackground_216_223: {
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
  View_216_224: {
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
  View_216_225: {
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
  View_216_226: {
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
  ImageBackground_216_227: {
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
  ImageBackground_216_228: {
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
  ImageBackground_216_231: {
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
  ImageBackground_216_234: {
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
  ImageBackground_216_237: {
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
  ImageBackground_216_238: {
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
  ImageBackground_216_244: {
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
  View_216_251: {
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
  View_216_252: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.26928895612708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_216_252: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_253: {
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
  View_216_255: {
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
  View_216_262: {
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
  View_216_264: {
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
  ImageBackground_216_265: {
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
  View_216_266: {
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
  View_216_267: {
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
  View_216_268: {
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
  ImageBackground_216_269: {
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
  ImageBackground_216_270: {
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
  ImageBackground_216_273: {
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
  ImageBackground_216_276: {
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
  ImageBackground_216_279: {
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
  ImageBackground_216_280: {
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
  ImageBackground_216_286: {
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
  View_216_293: {
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
  View_216_294: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.26928895612708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_216_294: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_295: {
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
  View_216_296: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.4205748865355523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.377775065104167%"),
    top: hp("0%")
  },
  Text_216_296: {
    color: "rgba(194, 17, 16, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_216_297: {
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
  View_216_298: {
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
  View_216_299: {
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
  ImageBackground_216_300: {
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
  ImageBackground_216_302: {
    width: wp("7.083365376790364%"),
    minWidth: wp("7.083365376790364%"),
    height: hp("3.1674799147243764%"),
    minHeight: hp("3.1674799147243764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.965592447916666%"),
    top: hp("59.462240568267774%")
  },
  ImageBackground_216_304: {
    width: wp("6.4386352539062495%"),
    minWidth: wp("6.4386352539062495%"),
    height: hp("3.792422261432873%"),
    minHeight: hp("3.792422261432873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("118.82467447916666%"),
    top: hp("45.79302489126324%")
  },
  ImageBackground_216_306: {
    width: wp("2.2436622619628905%"),
    minWidth: wp("2.2436622619628905%"),
    height: hp("2.3036218086277302%"),
    minHeight: hp("2.3036218086277302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.41162109375%"),
    top: hp("0.9502647503782118%")
  },
  ImageBackground_216_308: {
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
  ImageBackground_216_310: {
    width: wp("6.30121561686198%"),
    minWidth: wp("6.30121561686198%"),
    height: hp("4.31157110678807%"),
    minHeight: hp("4.31157110678807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.19241536458334%"),
    top: hp("45.96499444496975%")
  },
  ImageBackground_216_312: {
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
  ImageBackground_216_314: {
    width: wp("4.904061381022135%"),
    minWidth: wp("4.904061381022135%"),
    height: hp("2.5239459685586763%"),
    minHeight: hp("2.5239459685586763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("131.4373046875%"),
    top: hp("11.873655564485627%")
  },
  ImageBackground_216_316: {
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
  ImageBackground_216_318: {
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
  ImageBackground_216_319: {
    width: wp("3.7786318461100263%"),
    minWidth: wp("3.7786318461100263%"),
    height: hp("2.130850360541409%"),
    minHeight: hp("2.130850360541409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.401025390624998%"),
    top: hp("28.248141428706504%")
  },
  ImageBackground_216_320: {
    width: wp("3.925996653238932%"),
    minWidth: wp("3.925996653238932%"),
    height: hp("2.246029835064725%"),
    minHeight: hp("2.246029835064725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125.58714192708334%"),
    top: hp("22.604319331505295%")
  },
  ImageBackground_216_321: {
    width: wp("5.89918721516927%"),
    minWidth: wp("5.89918721516927%"),
    height: hp("3.340251362810698%"),
    minHeight: hp("3.340251362810698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.997867838541666%"),
    top: hp("1.3821831268910731%")
  },
  ImageBackground_216_322: {
    width: wp("4.330983988444011%"),
    minWidth: wp("4.330983988444011%"),
    height: hp("2.447598063458834%"),
    minHeight: hp("2.447598063458834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.06334635416667%"),
    top: hp("36.5987849848714%")
  },
  ImageBackground_216_323: {
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
  ImageBackground_216_324: {
    width: wp("3.5174166361490884%"),
    minWidth: wp("3.5174166361490884%"),
    height: hp("2.0156690104105106%"),
    minHeight: hp("2.0156690104105106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.644230143229166%"),
    top: hp("72.50651534133887%")
  },
  ImageBackground_216_325: {
    width: wp("6.4891092936197925%"),
    minWidth: wp("6.4891092936197925%"),
    height: hp("3.685795413203391%"),
    minHeight: hp("3.685795413203391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.86800130208333%"),
    top: hp("16.730022574697426%")
  },
  ImageBackground_216_326: {
    width: wp("3.7315025329589844%"),
    minWidth: wp("3.7315025329589844%"),
    height: hp("2.102051127516015%"),
    minHeight: hp("2.102051127516015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.95817057291667%"),
    top: hp("70.0012853394478%")
  },
  ImageBackground_216_327: {
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
  ImageBackground_216_328: {
    width: wp("4.268609110514323%"),
    minWidth: wp("4.268609110514323%"),
    height: hp("4.837601700637055%"),
    minHeight: hp("4.837601700637055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4392333984375014%"),
    top: hp("52.75291639088502%")
  },
  ImageBackground_216_329: {
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
  ImageBackground_216_330: {
    width: wp("4.776777140299479%"),
    minWidth: wp("4.776777140299479%"),
    height: hp("2.793141536741502%"),
    minHeight: hp("2.793141536741502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.731388346354166%"),
    top: hp("10.625472768532525%")
  },
  ImageBackground_216_331: {
    width: wp("3.709625752766927%"),
    minWidth: wp("3.709625752766927%"),
    height: hp("4.204111200237418%"),
    minHeight: hp("4.204111200237418%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.19798177083334%"),
    top: hp("54.1350995177761%")
  },
  ImageBackground_216_332: {
    width: wp("4.065341440836589%"),
    minWidth: wp("4.065341440836589%"),
    height: hp("3.3402533826957854%"),
    minHeight: hp("3.3402533826957854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.92568359375%"),
    top: hp("38.297723028555225%")
  },
  ImageBackground_216_333: {
    width: wp("5.284944661458333%"),
    minWidth: wp("5.284944661458333%"),
    height: hp("2.3036218086277302%"),
    minHeight: hp("2.3036218086277302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.41383463541666%"),
    top: hp("73.91743393059758%")
  },
  ImageBackground_216_334: {
    width: wp("11.535406494140625%"),
    minWidth: wp("11.535406494140625%"),
    height: hp("3.7433852226038025%"),
    minHeight: hp("3.7433852226038025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.62255859375%"),
    top: hp("30.09105226456127%")
  },
  ImageBackground_216_335: {
    width: wp("5.996380106608073%"),
    minWidth: wp("5.996380106608073%"),
    height: hp("6.795684075752292%"),
    minHeight: hp("6.795684075752292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.450065104166665%"),
    top: hp("0%")
  },
  ImageBackground_216_336: {
    width: wp("8.618853759765626%"),
    minWidth: wp("8.618853759765626%"),
    height: hp("2.0180031319068528%"),
    minHeight: hp("2.0180031319068528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.970011393229166%"),
    top: hp("16.26700489315431%")
  },
  ImageBackground_216_338: {
    width: wp("4.421057637532552%"),
    minWidth: wp("4.421057637532552%"),
    height: hp("2.361213493635723%"),
    minHeight: hp("2.361213493635723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("103.71708984375%"),
    top: hp("28.593705677950076%")
  },
  ImageBackground_216_340: {
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
  ImageBackground_216_342: {
    width: wp("2.198009236653646%"),
    minWidth: wp("2.198009236653646%"),
    height: hp("4.693628908466103%"),
    minHeight: hp("4.693628908466103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.558007812499998%"),
    top: hp("48.232067298600604%")
  },
  ImageBackground_216_344: {
    width: wp("7.884381612141928%"),
    minWidth: wp("7.884381612141928%"),
    height: hp("3.772182147189095%"),
    minHeight: hp("3.772182147189095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.310367838541666%"),
    top: hp("68.5903667501891%")
  },
  ImageBackground_216_346: {
    width: wp("4.835374959309896%"),
    minWidth: wp("4.835374959309896%"),
    height: hp("2.793140382521452%"),
    minHeight: hp("2.793140382521452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.134269205729165%"),
    top: hp("25.483849045007567%")
  },
  ImageBackground_216_348: {
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
  ImageBackground_216_350: {
    width: wp("2.286754862467448%"),
    minWidth: wp("2.286754862467448%"),
    height: hp("4.841590685130248%"),
    minHeight: hp("4.841590685130248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.183260091145833%"),
    top: hp("35.903741371974284%")
  },
  ImageBackground_216_352: {
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
  ImageBackground_216_354: {
    width: wp("2.3883931477864584%"),
    minWidth: wp("2.3883931477864584%"),
    height: hp("1.2525978319222915%"),
    minHeight: hp("1.2525978319222915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("102.98017578125%"),
    top: hp("43.14973170385779%")
  },
  ImageBackground_216_356: {
    width: wp("2.3267840067545573%"),
    minWidth: wp("2.3267840067545573%"),
    height: hp("1.4511072329060934%"),
    minHeight: hp("1.4511072329060934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.71687825520833%"),
    top: hp("50.5819485155068%")
  },
  ImageBackground_216_358: {
    width: wp("3.7355255126953124%"),
    minWidth: wp("3.7355255126953124%"),
    height: hp("0.7848117066583906%"),
    minHeight: hp("0.7848117066583906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.05237630208333%"),
    top: hp("20.091776191376702%")
  },
  ImageBackground_216_360: {
    width: wp("3.58307367960612%"),
    minWidth: wp("3.58307367960612%"),
    height: hp("0.7848099753283155%"),
    minHeight: hp("0.7848099753283155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.67503255208334%"),
    top: hp("4.801481538388803%")
  },
  ImageBackground_216_362: {
    width: wp("1.2454991658528645%"),
    minWidth: wp("1.2454991658528645%"),
    height: hp("1.8502337849627106%"),
    minHeight: hp("1.8502337849627106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("133.584375%"),
    top: hp("67.77676165374433%")
  },
  ImageBackground_216_364: {
    width: wp("1.664255142211914%"),
    minWidth: wp("1.664255142211914%"),
    height: hp("1.7097217773345164%"),
    minHeight: hp("1.7097217773345164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.21884765625%"),
    top: hp("69.61620059568835%")
  },
  ImageBackground_216_366: {
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
  ImageBackground_216_368: {
    width: wp("1.1952250162760418%"),
    minWidth: wp("1.1952250162760418%"),
    height: hp("1.562437672117294%"),
    minHeight: hp("1.562437672117294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.54765625%"),
    top: hp("62.47828219553706%")
  },
  ImageBackground_216_370: {
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
  ImageBackground_216_372: {
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
  ImageBackground_216_374: {
    width: wp("4.116161855061849%"),
    minWidth: wp("4.116161855061849%"),
    height: hp("3.3114561695554796%"),
    minHeight: hp("3.3114561695554796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98.48297526041667%"),
    top: hp("52.83934438823752%")
  },
  ImageBackground_216_376: {
    width: wp("5.28494160970052%"),
    minWidth: wp("5.28494160970052%"),
    height: hp("2.0156690104105106%"),
    minHeight: hp("2.0156690104105106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.54814453125%"),
    top: hp("76.65299085192889%")
  },
  ImageBackground_216_378: {
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
  ImageBackground_216_380: {
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
  ImageBackground_216_382: {
    width: wp("4.217793782552083%"),
    minWidth: wp("4.217793782552083%"),
    height: hp("2.130848340656321%"),
    minHeight: hp("2.130848340656321%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.64612630208333%"),
    top: hp("24.591129089447804%")
  },
  ImageBackground_216_384: {
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
  ImageBackground_216_386: {
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
  ImageBackground_216_388: {
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
  View_216_390: {
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
  View_216_391: {
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
  View_216_392: {
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
  View_216_393: {
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
  ImageBackground_216_394: {
    width: wp("95.57518717447917%"),
    minWidth: wp("95.57518717447917%"),
    height: hp("54.22192918370603%"),
    minHeight: hp("54.22192918370603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.745760091145833%"),
    top: hp("4.96163187878215%")
  },
  ImageBackground_216_395: {
    width: wp("36.84059244791666%"),
    minWidth: wp("36.84059244791666%"),
    height: hp("20.900487394809%"),
    minHeight: hp("20.900487394809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.533398437500004%"),
    top: hp("23.41541284512103%")
  },
  ImageBackground_216_396: {
    width: wp("36.84059244791666%"),
    minWidth: wp("36.84059244791666%"),
    height: hp("20.900487394809%"),
    minHeight: hp("20.900487394809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53341471354166%"),
    top: hp("19.829389655824507%")
  },
  ImageBackground_216_397: {
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
  ImageBackground_216_398: {
    width: wp("36.84059244791666%"),
    minWidth: wp("36.84059244791666%"),
    height: hp("20.900487394809%"),
    minHeight: hp("20.900487394809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.94479166666667%"),
    top: hp("11.171003333018156%")
  },
  ImageBackground_216_399: {
    width: wp("36.84059244791666%"),
    minWidth: wp("36.84059244791666%"),
    height: hp("20.900487394809%"),
    minHeight: hp("20.900487394809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.685026041666667%"),
    top: hp("19.82820773449319%")
  },
  ImageBackground_216_400: {
    width: wp("36.84059244791666%"),
    minWidth: wp("36.84059244791666%"),
    height: hp("20.900487394809%"),
    minHeight: hp("20.900487394809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.685026041666667%"),
    top: hp("23.414157053706507%")
  },
  ImageBackground_216_401: {
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
  ImageBackground_216_402: {
    width: wp("36.84059244791666%"),
    minWidth: wp("36.84059244791666%"),
    height: hp("20.900487394809%"),
    minHeight: hp("20.900487394809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.27347005208333%"),
    top: hp("32.07261724659607%")
  },
  ImageBackground_216_403: {
    width: wp("44.83367919921875%"),
    minWidth: wp("44.83367919921875%"),
    height: hp("25.435143267332876%"),
    minHeight: hp("25.435143267332876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.10862630208333%"),
    top: hp("19.35381406013616%")
  },
  ImageBackground_216_411: {
    width: wp("86.32278645833334%"),
    minWidth: wp("86.32278645833334%"),
    height: hp("48.97283649300302%"),
    minHeight: hp("48.97283649300302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.372005208333333%"),
    top: hp("7.586235935136159%")
  },
  View_216_412: {
    width: wp("93.37067871093751%"),
    minWidth: wp("93.37067871093751%"),
    height: hp("52.971262506205086%"),
    minHeight: hp("52.971262506205086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.759415690104166%"),
    top: hp("5.52385708207262%")
  },
  ImageBackground_216_413: {
    width: wp("47.787593587239584%"),
    minWidth: wp("47.787593587239584%"),
    height: hp("27.110964591853016%"),
    minHeight: hp("27.110964591853016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.79131673177083%"),
    top: hp("12.930219364599093%")
  },
  ImageBackground_216_416: {
    width: wp("34.36153564453125%"),
    minWidth: wp("34.36153564453125%"),
    height: hp("32.88033351234517%"),
    minHeight: hp("32.88033351234517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.504353841145832%"),
    top: hp("10.045518745272311%")
  },
  ImageBackground_216_419: {
    width: wp("18.593729654947914%"),
    minWidth: wp("18.593729654947914%"),
    height: hp("36.40892963726834%"),
    minHeight: hp("36.40892963726834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.3883056640625%"),
    top: hp("8.281279548033282%")
  },
  ImageBackground_216_422: {
    width: wp("1.5588067372639973%"),
    minWidth: wp("1.5588067372639973%"),
    height: hp("37.45632431330371%"),
    minHeight: hp("37.45632431330371%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.90576985677083%"),
    top: hp("7.757614528177001%")
  },
  ImageBackground_216_425: {
    width: wp("18.59372355143229%"),
    minWidth: wp("18.59372355143229%"),
    height: hp("36.40892963726834%"),
    minHeight: hp("36.40892963726834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.38828938802084%"),
    top: hp("8.281205677950076%")
  },
  ImageBackground_216_428: {
    width: wp("34.361474609374994%"),
    minWidth: wp("34.361474609374994%"),
    height: hp("32.88030350262387%"),
    minHeight: hp("32.88030350262387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.504614257812502%"),
    top: hp("10.045444875189105%")
  },
  ImageBackground_216_431: {
    width: wp("47.78776448567708%"),
    minWidth: wp("47.78776448567708%"),
    height: hp("27.11106154633723%"),
    minHeight: hp("27.11106154633723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.791349283854167%"),
    top: hp("12.929997754349468%")
  },
  ImageBackground_216_434: {
    width: wp("57.95701904296875%"),
    minWidth: wp("57.95701904296875%"),
    height: hp("19.494042562464543%"),
    minHeight: hp("19.494042562464543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.706925455729166%"),
    top: hp("16.738665374432678%")
  },
  ImageBackground_216_437: {
    width: wp("64.17679443359376%"),
    minWidth: wp("64.17679443359376%"),
    height: hp("10.548624797595972%"),
    minHeight: hp("10.548624797595972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.59698079427083%"),
    top: hp("21.211277302382754%")
  },
  ImageBackground_216_440: {
    width: wp("66.02298990885417%"),
    minWidth: wp("66.02298990885417%"),
    height: hp("0.8843464497899504%"),
    minHeight: hp("0.8843464497899504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.673697916666669%"),
    top: hp("26.043562665468983%")
  },
  ImageBackground_216_443: {
    width: wp("64.17681884765625%"),
    minWidth: wp("64.17681884765625%"),
    height: hp("10.548643265116773%"),
    minHeight: hp("10.548643265116773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.59662272135417%"),
    top: hp("21.21135117246596%")
  },
  ImageBackground_216_446: {
    width: wp("57.957002766927076%"),
    minWidth: wp("57.957002766927076%"),
    height: hp("19.49402871182394%"),
    minHeight: hp("19.49402871182394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.706502278645832%"),
    top: hp("16.738665374432678%")
  },
  View_216_449: {
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
  ImageBackground_216_450: {
    width: wp("22.217582194010415%"),
    minWidth: wp("22.217582194010415%"),
    height: hp("12.604528476178375%"),
    minHeight: hp("12.604528476178375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.308300781250004%"),
    top: hp("5.8480728772692885%")
  },
  ImageBackground_216_453: {
    width: wp("8.932754516601562%"),
    minWidth: wp("8.932754516601562%"),
    height: hp("16.76394163931011%"),
    minHeight: hp("16.76394163931011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.95081380208334%"),
    top: hp("3.7684084247352487%")
  },
  ImageBackground_216_456: {
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
  ImageBackground_216_459: {
    width: wp("22.217582194010415%"),
    minWidth: wp("22.217582194010415%"),
    height: hp("12.604528476178375%"),
    minHeight: hp("12.604528476178375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.308268229166671%"),
    top: hp("5.848146747352494%")
  },
  ImageBackground_216_462: {
    width: wp("29.549239095052084%"),
    minWidth: wp("29.549239095052084%"),
    height: hp("5.067757218399856%"),
    minHeight: hp("5.067757218399856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.642382812500003%"),
    top: hp("9.616481302004537%")
  },
  ImageBackground_216_465: {
    width: wp("29.549249267578126%"),
    minWidth: wp("29.549249267578126%"),
    height: hp("5.067742213539204%"),
    minHeight: hp("5.067742213539204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.64235026041667%"),
    top: hp("9.616407431921331%")
  },
  View_216_468: {
    width: wp("55.915917968749994%"),
    minWidth: wp("55.915917968749994%"),
    height: hp("31.722343779548034%"),
    minHeight: hp("31.722343779548034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.56756184895833%"),
    top: hp("16.210272669251136%")
  },
  ImageBackground_216_469: {
    width: wp("63.04110514322917%"),
    minWidth: wp("63.04110514322917%"),
    height: hp("35.77219491286285%"),
    minHeight: hp("35.77219491286285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.987174479166665%"),
    top: hp("14.207211493003022%")
  },
  ImageBackground_216_490: {
    width: wp("8.386592610677084%"),
    minWidth: wp("8.386592610677084%"),
    height: hp("6.919108288371076%"),
    minHeight: hp("6.919108288371076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.33206380208333%"),
    top: hp("10.692177453668684%")
  },
  ImageBackground_216_493: {
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
  View_216_494: {
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
  View_216_495: {
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
  View_216_496: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.26928895612708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8%"),
    top: hp("59.001512859304086%")
  },
  Text_216_496: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_497: {
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
  View_216_498: {
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
  ImageBackground_216_499: {
    width: wp("8.533333333333333%"),
    height: hp("4.841149773071105%"),
    minHeight: hp("4.841149773071105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_216_514: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("1.8154311649016641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("0.3025718608169541%")
  },
  Text_216_514: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_515: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.5718608169440245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("1.9667170953101305%")
  },
  Text_216_515: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_216_516: {
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
  View_216_517: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("2.5718608169440245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666667%"),
    top: hp("56.42965204236005%")
  },
  Text_216_517: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_518: {
    width: wp("63.733333333333334%"),
    minWidth: wp("63.733333333333334%"),
    minHeight: hp("2.5718608169440245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666667%"),
    top: hp("67.77609682299547%")
  },
  Text_216_518: {
    color: "rgba(224, 57, 57, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_647: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96.36913767019666%"),
    minHeight: hp("96.36913767019666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6308623298033282%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.699999988079071
  },
  View_216_646: {
    width: wp("73.33333333333333%"),
    minWidth: wp("73.33333333333333%"),
    height: hp("54.311649016641454%"),
    minHeight: hp("54.311649016641454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("22.844175491679273%")
  },
  View_216_583: {
    width: wp("70.66666666666667%"),
    minWidth: wp("70.66666666666667%"),
    height: hp("52.04236006051437%"),
    minHeight: hp("52.04236006051437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.269288956127081%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_216_584: {
    width: wp("54.93336181640625%"),
    minWidth: wp("54.93336181640625%"),
    height: hp("29.80332829046899%"),
    minHeight: hp("29.80332829046899%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7333333333333325%"),
    top: hp("4.538577912254162%")
  },
  ImageBackground_216_585: {
    width: wp("1.8062085469563802%"),
    minWidth: wp("1.8062085469563802%"),
    height: hp("1.5507661989705466%"),
    minHeight: hp("1.5507661989705466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.270442708333338%"),
    top: hp("8.489962533093795%")
  },
  ImageBackground_216_586: {
    width: wp("36.22354736328125%"),
    minWidth: wp("36.22354736328125%"),
    height: hp("5.618294789462876%"),
    minHeight: hp("5.618294789462876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.556966145833336%"),
    top: hp("24.18506524205749%")
  },
  ImageBackground_216_587: {
    width: wp("26.61050821940104%"),
    minWidth: wp("26.61050821940104%"),
    height: hp("12.47364223093561%"),
    minHeight: hp("12.47364223093561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.211848958333338%"),
    top: hp("15.980979930975792%")
  },
  View_216_594: {
    width: wp("28.081207275390625%"),
    minWidth: wp("28.081207275390625%"),
    height: hp("10.19084543756205%"),
    minHeight: hp("10.19084543756205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.604622395833335%"),
    top: hp("0%")
  },
  ImageBackground_216_595: {
    width: wp("10.310593668619791%"),
    minWidth: wp("10.310593668619791%"),
    height: hp("4.329693227239888%"),
    minHeight: hp("4.329693227239888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77062174479167%"),
    top: hp("5.861147881996978%")
  },
  ImageBackground_216_596: {
    width: wp("28.081207275390625%"),
    minWidth: wp("28.081207275390625%"),
    height: hp("2.7747825126243972%"),
    minHeight: hp("2.7747825126243972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.311332852685325%")
  },
  ImageBackground_216_597: {
    width: wp("17.96772664388021%"),
    minWidth: wp("17.96772664388021%"),
    height: hp("2.4397473472329745%"),
    minHeight: hp("2.4397473472329745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.751113960854767%")
  },
  ImageBackground_216_598: {
    width: wp("4.351677449544271%"),
    minWidth: wp("4.351677449544271%"),
    height: hp("2.044577750063159%"),
    minHeight: hp("2.044577750063159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.27587890625%"),
    top: hp("7.828382067889564%")
  },
  ImageBackground_216_599: {
    width: wp("16.01174825032552%"),
    minWidth: wp("16.01174825032552%"),
    height: hp("2.4655196381769455%"),
    minHeight: hp("2.4655196381769455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.27587890625%"),
    top: hp("5.448805077534033%")
  },
  ImageBackground_216_600: {
    width: wp("2.4563446044921875%"),
    minWidth: wp("2.4563446044921875%"),
    height: hp("2.577198507565774%"),
    minHeight: hp("2.577198507565774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.63779296875%"),
    top: hp("6.5054427477307115%")
  },
  ImageBackground_216_601: {
    width: wp("18.422605387369792%"),
    minWidth: wp("18.422605387369792%"),
    height: hp("0.9106094285327259%"),
    minHeight: hp("0.9106094285327259%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.671565755208334%"),
    top: hp("6.1016688729198165%")
  },
  ImageBackground_216_602: {
    width: wp("11.068773396809895%"),
    minWidth: wp("11.068773396809895%"),
    height: hp("6.177560572544854%"),
    minHeight: hp("6.177560572544854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9423014322916643%"),
    top: hp("0.3192664996217829%")
  },
  ImageBackground_216_605: {
    width: wp("9.976992797851562%"),
    minWidth: wp("9.976992797851562%"),
    height: hp("6.35941140410038%"),
    minHeight: hp("6.35941140410038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.873811848958333%"),
    top: hp("0%")
  },
  ImageBackground_216_608: {
    width: wp("6.66778818766276%"),
    minWidth: wp("6.66778818766276%"),
    height: hp("6.317894108897799%"),
    minHeight: hp("6.317894108897799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.30847981770833%"),
    top: hp("9.14555952155824%")
  },
  ImageBackground_216_614: {
    width: wp("35.492191569010416%"),
    minWidth: wp("35.492191569010416%"),
    height: hp("8.60739057255224%"),
    minHeight: hp("8.60739057255224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.441194661458336%"),
    top: hp("9.63989811838124%")
  },
  ImageBackground_216_625: {
    width: wp("7.970038859049479%"),
    minWidth: wp("7.970038859049479%"),
    height: hp("7.954395196080749%"),
    minHeight: hp("7.954395196080749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.714680989583332%"),
    top: hp("11.002875023638424%")
  },
  ImageBackground_216_632: {
    width: wp("7.361091613769531%"),
    minWidth: wp("7.361091613769531%"),
    height: hp("6.704861962669015%"),
    minHeight: hp("6.704861962669015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00003255208333641235%"),
    top: hp("10.38894076210287%")
  },
  View_216_637: {
    width: wp("70.66666666666667%"),
    minWidth: wp("70.66666666666667%"),
    height: hp("10.287443267776098%"),
    minHeight: hp("10.287443267776098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.88804841149773%")
  },
  View_216_638: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("5.900151285930408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.6%"),
    top: hp("14.674735249621783%")
  },
  Text_216_638: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_216_639: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("5.900151285930408%"),
    minHeight: hp("5.900151285930408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.93333333333333%"),
    top: hp("0%")
  },
  ImageBackground_216_640: {
    width: wp("3.8260749816894526%"),
    minWidth: wp("3.8260749816894526%"),
    height: hp("2.1301060328865917%"),
    minHeight: hp("2.1301060328865917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666667%"),
    top: hp("2.1180030257186075%")
  },
  ImageBackground_216_641: {
    width: wp("3.8260749816894526%"),
    minWidth: wp("3.8260749816894526%"),
    height: hp("2.1301060328865917%"),
    minHeight: hp("2.1301060328865917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.04059244791667%"),
    top: hp("1.6641452344931942%")
  },
  View_216_642: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    minHeight: hp("3.6308623298033282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.66666666666667%"),
    top: hp("40.09077155824509%")
  },
  Text_216_642: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_643: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("3.3282904689863844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.93333333333333%"),
    top: hp("36.30862329803328%")
  },
  Text_216_643: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_644: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("5.29500756429652%"),
    minHeight: hp("5.29500756429652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.999999999999993%"),
    top: hp("46.74735249621785%"),
    backgroundColor: "rgba(224, 57, 57, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_216_645: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("1.9667170953101363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.133333333333333%"),
    top: hp("48.41149773071104%")
  },
  Text_216_645: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
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
