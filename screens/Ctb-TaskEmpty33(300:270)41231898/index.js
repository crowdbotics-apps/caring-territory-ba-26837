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
      <View style={styles.View_300_271}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_300_272}
        />
        <View style={styles.View_300_273}>
          <View source={{ uri: "null" }} style={styles.View_300_274} />
          <View style={styles.View_300_275}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_300_276}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_300_277}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_300_280}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_300_283}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_300_286}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_300_287}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_300_293}
          />
          <View style={styles.View_300_300}>
            <View style={styles.View_300_301}>
              <Text style={styles.Text_300_301}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_300_302}>
        <View style={styles.View_300_303} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f4e/9be8/38d244db5d2f5137e75bf8fbfb48c459"
          }}
          style={styles.ImageBackground_300_304}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63d6/9941/106f53ab3243538fb94e4c94e93f7cf5"
          }}
          style={styles.ImageBackground_300_305}
        />
      </View>
      <View style={styles.View_300_325} />
      <View style={styles.View_300_326}>
        <View style={styles.View_300_327}>
          <View style={styles.View_300_328}>
            <View style={styles.View_300_329}>
              <Text style={styles.Text_300_329}>History</Text>
            </View>
            <View style={styles.View_300_330}>
              <View style={styles.View_300_331} />
              <View style={styles.View_300_332}>
                <Text style={styles.Text_300_332}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_300_333} />
        </View>
        <View style={styles.View_300_334}>
          <View style={styles.View_300_335}>
            <View style={styles.View_300_336}>
              <Text style={styles.Text_300_336}>New Task</Text>
            </View>
            <View style={styles.View_300_337}>
              <View style={styles.View_300_338} />
              <View style={styles.View_300_339}>
                <Text style={styles.Text_300_339}>0</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_300_340} />
        </View>
        <View style={styles.View_300_341}>
          <View style={styles.View_300_342} />
          <View style={styles.View_300_343} />
          <View source={{ uri: "null" }} style={styles.View_300_344} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31df/63a8/41b70368f179cb3facd9d3b3091db24c"
          }}
          style={styles.ImageBackground_300_345}
        />
      </View>
      <View style={styles.View_300_350}>
        <View style={styles.View_300_352}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
            }}
            style={styles.ImageBackground_300_353}
          />
          <View style={styles.View_300_354}>
            <View source={{ uri: "null" }} style={styles.View_300_355} />
            <View style={styles.View_300_356}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
                }}
                style={styles.ImageBackground_300_357}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
                }}
                style={styles.ImageBackground_300_358}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
                }}
                style={styles.ImageBackground_300_361}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
                }}
                style={styles.ImageBackground_300_364}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
                }}
                style={styles.ImageBackground_300_367}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
              }}
              style={styles.ImageBackground_300_368}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
              }}
              style={styles.ImageBackground_300_374}
            />
            <View style={styles.View_300_381}>
              <View style={styles.View_300_382}>
                <Text style={styles.Text_300_382}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b35/e9f5/27521ed94985a2f0be968d0f03f348f6"
          }}
          style={styles.ImageBackground_300_383}
        />
        <View style={styles.View_300_384}>
          <View style={styles.View_300_385}>
            <Text style={styles.Text_300_385}>Task List</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c93/fc33/7fc531d11cc81295adb55d30823af894"
            }}
            style={styles.ImageBackground_300_386}
          />
        </View>
      </View>
      <View style={styles.View_300_388}>
        <View style={styles.View_300_389} />
        <View style={styles.View_300_390}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2b9/1620/8912a5446171a52d6b1382440d45a48a"
            }}
            style={styles.ImageBackground_300_391}
          />
          <View style={styles.View_300_393}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf39/fc2c/e5c31b774f6bc26423bcfb7b50efebc9"
              }}
              style={styles.ImageBackground_300_394}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b580/5d51/7aff626a6634a6ae5a3bcc494e9c2105"
              }}
              style={styles.ImageBackground_300_395}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aea/6b4e/a0dbce2ad8de4c345287693db4cc544c"
            }}
            style={styles.ImageBackground_300_396}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97bf/cc1c/0748205e22266d0d07972451054e01c1"
            }}
            style={styles.ImageBackground_300_398}
          />
          <View style={styles.View_300_400}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1103/e1ec/71812e15609825ae35c52f7c0ef956b3"
              }}
              style={styles.ImageBackground_300_401}
            />
            <View style={styles.View_300_402}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/856e/e583/12321cb6c7ce8d9493474eed2a3bd518"
                }}
                style={styles.ImageBackground_300_403}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/5224/c100cf6f9e057cd72950e27f9fc411ae"
                }}
                style={styles.ImageBackground_300_404}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_300_405}>
        <View style={styles.View_300_406}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb1f/c844/862e93e469aac7e4757aa24875846dab"
            }}
            style={styles.ImageBackground_300_407}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a5e/e34b/39b4118dda4ddb7b1d8b19d8db85e36b"
            }}
            style={styles.ImageBackground_300_408}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1d6/4662/d7eec66a67523ec713661fe340442776"
            }}
            style={styles.ImageBackground_300_409}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c27/7ff9/4f5dc6b59a543830dc804ad3b2272b4e"
            }}
            style={styles.ImageBackground_300_410}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f28/0835/ba414b1c7f70586c9f65993232f5b28a"
            }}
            style={styles.ImageBackground_300_411}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7863/9d00/fe27a7d6262224b387e7832f7ff0bf8f"
            }}
            style={styles.ImageBackground_300_412}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f5/484b/d6f08c961743caef32e18c99704bb806"
            }}
            style={styles.ImageBackground_300_413}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5421/c985/f38c4439cc6fb288c0acae9464778b43"
            }}
            style={styles.ImageBackground_300_414}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb17/ccfe/4f8933eeb5c081fd6b53e4e125b930f3"
            }}
            style={styles.ImageBackground_300_415}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/731d/7700/d523d9be71159f3a783a029df60b89bb"
            }}
            style={styles.ImageBackground_300_416}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bec4/2a82/002c09f904a39af9996b693b190f7cd6"
            }}
            style={styles.ImageBackground_300_417}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f03/c71b/10e449c6c065f1417621c97f3790937e"
            }}
            style={styles.ImageBackground_300_418}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20f2/245a/17ac6bdb21449384a4825cf038cbc7e3"
            }}
            style={styles.ImageBackground_300_422}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18c9/bc71/fa81c11fe1029514d231f20a0dec49df"
            }}
            style={styles.ImageBackground_300_423}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5641/3832/14543a3786f301c5082132a231d40093"
            }}
            style={styles.ImageBackground_300_424}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e65/8379/40b78c2688523ae99279290fbfd17929"
            }}
            style={styles.ImageBackground_300_425}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54e7/98e9/df9ee9a2930a5b4eb4bf0cca6fc55569"
            }}
            style={styles.ImageBackground_300_426}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9502/771a/5610b5692a9a0ca367821575e689687e"
            }}
            style={styles.ImageBackground_300_427}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6b2/154a/121d3b2bec1a7f16ef9a5771a50d3def"
            }}
            style={styles.ImageBackground_300_428}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ffc/8aa4/d55c5453aea1eb4dbfedef00443744a2"
            }}
            style={styles.ImageBackground_300_429}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d6b/c66e/1b73db20ee8bf9bc37f3106ef59cee7f"
            }}
            style={styles.ImageBackground_300_430}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a976/9696/fb05d2365a4b4669487102ce30fbba75"
            }}
            style={styles.ImageBackground_300_431}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f2b/1a33/cddd1568618bae38917f6663ffa0adff"
            }}
            style={styles.ImageBackground_300_432}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa09/4507/32a56f4fd387f9fe015b9fdc453d508f"
            }}
            style={styles.ImageBackground_300_433}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f837/8193/1cb0c72ed33a096de63a43ce017bf011"
            }}
            style={styles.ImageBackground_300_434}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0825/49b8/f132ae29a7afadaa8bbd3a4b862355c6"
            }}
            style={styles.ImageBackground_300_435}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5e/c5b1/6eef4707eabb5cf43ee9ef903bb5ca9a"
            }}
            style={styles.ImageBackground_300_436}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e370/a313/35aa8719c7c19cf89351f31e7ec13a04"
            }}
            style={styles.ImageBackground_300_437}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/672a/fed2/bff7e49beb84ac7a5dff2886efac4083"
            }}
            style={styles.ImageBackground_300_438}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ddd/99bb/3bd3c6c3a78e9f95024e9395d92d5f64"
            }}
            style={styles.ImageBackground_300_439}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3de/2756/0f9701e1b4b47544e3851b08e66718b4"
            }}
            style={styles.ImageBackground_300_440}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e13/453f/ef1836717e10851badea0c2c5ab994ed"
            }}
            style={styles.ImageBackground_300_441}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc02/b623/559f467057cf146f493c1710598fa7bf"
            }}
            style={styles.ImageBackground_300_442}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cd7/3e28/ec1a13436071ad923a0feb51783ca989"
            }}
            style={styles.ImageBackground_300_443}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6155/5673/e425b83212a64f8fe5735a759e3c7cff"
            }}
            style={styles.ImageBackground_300_444}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd86/5a78/a7d223d1ff1b5ebfdff3a25addabd6a7"
            }}
            style={styles.ImageBackground_300_445}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/368b/f9b1/4baa9fc4a63ab9a1a51465ed19ae43eb"
            }}
            style={styles.ImageBackground_300_446}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92f5/8ecf/02c1e5ca9cbc222c85fcd9fc1ad52fe2"
            }}
            style={styles.ImageBackground_300_447}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cb6/826d/684417b40b36335a1c00927df622502e"
            }}
            style={styles.ImageBackground_300_448}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d135/3ba8/3e36e77e18d690c2c2ed04ce329d7d7a"
            }}
            style={styles.ImageBackground_300_452}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec6a/484c/9cbcb1da4cdbb5379eec5c9852d1d190"
            }}
            style={styles.ImageBackground_300_453}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b085/40d7/0446b0a1b97ae973768e6fd55916f71b"
            }}
            style={styles.ImageBackground_300_454}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfe2/7e4f/eb522b1d2c51b7fc179e7f1bb0f57f41"
            }}
            style={styles.ImageBackground_300_455}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d7/d7a5/bec5e21f433aabd71ff7ce4f90a6d2ac"
            }}
            style={styles.ImageBackground_300_456}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a378/cea9/b963340e245cbffc12f58590a79a69c3"
            }}
            style={styles.ImageBackground_300_457}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ed9/ca6d/bddea614ad017f78c10a896396a8e40b"
            }}
            style={styles.ImageBackground_300_458}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89c9/21ce/53a00ad5c4ae7a34350585a43cf91860"
            }}
            style={styles.ImageBackground_300_459}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed9f/66c7/34ff02707dc11ca0224cbc3539cbca16"
            }}
            style={styles.ImageBackground_300_460}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/679d/6a33/154f6bd02852cd83ebf949f182f7d014"
            }}
            style={styles.ImageBackground_300_461}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6856/3001/57d07341339de8e7c8217a17d882087c"
            }}
            style={styles.ImageBackground_300_462}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f97/9e78/fa414f0be8874724d51c51b371e18fab"
            }}
            style={styles.ImageBackground_300_463}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3733/af32/fa096d7c5559ffbb65f8020904a9a066"
            }}
            style={styles.ImageBackground_300_464}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bf3/c874/5a7c29db1e33fb5bcd0f6703a1d37f50"
            }}
            style={styles.ImageBackground_300_465}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffeb/da61/03084cc31c39de4857355dc0f991bbb1"
            }}
            style={styles.ImageBackground_300_466}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5e/2ada/afd51a9951f68e32698f9be4e650a7c9"
            }}
            style={styles.ImageBackground_300_467}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a45/a957/a6370c85c45b249f3340ae3d316b0638"
            }}
            style={styles.ImageBackground_300_468}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7376/fa5d/1a7728b3246d39c90402ac93735e8bf8"
            }}
            style={styles.ImageBackground_300_469}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2aab/6214/3d68b3975be39795592506b63747caaa"
            }}
            style={styles.ImageBackground_300_470}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c1f/8abd/a141ea53ec770774466bce1cdc544378"
            }}
            style={styles.ImageBackground_300_471}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d29c/8f0e/aa35e90e86d0ba466d2659e9dece6d96"
            }}
            style={styles.ImageBackground_300_472}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85e2/61df/42fdd8a5febf6f2af613c7f95688f3c8"
            }}
            style={styles.ImageBackground_300_473}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9f1/2e92/5d6918249864e750522719a63eb423c9"
            }}
            style={styles.ImageBackground_300_474}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a494/8da0/f61dfc782054bf37d7781c481daf6880"
            }}
            style={styles.ImageBackground_300_475}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e85/1f74/0bcd70b5de212d5bc6997b9940e21be0"
            }}
            style={styles.ImageBackground_300_476}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3151/ff14/f80f146a81ab7c53f197685bf38202f8"
            }}
            style={styles.ImageBackground_300_477}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d5/6d33/eeb77266dc39120fff751b44a30a8aff"
            }}
            style={styles.ImageBackground_300_478}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f4b/5050/f36c81d287f6278ac341aceb96114d6d"
            }}
            style={styles.ImageBackground_300_479}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50cb/10ed/c3a65970656e7ed6679b12c4783e6d3c"
            }}
            style={styles.ImageBackground_300_480}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a8a/9c8a/9e1d3db7917648ae1bc130987745c76b"
            }}
            style={styles.ImageBackground_300_481}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b679/5b20/fead5c8e2626b2a3626d9b2408f04e68"
            }}
            style={styles.ImageBackground_300_482}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8884/d260/a4052ca256a8c340e2b953b6cf738cf1"
            }}
            style={styles.ImageBackground_300_483}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a72/f298/735540b53a806c3e04647933ed8f262f"
            }}
            style={styles.ImageBackground_300_484}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b47c/0893/7a16d2a598480ecd723ed8eb734a7b54"
            }}
            style={styles.ImageBackground_300_485}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa54/5447/abd03e918ea1811f95efa53940727399"
            }}
            style={styles.ImageBackground_300_486}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7573/cf8a/0e8600189bc7e18efa31891279e34ef7"
            }}
            style={styles.ImageBackground_300_487}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c5d/4705/184ecf74376054aab94893fbaaedca3c"
            }}
            style={styles.ImageBackground_300_488}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adec/0d16/526d323fd34d65c003052db3f0d026c5"
            }}
            style={styles.ImageBackground_300_489}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7547/21bc/8d199eeff42c7e5f4ae4dd828befdd37"
            }}
            style={styles.ImageBackground_300_490}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6430/71bc/fd742e880c1bb2ada92b65c9ed8492a9"
            }}
            style={styles.ImageBackground_300_491}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ef8/30b7/cef61e77b81cb4f90d32e5a5288482e1"
            }}
            style={styles.ImageBackground_300_492}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f9b/aea6/f9e44efa6e53f8e16b4c120940513de3"
            }}
            style={styles.ImageBackground_300_493}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c021/ede3/c2d4d64a8ea64d9e88a92f06579769cd"
            }}
            style={styles.ImageBackground_300_494}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce4c/fa01/e8706d1a6542cf9987ef9c90174cfe12"
            }}
            style={styles.ImageBackground_300_495}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce4c/fa01/e8706d1a6542cf9987ef9c90174cfe12"
            }}
            style={styles.ImageBackground_300_496}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce4c/fa01/e8706d1a6542cf9987ef9c90174cfe12"
            }}
            style={styles.ImageBackground_300_497}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce4c/fa01/e8706d1a6542cf9987ef9c90174cfe12"
            }}
            style={styles.ImageBackground_300_498}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea81/3f8f/86b29ef3c58f2c0c911653cccb539d1f"
            }}
            style={styles.ImageBackground_300_499}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0382/383b/93536c3be6c116b209760279054a7cef"
            }}
            style={styles.ImageBackground_300_500}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e12/91a8/aed2c59067f8d890a4db804735b6e6eb"
            }}
            style={styles.ImageBackground_300_501}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/609a/f03f/97c8ac6604450b1dd165724cb6ec6d44"
            }}
            style={styles.ImageBackground_300_502}
          />
        </View>
        <View style={styles.View_300_503}>
          <Text style={styles.Text_300_503}>It&#39;s still empty here!</Text>
        </View>
        <View style={styles.View_300_504}>
          <Text style={styles.Text_300_504}>
            please wait till this heart is fully filled
          </Text>
        </View>
        <View style={styles.View_300_505}>
          <Text style={styles.Text_300_505}>
            or take a shortcut and click the refresh button
          </Text>
        </View>
      </View>
      <View style={styles.View_300_1617}>
        <View style={styles.View_300_1618} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ec4/33c7/f4797b6eb183052f68c77ce7c86fec26"
          }}
          style={styles.ImageBackground_300_1620}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b02/db96/8bb9e9e06f93e71676a8df3734689bda"
          }}
          style={styles.ImageBackground_300_1622}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_300_271: {
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
  ImageBackground_300_272: {
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
  View_300_273: {
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
  View_300_274: {
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
  View_300_275: {
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
  ImageBackground_300_276: {
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
  ImageBackground_300_277: {
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
  ImageBackground_300_280: {
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
  ImageBackground_300_283: {
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
  ImageBackground_300_286: {
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
  ImageBackground_300_287: {
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
  ImageBackground_300_293: {
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
  View_300_300: {
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
  View_300_301: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_300_301: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_300_302: {
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
  View_300_303: {
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
  ImageBackground_300_304: {
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
  ImageBackground_300_305: {
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
  View_300_325: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.697151424287856%"),
    minHeight: hp("5.697151424287856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.244377811094452%")
  },
  View_300_326: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.146926536731634%"),
    minHeight: hp("6.146926536731634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.794602698650674%")
  },
  View_300_327: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("5.697151424287856%"),
    minHeight: hp("5.697151424287856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.86666666666667%"),
    top: hp("0%")
  },
  View_300_328: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("1.6491754122938538%")
  },
  View_300_329: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666663%"),
    top: hp("0%")
  },
  Text_300_329: {
    color: "rgba(221, 221, 221, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_300_330: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("1.9490254872563717%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.29985007496251903%")
  },
  View_300_331: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("1.9490254872563717%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_300_332: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("0.1499250374812604%")
  },
  Text_300_332: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_300_333: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("5.697151424287856%"),
    minHeight: hp("5.697151424287856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_300_334: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("5.697151424287856%"),
    minHeight: hp("5.697151424287856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_300_335: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("1.6491754122938538%")
  },
  View_300_336: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333332%"),
    top: hp("0%")
  },
  Text_300_336: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_300_337: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("1.9490254872563717%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.29985007496251903%")
  },
  View_300_338: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("1.9490254872563717%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_300_339: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666654%"),
    top: hp("0.1499250374812604%")
  },
  Text_300_339: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_300_340: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("5.697151424287856%"),
    minHeight: hp("5.697151424287856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_300_341: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.4497751124437781%"),
    minHeight: hp("0.4497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.697151424287856%")
  },
  View_300_342: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("0.4497751124437781%"),
    minHeight: hp("0.4497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(149, 13, 12, 1)"
  },
  View_300_343: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.86666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_300_344: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.44977511244377766%")
  },
  ImageBackground_300_345: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.29985007496251903%")
  },
  View_300_350: {
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
  View_300_352: {
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
  ImageBackground_300_353: {
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
  View_300_354: {
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
  View_300_355: {
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
  View_300_356: {
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
  ImageBackground_300_357: {
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
  ImageBackground_300_358: {
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
  ImageBackground_300_361: {
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
  ImageBackground_300_364: {
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
  ImageBackground_300_367: {
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
  ImageBackground_300_368: {
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
  ImageBackground_300_374: {
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
  View_300_381: {
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
  View_300_382: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_300_382: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_300_383: {
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
  View_300_384: {
    width: wp("46.44444173177084%"),
    minWidth: wp("46.44444173177084%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.5555664062500005%"),
    top: hp("6.146926536731634%")
  },
  View_300_385: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6444335937500005%"),
    top: hp("0%")
  },
  Text_300_385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_300_386: {
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
  View_300_388: {
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
  View_300_389: {
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
  View_300_390: {
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
  ImageBackground_300_391: {
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
  View_300_393: {
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
  ImageBackground_300_394: {
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
  ImageBackground_300_395: {
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
  ImageBackground_300_396: {
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
  ImageBackground_300_398: {
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
  View_300_400: {
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
  ImageBackground_300_401: {
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
  View_300_402: {
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
  ImageBackground_300_403: {
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
  ImageBackground_300_404: {
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
  View_300_405: {
    width: wp("71.73333333333333%"),
    minWidth: wp("71.73333333333333%"),
    height: hp("37.48125937031484%"),
    minHeight: hp("37.48125937031484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("31.334332833583208%")
  },
  View_300_406: {
    width: wp("71.73333333333333%"),
    minWidth: wp("71.73333333333333%"),
    height: hp("29.685157421289354%"),
    minHeight: hp("29.685157421289354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_300_407: {
    width: wp("25.025732421875002%"),
    height: hp("2.507302714609492%"),
    top: hp("26.602872879966267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.649999999999997%")
  },
  ImageBackground_300_408: {
    width: wp("71.73360188802084%"),
    height: hp("25.393178044766678%"),
    top: hp("0.00025621954647903067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0004231770833342807%")
  },
  ImageBackground_300_409: {
    width: wp("22.187825520833336%"),
    height: hp("25.34556696261244%"),
    top: hp("3.6119269466829103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.835384114583329%")
  },
  ImageBackground_300_410: {
    width: wp("5.571931966145834%"),
    height: hp("1.6897942172712472%"),
    top: hp("13.999103963643176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.411067708333334%")
  },
  ImageBackground_300_411: {
    width: wp("0.8313517252604166%"),
    height: hp("0.6347187276722966%"),
    top: hp("13.999103963643176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.411067708333334%")
  },
  ImageBackground_300_412: {
    width: wp("8.41680704752604%"),
    height: hp("6.445687106702996%"),
    top: hp("8.37907462284483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.71471354166667%")
  },
  ImageBackground_300_413: {
    width: wp("2.2775044759114587%"),
    height: hp("0.6850738754158078%"),
    top: hp("11.851069094359072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.37998046875%")
  },
  ImageBackground_300_414: {
    width: wp("1.1419698079427083%"),
    height: hp("0.6256012008644116%"),
    top: hp("12.038585199587711%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.534700520833333%")
  },
  ImageBackground_300_415: {
    width: wp("0.231207275390625%"),
    height: hp("0.3737270921424054%"),
    top: hp("12.245647195933284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.122363281250003%")
  },
  ImageBackground_300_416: {
    width: wp("13.269099934895834%"),
    height: hp("7.310012291217673%"),
    top: hp("8.421167834051719%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.80641276041667%")
  },
  ImageBackground_300_417: {
    width: wp("1.2914469401041666%"),
    height: hp("0.6968119333887743%"),
    top: hp("4.2336619776049496%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.97509765625%")
  },
  ImageBackground_300_418: {
    width: wp("1.2683430989583333%"),
    height: hp("0.44196785121843374%"),
    top: hp("4.480218386900301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.985774739583334%")
  },
  ImageBackground_300_422: {
    width: wp("1.4509501139322918%"),
    height: hp("1.3848025938202775%"),
    top: hp("7.553462038511999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.174283854166667%")
  },
  ImageBackground_300_423: {
    width: wp("1.4502400716145833%"),
    height: hp("1.3848025938202775%"),
    top: hp("7.553462038511999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.174283854166667%")
  },
  ImageBackground_300_424: {
    width: wp("4.675844319661458%"),
    height: hp("2.609895194309584%"),
    top: hp("5.607620994190409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.698665364583334%")
  },
  ImageBackground_300_425: {
    width: wp("2.103737386067708%"),
    height: hp("0.5434307916232314%"),
    top: hp("5.544847205303601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.86630859375%")
  },
  ImageBackground_300_426: {
    width: wp("6.674151611328124%"),
    height: hp("1.5249729871392428%"),
    top: hp("25.545015578148426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.391048177083334%")
  },
  ImageBackground_300_427: {
    width: wp("6.578297932942709%"),
    height: hp("0.9541455773578055%"),
    top: hp("26.036188448744387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.391048177083334%")
  },
  ImageBackground_300_428: {
    width: wp("7.852913411458333%"),
    height: hp("1.794756155857618%"),
    top: hp("27.044814994846323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.863216145833334%")
  },
  ImageBackground_300_429: {
    width: wp("7.7394775390625%"),
    height: hp("1.1224978331146926%"),
    top: hp("27.62467643131559%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.863216145833334%")
  },
  ImageBackground_300_430: {
    width: wp("2.348640950520833%"),
    height: hp("4.040067521171055%"),
    top: hp("22.26621064467766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.147753906250003%")
  },
  ImageBackground_300_431: {
    width: wp("1.6615966796875%"),
    height: hp("5.193486706963901%"),
    top: hp("16.383519665948274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.23326822916667%")
  },
  ImageBackground_300_432: {
    width: wp("2.348640950520833%"),
    height: hp("4.040067521171055%"),
    top: hp("22.26621064467766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.147753906250003%")
  },
  ImageBackground_300_433: {
    width: wp("1.6615966796875%"),
    height: hp("5.193486706963901%"),
    top: hp("16.383519665948274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.23326822916667%")
  },
  ImageBackground_300_434: {
    width: wp("7.357769775390626%"),
    height: hp("13.710325089530432%"),
    top: hp("14.098700161637932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.468554687500003%")
  },
  ImageBackground_300_435: {
    width: wp("3.714400227864583%"),
    height: hp("1.4937839765420025%"),
    top: hp("5.604985593140928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.660091145833334%")
  },
  ImageBackground_300_436: {
    width: wp("5.080464680989583%"),
    height: hp("2.6901205082883366%"),
    top: hp("4.336406015742131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.545703125000003%")
  },
  ImageBackground_300_437: {
    width: wp("3.792976888020833%"),
    height: hp("2.346463181983227%"),
    top: hp("6.59183347779236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.698665364583334%")
  },
  ImageBackground_300_438: {
    width: wp("8.369141642252604%"),
    height: hp("8.224288277004076%"),
    top: hp("6.580889242878559%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.005696614583336%")
  },
  ImageBackground_300_439: {
    width: wp("0.9485677083333333%"),
    height: hp("0.809279732082201%"),
    top: hp("9.598569855697153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.58958333333333%")
  },
  ImageBackground_300_440: {
    width: wp("1.1368896484375%"),
    height: hp("0.21319296406484256%"),
    top: hp("10.791711078054728%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.758854166666666%")
  },
  ImageBackground_300_441: {
    width: wp("2.1693379720052084%"),
    height: hp("1.9177381066546804%"),
    top: hp("11.524498980978262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.916569010416666%")
  },
  ImageBackground_300_442: {
    width: wp("3.015594482421875%"),
    height: hp("1.7670072358230065%"),
    top: hp("6.654168033170915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.381803385416667%")
  },
  ImageBackground_300_443: {
    width: wp("3.015594482421875%"),
    height: hp("1.7670072358230065%"),
    top: hp("6.579022500468515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.45286458333333%")
  },
  ImageBackground_300_444: {
    width: wp("7.50150146484375%"),
    height: hp("6.587925557789953%"),
    top: hp("8.898907479853822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.744042968749994%")
  },
  ImageBackground_300_445: {
    width: wp("4.830458577473959%"),
    height: hp("2.2287720504371835%"),
    top: hp("4.161554476667913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.540625%")
  },
  ImageBackground_300_446: {
    width: wp("5.49578857421875%"),
    height: hp("2.310771456007836%"),
    top: hp("4.125098095483505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.809016927083334%")
  },
  ImageBackground_300_447: {
    width: wp("2.10333251953125%"),
    height: hp("0.5431190959695934%"),
    top: hp("5.544847205303601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.86630859375%")
  },
  ImageBackground_300_448: {
    width: wp("5.49498291015625%"),
    height: hp("1.6697987981107103%"),
    top: hp("4.771466805659674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.80553385416667%")
  },
  ImageBackground_300_452: {
    width: wp("4.747214762369792%"),
    height: hp("1.2464649137528403%"),
    top: hp("4.336735440873316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.871809895833337%")
  },
  ImageBackground_300_453: {
    width: wp("2.0374471028645833%"),
    height: hp("0.3906575993619401%"),
    top: hp("5.544847205303601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.86630859375%")
  },
  ImageBackground_300_454: {
    width: wp("7.313482666015625%"),
    height: hp("2.1773940262229727%"),
    top: hp("3.720527431596704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.592578124999996%")
  },
  ImageBackground_300_455: {
    width: wp("1.7053304036458334%"),
    height: hp("0.5662703621333864%"),
    top: hp("21.316953827773613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.639746093750006%")
  },
  ImageBackground_300_456: {
    width: wp("0.4606526692708333%"),
    height: hp("0.28547661594007684%"),
    top: hp("21.599930015461016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.391048177083334%")
  },
  ImageBackground_300_457: {
    width: wp("1.4371419270833332%"),
    height: hp("0.7143652599969547%"),
    top: hp("26.850527373032232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.81910807291667%")
  },
  ImageBackground_300_458: {
    width: wp("5.471270751953125%"),
    height: hp("2.7395428567454556%"),
    top: hp("12.581624226949028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.51650390625%")
  },
  ImageBackground_300_459: {
    width: wp("5.471270751953125%"),
    height: hp("2.7395428567454556%"),
    top: hp("12.581624226949028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.51650390625%")
  },
  ImageBackground_300_460: {
    width: wp("6.561260986328126%"),
    height: hp("2.7395428567454556%"),
    top: hp("12.581624226949028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.98779296875%")
  },
  ImageBackground_300_461: {
    width: wp("6.561260986328126%"),
    height: hp("2.7395428567454556%"),
    top: hp("12.581624226949028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.98779296875%")
  },
  ImageBackground_300_462: {
    width: wp("7.633494059244791%"),
    height: hp("1.095817829000539%"),
    top: hp("11.745470038418294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.98779296875%")
  },
  ImageBackground_300_463: {
    width: wp("7.452294921875%"),
    height: hp("1.2303525361342766%"),
    top: hp("11.822116285607198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.535481770833336%")
  },
  ImageBackground_300_464: {
    width: wp("6.6706888834635425%"),
    height: hp("3.986056669541206%"),
    top: hp("13.052482547788603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.51650390625%")
  },
  ImageBackground_300_465: {
    width: wp("5.361846923828125%"),
    height: hp("4.197253637585504%"),
    top: hp("12.841284435907045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.187207031249997%")
  },
  ImageBackground_300_466: {
    width: wp("5.361846923828125%"),
    height: hp("4.197253637585504%"),
    top: hp("12.841284435907045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.187207031249997%")
  },
  ImageBackground_300_467: {
    width: wp("8.651713053385416%"),
    height: hp("1.115360288605697%"),
    top: hp("13.052482547788603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.535481770833336%")
  },
  ImageBackground_300_468: {
    width: wp("8.651713053385416%"),
    height: hp("1.115360288605697%"),
    top: hp("13.052482547788603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.535481770833336%")
  },
  ImageBackground_300_469: {
    width: wp("7.488531494140625%"),
    height: hp("1.2784554683107665%"),
    top: hp("12.841284435907045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.187207031249997%")
  },
  ImageBackground_300_470: {
    width: wp("7.488531494140625%"),
    height: hp("1.2784554683107665%"),
    top: hp("12.841284435907045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.187207031249997%")
  },
  ImageBackground_300_471: {
    width: wp("0.999041748046875%"),
    height: hp("0.905287712589018%"),
    top: hp("15.898752284014247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.49576822916667%")
  },
  ImageBackground_300_472: {
    width: wp("1.1148620605468749%"),
    height: hp("0.5163407218509886%"),
    top: hp("16.38315363802474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.509375%")
  },
  ImageBackground_300_473: {
    width: wp("1.11414794921875%"),
    height: hp("0.2747062442899644%"),
    top: hp("16.545853050037483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.05556640625%")
  },
  ImageBackground_300_474: {
    width: wp("5.485793050130209%"),
    height: hp("1.783051269165222%"),
    top: hp("14.606014863661915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.101302083333337%")
  },
  ImageBackground_300_475: {
    width: wp("5.485788981119791%"),
    height: hp("1.783051269165222%"),
    top: hp("14.530869330959522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.030240885416667%")
  },
  ImageBackground_300_476: {
    width: wp("0.876824951171875%"),
    height: hp("0.628703287516398%"),
    top: hp("14.530869330959522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.027408854166666%")
  },
  ImageBackground_300_477: {
    width: wp("7.9950408935546875%"),
    height: hp("6.5864871824341735%"),
    top: hp("8.74847000327961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.815104166666664%")
  },
  ImageBackground_300_478: {
    width: wp("2.3378580729166667%"),
    height: hp("0.6200604531718515%"),
    top: hp("12.238509651424291%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.213053385416664%")
  },
  ImageBackground_300_479: {
    width: wp("1.2010904947916667%"),
    height: hp("0.5934959766210645%"),
    top: hp("12.426391784576463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.349804687500004%")
  },
  ImageBackground_300_480: {
    width: wp("0.2536702473958333%"),
    height: hp("0.3690476539074213%"),
    top: hp("12.651864985476013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.94205729166667%")
  },
  ImageBackground_300_481: {
    width: wp("2.464375813802083%"),
    height: hp("1.1750806039241122%"),
    top: hp("4.221692864505247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.04368489583333%")
  },
  ImageBackground_300_482: {
    width: wp("2.4581013997395833%"),
    height: hp("1.1750823196800038%"),
    top: hp("9.23254193215892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.247753906250004%")
  },
  ImageBackground_300_483: {
    width: wp("1.93890380859375%"),
    height: hp("1.4289918868080609%"),
    top: hp("6.932422460644684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.4119140625%")
  },
  ImageBackground_300_484: {
    width: wp("3.0719726562500003%"),
    height: hp("0.8920283510588456%"),
    top: hp("8.458905312968515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.26962890625%")
  },
  ImageBackground_300_485: {
    width: wp("3.071968587239583%"),
    height: hp("0.8918127377351364%"),
    top: hp("0.4877688109070455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.48958333333333%")
  },
  ImageBackground_300_486: {
    width: wp("2.862113444010417%"),
    height: hp("0.995363181141363%"),
    top: hp("0.9882021879685148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.985937500000006%")
  },
  ImageBackground_300_487: {
    width: wp("2.532767740885417%"),
    height: hp("1.1240334346376617%"),
    top: hp("1.9939371134745123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.70693359375%")
  },
  ImageBackground_300_488: {
    width: wp("2.5292236328124997%"),
    height: hp("1.122923340575806%"),
    top: hp("13.04867585738381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.270377604166676%")
  },
  ImageBackground_300_489: {
    width: wp("2.5263956705729167%"),
    height: hp("1.122868436387275%"),
    top: hp("14.378272289636431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.38515625%")
  },
  ImageBackground_300_490: {
    width: wp("3.07196044921875%"),
    height: hp("0.8920283510588456%"),
    top: hp("2.82723628420165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.659863281250004%")
  },
  ImageBackground_300_491: {
    width: wp("2.8074015299479167%"),
    height: hp("1.0362639420036075%"),
    top: hp("8.392654258808097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.599902343749996%")
  },
  ImageBackground_300_492: {
    width: wp("3.06031494140625%"),
    height: hp("0.9061616042564655%"),
    top: hp("11.767504919415291%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.69016927083333%")
  },
  ImageBackground_300_493: {
    width: wp("3.0440104166666666%"),
    height: hp("0.9112219402993815%"),
    top: hp("5.558280430097451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.24707031249999%")
  },
  ImageBackground_300_494: {
    width: wp("2.28905029296875%"),
    height: hp("1.2790136608941622%"),
    top: hp("7.646725953429534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.26754557291667%")
  },
  ImageBackground_300_495: {
    width: wp("3.82705078125%"),
    height: hp("0.3419753136127249%"),
    top: hp("26.747197690217387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.752115885416664%")
  },
  ImageBackground_300_496: {
    width: wp("3.8270426432291664%"),
    height: hp("0.34197073826368063%"),
    top: hp("29.343177532327584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.77659505208333%")
  },
  ImageBackground_300_497: {
    width: wp("3.8270477294921874%"),
    height: hp("0.3419684505891586%"),
    top: hp("28.013251674943778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.704589843749998%")
  },
  ImageBackground_300_498: {
    width: wp("3.82705078125%"),
    height: hp("0.34197073826368063%"),
    top: hp("29.17220588924288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.29039713541666%")
  },
  ImageBackground_300_499: {
    width: wp("5.714274088541667%"),
    height: hp("0.5110825019619096%"),
    top: hp("26.918169333302107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.339160156249996%")
  },
  ImageBackground_300_500: {
    width: wp("2.9241617838541667%"),
    height: hp("0.9297177888106727%"),
    top: hp("26.05946782468141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.737890625%")
  },
  ImageBackground_300_501: {
    width: wp("4.062073262532552%"),
    height: hp("1.0906991572573088%"),
    top: hp("27.077574494003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3334309895833325%")
  },
  ImageBackground_300_502: {
    width: wp("4.060344950358073%"),
    height: hp("0.7788342157046477%"),
    top: hp("27.38866162621814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3334309895833325%")
  },
  View_300_503: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    minHeight: hp("3.1484257871064467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("28.935532233883055%")
  },
  Text_300_503: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_300_504: {
    width: wp("52.26666666666666%"),
    minWidth: wp("52.26666666666666%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666665%"),
    top: hp("32.83358320839581%")
  },
  Text_300_504: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_300_505: {
    width: wp("64.8%"),
    minWidth: wp("64.8%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666632%"),
    top: hp("35.382308845577214%")
  },
  Text_300_505: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_300_1617: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6.746626686656672%"),
    minHeight: hp("6.746626686656672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("18.290854572713645%")
  },
  View_300_1618: {
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
  ImageBackground_300_1620: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666667%"),
    top: hp("0.29234650252998406%")
  },
  ImageBackground_300_1622: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666667%"),
    top: hp("1.9490254872563675%")
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
