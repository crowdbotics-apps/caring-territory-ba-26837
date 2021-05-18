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
      <View style={styles.View_55_307}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_55_308}
        />
        <View style={styles.View_55_309}>
          <View source={{ uri: "null" }} style={styles.View_55_310} />
          <View style={styles.View_55_311}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_55_312}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_55_313}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_55_316}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_55_319}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_55_322}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_55_323}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_55_329}
          />
          <View style={styles.View_55_336}>
            <View style={styles.View_55_337}>
              <Text style={styles.Text_55_337}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_55_338}>
        <View style={styles.View_55_339} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f4e/9be8/38d244db5d2f5137e75bf8fbfb48c459"
          }}
          style={styles.ImageBackground_55_342}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63d6/9941/106f53ab3243538fb94e4c94e93f7cf5"
          }}
          style={styles.ImageBackground_55_343}
        />
      </View>
      <View style={styles.View_55_344}>
        <View style={styles.View_55_345}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
            }}
            style={styles.ImageBackground_55_346}
          />
          <View style={styles.View_55_347}>
            <Text style={styles.Text_55_347}>Can’t wait to see you!</Text>
          </View>
          <View style={styles.View_55_348}>
            <Text style={styles.Text_55_348}>5:09 PM</Text>
          </View>
          <View style={styles.View_55_349}>
            <Text style={styles.Text_55_349}>Sandra Adams</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef13/00d7/c609e5d4a51d57f75e1f40f5feaed437"
            }}
            style={styles.ImageBackground_55_350}
          />
        </View>
        <View style={styles.View_55_351}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
            }}
            style={styles.ImageBackground_55_352}
          />
          <View style={styles.View_55_353}>
            <Text style={styles.Text_55_353}>Can’t wait to see you!</Text>
          </View>
          <View style={styles.View_55_354}>
            <Text style={styles.Text_55_354}>5:09 PM</Text>
          </View>
          <View style={styles.View_55_355}>
            <Text style={styles.Text_55_355}>Sandra Adams</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef13/00d7/c609e5d4a51d57f75e1f40f5feaed437"
            }}
            style={styles.ImageBackground_55_356}
          />
        </View>
        <View style={styles.View_55_357}>
          <View style={styles.View_213_428}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/524c/4700/ffce691f3698de1d12f90c4cc0f3757d"
              }}
              style={styles.ImageBackground_213_432}
            />
            <View style={styles.View_213_433} />
            <View style={styles.View_213_434}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1245/e487/cb2f8a46c987db9152c5cad0bb932cfa"
                }}
                style={styles.ImageBackground_213_435}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcad/36cf/d8613bbde1698902aee5d0b90f27bf4f"
                }}
                style={styles.ImageBackground_213_436}
              />
            </View>
            <View style={styles.View_213_438}>
              <Text style={styles.Text_213_438}>
                Let’s play &amp; test your Luck
              </Text>
            </View>
          </View>
          <View style={styles.View_55_1883}>
            <View style={styles.View_55_1885} />
          </View>
          <View style={styles.View_55_1886}>
            <View style={styles.View_55_1887} />
          </View>
        </View>
        <View style={styles.View_55_361}>
          <View style={styles.View_55_362} />
          <View style={styles.View_55_717}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eea/e7ea/d4208ba221699fa00483f558b648bd08"
              }}
              style={styles.ImageBackground_55_718}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5483/114f/ca8a5fa7dbda5b2b2c95b3c571fc0c3d"
              }}
              style={styles.ImageBackground_55_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44d7/0772/d9a34e15a4caaf4de63c0939614803c9"
              }}
              style={styles.ImageBackground_55_720}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/532f/b444/e421a335839826b40451333bfb452a42"
              }}
              style={styles.ImageBackground_55_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1782/b323/0a3cd0064c99ffb109ff9a6772a9f9d7"
              }}
              style={styles.ImageBackground_55_722}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e907/f21c/9487750910d2946eabe3daab8e725fa0"
              }}
              style={styles.ImageBackground_55_723}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50e1/8ade/f1794f19b51e87d3361d3444336cae60"
              }}
              style={styles.ImageBackground_55_724}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c3e/d275/bcff9ee3085542fd2a7a40c1d0285484"
              }}
              style={styles.ImageBackground_55_725}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3064/c627/ba52f63773f01b7e965f3e451e1d4abd"
              }}
              style={styles.ImageBackground_55_726}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b18/45fa/5f48b1dad0d41bed63150e874bb1f3a6"
              }}
              style={styles.ImageBackground_55_727}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ca9/b2c6/662ae0897a8a5043de4432bc1e56fb03"
              }}
              style={styles.ImageBackground_55_728}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16c3/74ac/41a2736afc9d84b3f8c6096adc942668"
              }}
              style={styles.ImageBackground_55_729}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/315c/5ad9/105aef60cdafb35fd702900f4f48ff40"
              }}
              style={styles.ImageBackground_55_730}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e37/26d6/63f5d6adb116c51e5662fc270808ceea"
              }}
              style={styles.ImageBackground_55_731}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8dc/8bf9/73366b991125c3c4a078bc347256b526"
              }}
              style={styles.ImageBackground_55_732}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77e9/de25/265a61b19ce2e6f7a6b6285f97da771e"
              }}
              style={styles.ImageBackground_55_733}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b891/380d/a4f8057745bf9cc958135c5184190281"
              }}
              style={styles.ImageBackground_55_734}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/170a/b197/72c9e101cde3250eb2485318493d6fee"
              }}
              style={styles.ImageBackground_55_735}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e49e/2113/23adac56ac624370dab5fbbf12df061c"
              }}
              style={styles.ImageBackground_55_736}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12fd/e22d/ed5dac9e51a995df404aca403e7f9351"
              }}
              style={styles.ImageBackground_55_737}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd06/7e8b/df10b8bfd8933eed7e7b30ac1aedc919"
              }}
              style={styles.ImageBackground_55_738}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12fd/e22d/ed5dac9e51a995df404aca403e7f9351"
              }}
              style={styles.ImageBackground_55_739}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd06/7e8b/df10b8bfd8933eed7e7b30ac1aedc919"
              }}
              style={styles.ImageBackground_55_740}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f97/ea7c/74bc0713bf969b1ab09578eec699cc3e"
              }}
              style={styles.ImageBackground_55_741}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c2b/93d9/0d7b20a61c2fc46b3ab6068926264122"
              }}
              style={styles.ImageBackground_55_742}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fe0/7838/bfab93f92c6f5b70d927651b25c1b9d8"
              }}
              style={styles.ImageBackground_55_743}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c2b/93d9/0d7b20a61c2fc46b3ab6068926264122"
              }}
              style={styles.ImageBackground_55_744}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d289/4228/4ce52a2db2c22103c63b5dc6f016f47e"
              }}
              style={styles.ImageBackground_55_745}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6dc/4f6d/d2372c6f0ad01f7a181899769912b694"
              }}
              style={styles.ImageBackground_55_746}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6728/8743/3ff745d3d58181b50717a578fd4348a5"
              }}
              style={styles.ImageBackground_55_747}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6dc/4f6d/d2372c6f0ad01f7a181899769912b694"
              }}
              style={styles.ImageBackground_55_748}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/101b/c6a4/7dbf89e514552c8dc4b0529d62adfd0b"
              }}
              style={styles.ImageBackground_55_749}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efa0/0b6b/7b86e22f274c2daccaee81042bdf3133"
              }}
              style={styles.ImageBackground_55_750}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30f7/8c8f/ac43b61b0655fb124771176328f1e1d1"
              }}
              style={styles.ImageBackground_55_751}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd4/d7e0/5a96ee7ec5bd2b90623a77178a1b2714"
              }}
              style={styles.ImageBackground_55_752}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20f1/14e9/e9e2df6a53b95c62d6b4a75aaf67e516"
              }}
              style={styles.ImageBackground_55_753}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80cc/c270/d5548e7fb7c0f868b613b751ca7054bb"
              }}
              style={styles.ImageBackground_55_754}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b24/409e/e0dbc50d57bcc93a5680dddc181ab0b8"
              }}
              style={styles.ImageBackground_55_755}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aa0/1224/3f58188b497b1b7c84620f6b54626b94"
              }}
              style={styles.ImageBackground_55_756}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25a2/8a98/fbfb388135b42c11356546cbf7ab57b7"
              }}
              style={styles.ImageBackground_55_757}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a252/c262/edd49208bf4538949147d466fc9301af"
              }}
              style={styles.ImageBackground_55_758}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e54/927a/5177e8992f593c69e6e73a1a4ee2c9bb"
              }}
              style={styles.ImageBackground_55_759}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e54/927a/5177e8992f593c69e6e73a1a4ee2c9bb"
              }}
              style={styles.ImageBackground_55_760}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e54/927a/5177e8992f593c69e6e73a1a4ee2c9bb"
              }}
              style={styles.ImageBackground_55_761}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e54/927a/5177e8992f593c69e6e73a1a4ee2c9bb"
              }}
              style={styles.ImageBackground_55_762}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5271/7195/415e8f47a3b358dc6575c2fd1cf719b5"
              }}
              style={styles.ImageBackground_55_763}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398c/79df/bd03f27397b5ee4de6ccf435f25a9fd8"
              }}
              style={styles.ImageBackground_55_764}
            />
            <View style={styles.View_55_765}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc6/6b0c/37736ec82a49345d0ac607987a3dd1b2"
                }}
                style={styles.ImageBackground_55_766}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d15/e687/ecc7f24647e0af1a679ad197107fdcf2"
              }}
              style={styles.ImageBackground_55_768}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d15/e687/ecc7f24647e0af1a679ad197107fdcf2"
              }}
              style={styles.ImageBackground_55_769}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fb9/0785/ee6f20c8ace4cc7e3f2be4c8b10aa94d"
              }}
              style={styles.ImageBackground_55_770}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d15/e687/ecc7f24647e0af1a679ad197107fdcf2"
              }}
              style={styles.ImageBackground_55_771}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb06/0b87/23ffab73c5b905c639dfedae97ff5c6b"
              }}
              style={styles.ImageBackground_55_772}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7375/c800/e5e5f504d9f6e45d31ce0f02b1a25a43"
              }}
              style={styles.ImageBackground_55_773}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4328/462e/0d3add9f9cc6fae352b66f513f1578df"
              }}
              style={styles.ImageBackground_55_774}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/800a/aa32/618631531eff42df2970cb359a378890"
              }}
              style={styles.ImageBackground_55_775}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc8f/8387/5daebfb05aa1b88f090a580f333e5c5f"
              }}
              style={styles.ImageBackground_55_776}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab76/e7f1/0e87c71f15bad0b2fcf801bc266967c1"
              }}
              style={styles.ImageBackground_55_777}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f4a/d939/bcf0acec28a5a1657f2a8136734d4800"
              }}
              style={styles.ImageBackground_55_778}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53f8/2b2d/1ea44192a25197759c6ef5e42c7dbe5b"
              }}
              style={styles.ImageBackground_55_779}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/152e/ac68/03777ffbc4c6f5eb7151896e6cb01e31"
              }}
              style={styles.ImageBackground_55_780}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5ed/4219/b9d088e0ee48caf084be0bb1cc9189ce"
              }}
              style={styles.ImageBackground_55_781}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/809d/a6b9/4258fcc5d5dced75e9f1bba23e262857"
              }}
              style={styles.ImageBackground_55_782}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dea/962c/a60ee7224fe1142d97cba81ac479bc9a"
              }}
              style={styles.ImageBackground_55_783}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcb2/2737/6d6e427ce88343cc1c3c10e9b146e374"
              }}
              style={styles.ImageBackground_55_784}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51fe/51f7/e20cd0c14ebdfdcd5dda70b9868717ae"
              }}
              style={styles.ImageBackground_55_785}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbee/b322/5cdd4fc74ab436c1736c7d9fd8f3dd18"
              }}
              style={styles.ImageBackground_55_786}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3744/3a18/eda862d891d330ac7ae5fc730dad5009"
              }}
              style={styles.ImageBackground_55_787}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44b9/d825/955602ab43d1329b88a844d8569ab579"
              }}
              style={styles.ImageBackground_55_788}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51fe/51f7/e20cd0c14ebdfdcd5dda70b9868717ae"
              }}
              style={styles.ImageBackground_55_789}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3744/3a18/eda862d891d330ac7ae5fc730dad5009"
              }}
              style={styles.ImageBackground_55_790}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99b5/2698/79f5f61311fa43dd60e54e29fe71443c"
              }}
              style={styles.ImageBackground_55_791}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e649/5d82/98567d908c606617fc736bb5a1724e9b"
              }}
              style={styles.ImageBackground_55_792}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/791a/7872/87e034e27a4fd22790efd164e5a5a54d"
              }}
              style={styles.ImageBackground_55_793}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3365/5e41/f2c96dd27a0133c7f2a23eb7f0867ad1"
              }}
              style={styles.ImageBackground_55_794}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40d7/7cde/9e339b42a1ffd50eba75833d441ef11c"
              }}
              style={styles.ImageBackground_55_795}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8824/3702/e736db186c800339e53bb87b4f3897d1"
              }}
              style={styles.ImageBackground_55_796}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_797}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f72/423b/b28e5471ca5ee9777155fd8511bce589"
              }}
              style={styles.ImageBackground_55_798}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a345/d929/aad02bf10100c1cbe26009005172b793"
              }}
              style={styles.ImageBackground_55_799}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ef8/ddde/e7ab5cf1b9282aae71dfed76fe2dc242"
              }}
              style={styles.ImageBackground_55_800}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_801}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f0/b2d6/0c4c246de187c0250b65447a1916db93"
              }}
              style={styles.ImageBackground_55_802}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca88/6dc5/fb5675400f922d263b5ce8195fb00024"
              }}
              style={styles.ImageBackground_55_803}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7185/86ae/e86a3c3a4a78b396d75300aeb0f54c0c"
              }}
              style={styles.ImageBackground_55_804}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad8/c0eb/8f5e2980190068a7a3664741d93d7cea"
              }}
              style={styles.ImageBackground_55_805}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a07a/e8c1/d211f54368381a9b56ffcb17ed1b539c"
              }}
              style={styles.ImageBackground_55_806}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc69/b739/e5766ab61ce4e946e24c2b2b762a260b"
              }}
              style={styles.ImageBackground_55_807}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/780b/5615/d5ea6087c41b06bacf1b098b7a175db4"
              }}
              style={styles.ImageBackground_55_808}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a643/ea4e/1547581c82749d769890d90092d742e6"
              }}
              style={styles.ImageBackground_55_809}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/175f/44c1/9bc359edb7f05d8559cb84538549547c"
              }}
              style={styles.ImageBackground_55_810}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e61/a5e9/a8f654071d05c809b6aa7416730f7355"
              }}
              style={styles.ImageBackground_55_811}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/255e/bc0f/b95435f362794e1b94787dd27753494f"
              }}
              style={styles.ImageBackground_55_812}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36da/4f58/b8958e2ac212bf306346f5a127622905"
              }}
              style={styles.ImageBackground_55_813}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eaa/bd90/3e6e510f9c77de4778a65e7d72451673"
              }}
              style={styles.ImageBackground_55_814}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eaa/bd90/3e6e510f9c77de4778a65e7d72451673"
              }}
              style={styles.ImageBackground_55_815}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dd3/973b/e6043fa1d81decb27330c8d158fba30f"
              }}
              style={styles.ImageBackground_55_816}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3df5/fbad/1dd430df1415ddc891c48b0dc62fb448"
              }}
              style={styles.ImageBackground_55_817}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/565f/ece3/f5e9fd6802fd953d886a1ef9874b6960"
              }}
              style={styles.ImageBackground_55_818}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/315a/de66/0490aeef60ba909e84f1e3b13b4ca49b"
              }}
              style={styles.ImageBackground_55_819}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45cc/ce4d/c150262c1f950b1d30dbca32415268c9"
              }}
              style={styles.ImageBackground_55_820}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaad/245d/66e89a9efa1e583213c0e30b2f2a9a82"
              }}
              style={styles.ImageBackground_55_821}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/944f/c83a/06cbfbbb2d6713cd470c84d6972bc57c"
              }}
              style={styles.ImageBackground_55_822}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a14/10ff/77be6640bae3bdd6bcdc7bc875e03e3b"
              }}
              style={styles.ImageBackground_55_824}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f624/c168/c8e011ab8329c29b77e85fbcaa3a4158"
              }}
              style={styles.ImageBackground_55_825}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d955/49b9/28ed2e022eef4ad0bfc67e376f5bf81c"
              }}
              style={styles.ImageBackground_55_826}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c79/c097/5990d7dc6799a0da5f8698d112a4cf9b"
              }}
              style={styles.ImageBackground_55_827}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f4a/d939/bcf0acec28a5a1657f2a8136734d4800"
              }}
              style={styles.ImageBackground_55_828}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4165/67eb/ac865567a48aae618a0905a887a098e4"
              }}
              style={styles.ImageBackground_55_829}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58d3/7f05/e286ef652f52b7b97e3e2da63e7c8fc4"
              }}
              style={styles.ImageBackground_55_830}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08ed/ef6e/5c7366801927b3f772da1dd7fb80cef9"
              }}
              style={styles.ImageBackground_55_831}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a66/e536/f194a1fbd67e6a53ce134b40cc474b2c"
              }}
              style={styles.ImageBackground_55_832}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_55_833}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a66/e536/f194a1fbd67e6a53ce134b40cc474b2c"
              }}
              style={styles.ImageBackground_55_834}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_55_835}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf74/c02f/e6dd0fc31df6d9f2b59649e7f5fea41e"
              }}
              style={styles.ImageBackground_55_836}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df2d/2cd3/6361d6648d524af4c40e9d1394361027"
              }}
              style={styles.ImageBackground_55_838}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39b0/134c/dea121cef71adcec3213ef900fb00236"
              }}
              style={styles.ImageBackground_55_839}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b18/0a82/abf3524995ecd923aed256faeeeb3a9c"
              }}
              style={styles.ImageBackground_55_840}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7000/b24a/bb8e8304e22f08bf72c4e6fddbf302eb"
              }}
              style={styles.ImageBackground_55_841}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/478c/d24a/89a1b94f13325d8857d6d0a65d5211ca"
              }}
              style={styles.ImageBackground_55_842}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23f7/39cf/434994e22213de7e0fa2744f0022201d"
              }}
              style={styles.ImageBackground_55_843}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c62/82ee/b3fa2b1a3f24cba8e468f1a4fbb9cf34"
              }}
              style={styles.ImageBackground_55_844}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59f0/1d23/d17086fd2645c6dbd934baf854f70881"
              }}
              style={styles.ImageBackground_55_845}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54a1/19c7/dcd4b20b7cb0698fb280e82d1053c2e0"
              }}
              style={styles.ImageBackground_55_846}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad9/797c/efede4c90f59ef0df52a99a9f9250e6e"
              }}
              style={styles.ImageBackground_55_847}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34aa/1f7b/f811a79eb89f281fc4465cac15880c7e"
              }}
              style={styles.ImageBackground_55_848}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/065b/fe77/e7ca095b47f310b31097fd83fd494a0a"
              }}
              style={styles.ImageBackground_55_849}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f90/ec28/48c25137de56ba90914ce591842497ba"
              }}
              style={styles.ImageBackground_55_850}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83e9/5c05/e5772d231ab642716e44998aa5bed909"
              }}
              style={styles.ImageBackground_55_851}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc97/e0dc/f0fb62c618f90285bdb6102daf294c95"
              }}
              style={styles.ImageBackground_55_852}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d63/3275/428c221a933292d583bec691fc053c3e"
              }}
              style={styles.ImageBackground_55_853}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08b0/fe9e/afc7a51ec5dd418a6a3e22931c428e23"
              }}
              style={styles.ImageBackground_55_854}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08b0/fe9e/afc7a51ec5dd418a6a3e22931c428e23"
              }}
              style={styles.ImageBackground_55_855}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20ae/662b/9973dad1444408cc8747a1f23c57fc44"
              }}
              style={styles.ImageBackground_55_856}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09ee/4f8e/3598233539bc327ff5911354f5d97aad"
              }}
              style={styles.ImageBackground_55_857}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a3/49d4/913e5b6b8d1938ec24091c68e75f0bdd"
              }}
              style={styles.ImageBackground_55_858}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4381/3ee0/97a1dc8f4d422899194b9daace18495f"
              }}
              style={styles.ImageBackground_55_859}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6515/5b8d/ed792be8a6d70c38701c7f3016716ce4"
              }}
              style={styles.ImageBackground_55_860}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6edd/581a/0757b70d273cfbdd0729c436456ddc34"
              }}
              style={styles.ImageBackground_55_861}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfdd/ad04/47ee64d303e0886d8ae796222b5b8270"
              }}
              style={styles.ImageBackground_55_862}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1672/3770/d3c4dfcb6bf27f928a8dbe794d61db57"
              }}
              style={styles.ImageBackground_55_863}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/356b/550f/829a15dd5ea144b55f0a4b4e57c8d6c2"
              }}
              style={styles.ImageBackground_55_864}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa86/76a6/586620d25f0676c024e914387a930015"
              }}
              style={styles.ImageBackground_55_865}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2599/a555/99b5d8d196faa07a5da0213211f80494"
              }}
              style={styles.ImageBackground_55_866}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d7d/a6cc/b547b72c3f602902724440286d7cda46"
              }}
              style={styles.ImageBackground_55_867}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29b2/5880/a93a4ba4da21dc6e8201e9b70b54be95"
              }}
              style={styles.ImageBackground_55_868}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2d7/dffc/3142f7c2739c3e10d79e90bb442a676c"
              }}
              style={styles.ImageBackground_55_869}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/891d/92a7/3a23fc24fb1eda3b60abf78272cf0271"
              }}
              style={styles.ImageBackground_55_870}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/891d/92a7/3a23fc24fb1eda3b60abf78272cf0271"
              }}
              style={styles.ImageBackground_55_871}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/891d/92a7/3a23fc24fb1eda3b60abf78272cf0271"
              }}
              style={styles.ImageBackground_55_872}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/891d/92a7/3a23fc24fb1eda3b60abf78272cf0271"
              }}
              style={styles.ImageBackground_55_873}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/891d/92a7/3a23fc24fb1eda3b60abf78272cf0271"
              }}
              style={styles.ImageBackground_55_874}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/891d/92a7/3a23fc24fb1eda3b60abf78272cf0271"
              }}
              style={styles.ImageBackground_55_875}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f45/1329/5ccba4ca85aba941951fe49f3cb0e01e"
              }}
              style={styles.ImageBackground_55_876}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1471/f9d1/9f3bad8b36fd823bda42d171e1781c81"
              }}
              style={styles.ImageBackground_55_877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a187/da4e/97e5edfe405e9b50f55d0a7461d7aedf"
              }}
              style={styles.ImageBackground_55_878}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d733/ee94/062868b3d0a9b5bd8d95dd3c13dc73d0"
              }}
              style={styles.ImageBackground_55_879}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d81/8ba9/3a44b8967047eeb9db7987aa572efab6"
              }}
              style={styles.ImageBackground_55_880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f68/26d5/dadb89417abdff0dfea4cf88d4f546f8"
              }}
              style={styles.ImageBackground_55_881}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d94/1e1a/c1b4d5394b9c1bd3ec4570bd54a839d0"
              }}
              style={styles.ImageBackground_55_882}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09a1/cd9f/056a33dd96841bcdf9a771520139b9fb"
              }}
              style={styles.ImageBackground_55_883}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09a1/cd9f/056a33dd96841bcdf9a771520139b9fb"
              }}
              style={styles.ImageBackground_55_884}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87d4/cc2f/1e3d750f2c334a5260d4d03f83134902"
              }}
              style={styles.ImageBackground_55_885}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09a1/cd9f/056a33dd96841bcdf9a771520139b9fb"
              }}
              style={styles.ImageBackground_55_886}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ed9/a17e/da0b739dd18ad5e806d3d962920a1e0b"
              }}
              style={styles.ImageBackground_55_887}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6adb/f50f/1a8b120cddf869e9012eab6c11ed2720"
              }}
              style={styles.ImageBackground_55_888}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6adb/f50f/1a8b120cddf869e9012eab6c11ed2720"
              }}
              style={styles.ImageBackground_55_889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6adb/f50f/1a8b120cddf869e9012eab6c11ed2720"
              }}
              style={styles.ImageBackground_55_890}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7099/af6b/f2679b4dd79ff3b55c272d621b881ff0"
              }}
              style={styles.ImageBackground_55_891}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9e9/148d/a668aa97166907ffae9d39fc4343aff7"
              }}
              style={styles.ImageBackground_55_892}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3272/ccde/e7fe969f20ec7b7802b26d3ac877572b"
              }}
              style={styles.ImageBackground_55_893}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd2c/6285/5d216771703f3b1e8c1d0c4166e5113b"
              }}
              style={styles.ImageBackground_55_894}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c304/bf02/58880741a01c790a0a9f7ac699ff3321"
              }}
              style={styles.ImageBackground_55_895}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d1/ee06/2a161753aef0a8fbfc550134a3f5ce00"
              }}
              style={styles.ImageBackground_55_896}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4673/11be/93e8bf224fc479e88c3d8a3a8427fc71"
              }}
              style={styles.ImageBackground_55_898}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2062/8b05/75485772fe2c4981df89360e45cc82f5"
              }}
              style={styles.ImageBackground_55_899}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1375/6c19/4aeeb459dbd3c311f6e8f76143862773"
              }}
              style={styles.ImageBackground_55_900}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6350/a619/21fa590ea4eff475419c4f885aa5ef5d"
              }}
              style={styles.ImageBackground_55_901}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c6c/9148/167ac4499c48b63c885fc6ac7fab9535"
              }}
              style={styles.ImageBackground_55_902}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f31/5b33/00816785faca5f7a4355b7035609a4c5"
              }}
              style={styles.ImageBackground_55_903}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b27d/2b97/ab48b102b51cf851d10550d4b9c3a8e5"
              }}
              style={styles.ImageBackground_55_904}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b36/5589/4ee6de58089e26d98371515c3e1ee458"
              }}
              style={styles.ImageBackground_55_905}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15b1/25d0/11ec9bbc3d5a9d6a482ce4ebaa565f86"
              }}
              style={styles.ImageBackground_55_906}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07ea/a13f/c1ad6bc5f0c115d048fabfb77da38521"
              }}
              style={styles.ImageBackground_55_907}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eadc/d431/fb104dd40de3cc5af28b264d39a07b66"
              }}
              style={styles.ImageBackground_55_908}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24ee/2c3d/cb5ddcf64244290feb2acbf36a5578e3"
              }}
              style={styles.ImageBackground_55_909}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8681/42ba/845a7d42f6c08cd336162d2ca8ece4b1"
              }}
              style={styles.ImageBackground_55_910}
            />
            <View style={styles.View_55_911}>
              <View style={styles.View_55_912}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ae8/a4fb/3dabcbca75d795077bb0dcc0e3963e73"
                  }}
                  style={styles.ImageBackground_55_913}
                />
              </View>
            </View>
            <View style={styles.View_55_915}>
              <View style={styles.View_55_916}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b85/c791/b0f982ad9030e5db2abbf501327a3cd2"
                  }}
                  style={styles.ImageBackground_55_917}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a21e/bd6f/3fe460ceac2f00bff47b1b1cfb230be8"
              }}
              style={styles.ImageBackground_55_919}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef8f/9132/c4b63948bea3c6387e7c174ecbffab59"
              }}
              style={styles.ImageBackground_55_920}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29cc/d4dd/dee02892c3708f844bb50ecccca321ea"
              }}
              style={styles.ImageBackground_55_921}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fb2/e7df/0f24af15043865d0186347b705e3a86d"
              }}
              style={styles.ImageBackground_55_922}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23f7/39cf/434994e22213de7e0fa2744f0022201d"
              }}
              style={styles.ImageBackground_55_923}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a361/e6c0/b5f745007155bd5b53d11bcfeca960df"
              }}
              style={styles.ImageBackground_55_924}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c921/e2a8/dfe591da0b5b942475e472d600031312"
              }}
              style={styles.ImageBackground_55_925}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94bf/83d7/e82aa82bb20f04cf5aa6a135415cca03"
              }}
              style={styles.ImageBackground_55_926}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b35/ff3e/94d8b27fc5c126764abd7c4d8ae221e4"
              }}
              style={styles.ImageBackground_55_927}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a66/e536/f194a1fbd67e6a53ce134b40cc474b2c"
              }}
              style={styles.ImageBackground_55_928}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_55_929}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a66/e536/f194a1fbd67e6a53ce134b40cc474b2c"
              }}
              style={styles.ImageBackground_55_930}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_55_931}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21fe/f214/804878e120f3cd66c373fe4f90a69bb0"
              }}
              style={styles.ImageBackground_55_932}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e3e/9116/75f2922e164efc60ebeb855d90f6d4e3"
              }}
              style={styles.ImageBackground_55_934}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adcf/3124/227e4ebd7d3c893bf0c2c7d9688fcaab"
              }}
              style={styles.ImageBackground_55_935}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c261/0863/c089e0a8ee01fed67ffdb734074ca29f"
              }}
              style={styles.ImageBackground_55_936}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b6d/fe0c/339c1c4d71c76d5e2d1a16d31a1e26df"
              }}
              style={styles.ImageBackground_55_937}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6cc/9a9f/a01d55ee1364794a59c0324a1e7b9030"
              }}
              style={styles.ImageBackground_55_938}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae4e/d421/96a21c23c443bc072e96640d621b5332"
              }}
              style={styles.ImageBackground_55_939}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/821a/c40e/72a3d66313514be6a0a689c43a0a7a3b"
              }}
              style={styles.ImageBackground_55_940}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae4e/d421/96a21c23c443bc072e96640d621b5332"
              }}
              style={styles.ImageBackground_55_941}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cab/ab53/917ef00223f6571e68aebe74b39c6f59"
              }}
              style={styles.ImageBackground_55_942}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0212/f104/5eeb29c60c0d78a922c727075c9028f8"
              }}
              style={styles.ImageBackground_55_943}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49e3/8b36/854e2d575b9f10c301bc5b683372fe54"
              }}
              style={styles.ImageBackground_55_944}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbc7/2223/32454b4ce07a6b8540c98e3d2a4b61e9"
              }}
              style={styles.ImageBackground_55_945}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/698d/369c/6e028331457236d1deebd407e9af2034"
              }}
              style={styles.ImageBackground_55_946}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/817f/7862/4407d7cb45ddbf0a3414cfbf596f57bb"
              }}
              style={styles.ImageBackground_55_947}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eae5/9602/986942c1791e95c3d76ff6bf0f085304"
              }}
              style={styles.ImageBackground_55_948}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d1/ee06/2a161753aef0a8fbfc550134a3f5ce00"
              }}
              style={styles.ImageBackground_55_949}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9388/c67b/f5fba6cc8b8daf5f4cedd763dbaa72aa"
              }}
              style={styles.ImageBackground_55_951}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c04b/0978/b7bdb3ad3e76e302ef7e0ff0d68c63ff"
              }}
              style={styles.ImageBackground_55_953}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae7/c156/2435dba5186952257f7250bfcfea48ad"
              }}
              style={styles.ImageBackground_55_954}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b55f/ae22/487274f2125d560ad37391a9dacf1c91"
              }}
              style={styles.ImageBackground_55_955}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2eef/d9e8/d284869f64738a7b308864631bc25f65"
              }}
              style={styles.ImageBackground_55_956}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5acd/4e3e/34d0af1970f8ec0674f82d1123c56914"
              }}
              style={styles.ImageBackground_55_957}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5acd/4e3e/34d0af1970f8ec0674f82d1123c56914"
              }}
              style={styles.ImageBackground_55_959}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5acd/4e3e/34d0af1970f8ec0674f82d1123c56914"
              }}
              style={styles.ImageBackground_55_961}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b71/d930/7ad194e5710d019dd235444961a1bd64"
              }}
              style={styles.ImageBackground_55_963}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/788c/6eb7/a9a708c7956b4a6da47f9a08e6db1bec"
              }}
              style={styles.ImageBackground_55_964}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/915d/39c5/7cd55cfe20093dc4ba05f3571b55762a"
              }}
              style={styles.ImageBackground_55_965}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3064/5297/cfeaf497fb840465018577cdd947f1ee"
              }}
              style={styles.ImageBackground_55_966}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89c8/bcda/56654ab3d7ae97cdcca531af214d0708"
              }}
              style={styles.ImageBackground_55_967}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e56/d2f6/1996a9a5a6d882a04e44435adbcb76e3"
              }}
              style={styles.ImageBackground_55_968}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f432/4b2b/48611ab5ce5c6adb108053b63a687c60"
              }}
              style={styles.ImageBackground_55_969}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e51d/424c/c32fc43f264eead00009458e732c0208"
              }}
              style={styles.ImageBackground_55_970}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2abc/f717/aed20910d5d8b960eb7b28df8376919a"
              }}
              style={styles.ImageBackground_55_971}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8772/bc15/0e9bc355b830c04d3c81946e7b93b4df"
              }}
              style={styles.ImageBackground_55_972}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f70f/1752/8737b2f0e0153ef331c461b9d393f910"
              }}
              style={styles.ImageBackground_55_973}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a8c/889b/28489073421f5c9e10a4aba0a2a4c16f"
              }}
              style={styles.ImageBackground_55_974}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9617/e94b/1ac5c0d7fe07ba1d050cbfb2ab6d1c91"
              }}
              style={styles.ImageBackground_55_975}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a41a/3c4b/832ac354a96148cbce569f3332b468f2"
              }}
              style={styles.ImageBackground_55_976}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7223/9c2c/2dfb0ec22cf4466cb868e75ed6c3e086"
              }}
              style={styles.ImageBackground_55_977}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8604/1560/29a799ee04baab19e09b181a88c604da"
              }}
              style={styles.ImageBackground_55_978}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8604/1560/29a799ee04baab19e09b181a88c604da"
              }}
              style={styles.ImageBackground_55_979}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/064f/5b92/2853b0cbcc734c5ad1a2fc729a4999ee"
              }}
              style={styles.ImageBackground_55_980}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44b0/990e/890599bd83aea3b184d753a6aede3af8"
              }}
              style={styles.ImageBackground_55_981}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc15/5545/e49487969af550b51d70bc46eba2aa70"
              }}
              style={styles.ImageBackground_55_982}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce7f/2e01/43ff12955eea5ce8be093ac299005772"
              }}
              style={styles.ImageBackground_55_983}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce7f/2e01/43ff12955eea5ce8be093ac299005772"
              }}
              style={styles.ImageBackground_55_984}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a2f/280e/0fc044e02db8a3cb162831cedd343a3c"
              }}
              style={styles.ImageBackground_55_985}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a385/5352/d47577832d86f52a0977e00f520a887e"
              }}
              style={styles.ImageBackground_55_986}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e373/3cfc/6c1ca4c7ae40ff19099b63407c4ac9e5"
              }}
              style={styles.ImageBackground_55_987}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8f0/0cbd/8cf42632beb6c5f515a7e74c59c9181d"
              }}
              style={styles.ImageBackground_55_988}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8f0/0cbd/8cf42632beb6c5f515a7e74c59c9181d"
              }}
              style={styles.ImageBackground_55_989}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28c3/4037/f6f68e8bfb9e9ac6d3a3ccaab3bc56fa"
              }}
              style={styles.ImageBackground_55_990}
            />
          </View>
          <View style={styles.View_449_14}>
            <Text style={styles.Text_449_14}>
              Anda dapat melakukan kunjungan ke rumah pelanggan yang memiliki
              tunggakan tagihan untuk dilakukan proses pembayaran
            </Text>
          </View>
          <View style={styles.View_449_15}>
            <Text style={styles.Text_449_15}>
              Proses Penagihan Menjadi Lebih Mudah
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f3f/f7fd/23cda6977e71e99692a69a369363eab2"
            }}
            style={styles.ImageBackground_55_669}
          />
        </View>
        <View style={styles.View_55_673}>
          <View style={styles.View_55_674} />
          <View style={styles.View_55_675}>
            <Text style={styles.Text_55_675}>You’ve got new Order !</Text>
          </View>
          <View style={styles.View_55_676}>
            <Text style={styles.Text_55_676}>Check Now &gt;&gt;</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125f/2591/b96bb0e06e7074a66d5cd4c73826c0f8"
            }}
            style={styles.ImageBackground_55_677}
          />
        </View>
      </View>
      <View style={styles.View_55_686}>
        <Text style={styles.Text_55_686}>Recent Activity</Text>
      </View>
      <View style={styles.View_55_688}>
        <View style={styles.View_55_689} />
        <View style={styles.View_55_690}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046c/059c/9541d9159f8c6f69cfb7b2236d130b14"
            }}
            style={styles.ImageBackground_55_691}
          />
          <View style={styles.View_55_693}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf39/fc2c/e5c31b774f6bc26423bcfb7b50efebc9"
              }}
              style={styles.ImageBackground_55_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b580/5d51/7aff626a6634a6ae5a3bcc494e9c2105"
              }}
              style={styles.ImageBackground_55_695}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f74a/31c9/c62f940257c89b9b595980f1c170775a"
            }}
            style={styles.ImageBackground_55_696}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97bf/cc1c/0748205e22266d0d07972451054e01c1"
            }}
            style={styles.ImageBackground_55_698}
          />
          <View style={styles.View_55_700}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1103/e1ec/71812e15609825ae35c52f7c0ef956b3"
              }}
              style={styles.ImageBackground_55_701}
            />
            <View style={styles.View_55_702}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/856e/e583/12321cb6c7ce8d9493474eed2a3bd518"
                }}
                style={styles.ImageBackground_55_703}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/5224/c100cf6f9e057cd72950e27f9fc411ae"
                }}
                style={styles.ImageBackground_55_704}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_55_705}>
        <View style={styles.View_55_706}>
          <View style={styles.View_55_707}>
            <View style={styles.View_55_708}>
              <Text style={styles.Text_55_708}>Hello,</Text>
            </View>
          </View>
          <View style={styles.View_55_709}>
            <View style={styles.View_55_710}>
              <Text style={styles.Text_55_710}>Agent Number One</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_55_711}>
          <View style={styles.View_55_712}>
            <View style={styles.View_55_713} />
            <View style={styles.View_55_714} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28e8/469f/66492e5ceeb1a73ba2047de3f7b2c1e9"
              }}
              style={styles.ImageBackground_55_715}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31f6/a06e/809fa1ee608238e2f47dc43df67ba281"
          }}
          style={styles.ImageBackground_55_716}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_55_307: {
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
  ImageBackground_55_308: {
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
  View_55_309: {
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
  View_55_310: {
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
  View_55_311: {
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
  ImageBackground_55_312: {
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
  ImageBackground_55_313: {
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
  ImageBackground_55_316: {
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
  ImageBackground_55_319: {
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
  ImageBackground_55_322: {
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
  ImageBackground_55_323: {
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
  ImageBackground_55_329: {
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
  View_55_336: {
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
  View_55_337: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_55_337: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_338: {
    width: wp("121.64401041666666%"),
    minWidth: wp("121.64401041666666%"),
    height: hp("96.40179910044976%"),
    minHeight: hp("96.40179910044976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-21.644010416666667%"),
    top: hp("3.598200899550225%")
  },
  View_55_339: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96.40179910044976%"),
    minHeight: hp("96.40179910044976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.644010416666667%"),
    top: hp("0%")
  },
  ImageBackground_55_342: {
    width: wp("41.73666178385417%"),
    minWidth: wp("41.73666178385417%"),
    height: hp("22.038980509745127%"),
    minHeight: hp("22.038980509745127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.644010416666667%"),
    top: hp("74.36281859070465%")
  },
  ImageBackground_55_343: {
    width: wp("24.70128987630208%"),
    minWidth: wp("24.70128987630208%"),
    height: hp("13.043478260869565%"),
    minHeight: hp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.644010416666667%"),
    top: hp("83.35832083958022%")
  },
  View_55_344: {
    width: wp("96.26666666666667%"),
    minWidth: wp("96.26666666666667%"),
    height: hp("72.56371814092954%"),
    minHeight: hp("72.56371814092954%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("19.1904047976012%")
  },
  View_55_345: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.874062968515744%")
  },
  ImageBackground_55_346: {
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
  View_55_347: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("4.647676161919037%")
  },
  Text_55_347: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_348: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.33333333333333%"),
    top: hp("2.2488755622188847%")
  },
  Text_55_348: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_349: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("1.199400299850069%")
  },
  Text_55_349: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_55_350: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.199999999999999%"),
    top: hp("1.7991004497750964%")
  },
  View_55_351: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.96851574212894%")
  },
  ImageBackground_55_352: {
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
  View_55_353: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("4.647676161919023%")
  },
  Text_55_353: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_354: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.33333333333333%"),
    top: hp("2.2488755622188847%")
  },
  Text_55_354: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_355: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("1.199400299850069%")
  },
  Text_55_355: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_55_356: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.199999999999999%"),
    top: hp("1.7991004497750964%")
  },
  View_55_357: {
    width: wp("96.26666666666667%"),
    minWidth: wp("96.26666666666667%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.8815592203898%")
  },
  View_213_428: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_213_432: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_213_433: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_213_434: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    height: hp("4.3478260869565215%"),
    minHeight: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("0.7496251874062949%")
  },
  ImageBackground_213_435: {
    flexGrow: 1,
    width: wp("13.77762451171875%"),
    height: hp("3.5567036275563386%"),
    minHeight: hp("3.5567036275563386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.489038085937498%"),
    top: hp("0.7911327539355355%")
  },
  ImageBackground_213_436: {
    width: wp("8.391234334309896%"),
    height: hp("4.2193202600665005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_213_438: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9999999999999996%"),
    top: hp("5.2473763118440715%")
  },
  Text_213_438: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_1883: {
    width: wp("38.13333333333333%"),
    minWidth: wp("38.13333333333333%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_55_1885: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_55_1886: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    top: hp("0%")
  },
  View_55_1887: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 5
  },
  View_55_361: {
    width: wp("92.80000000000001%"),
    minWidth: wp("92.80000000000001%"),
    height: hp("23.238380809595203%"),
    minHeight: hp("23.238380809595203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.84407796101949%")
  },
  View_55_362: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("23.238380809595203%"),
    minHeight: hp("23.238380809595203%"),
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
  View_55_717: {
    width: wp("65.60000000000001%"),
    minWidth: wp("65.60000000000001%"),
    height: hp("23.238380809595203%"),
    minHeight: hp("23.238380809595203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_55_718: {
    width: wp("51.2228271484375%"),
    height: hp("17.440802761461065%"),
    top: hp("2.8813535126967764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933626302083331%")
  },
  ImageBackground_55_719: {
    width: wp("14.926045735677082%"),
    height: hp("8.73085090602892%"),
    top: hp("3.7347750685204275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.644982910156244%")
  },
  ImageBackground_55_720: {
    width: wp("13.3299072265625%"),
    height: hp("8.602848653493078%"),
    top: hp("3.7787716249297247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.53878987630208%")
  },
  ImageBackground_55_721: {
    width: wp("14.8899658203125%"),
    height: hp("0.17835053725578617%"),
    top: hp("6.010251710082457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.97873128255208%")
  },
  ImageBackground_55_722: {
    width: wp("12.353706868489583%"),
    height: hp("0.17835454068619985%"),
    top: hp("4.174969400065592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.97873128255208%")
  },
  ImageBackground_55_723: {
    width: wp("14.551306152343749%"),
    height: hp("0.17816066027045072%"),
    top: hp("5.643244661848762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.97873128255208%")
  },
  ImageBackground_55_724: {
    width: wp("5.770747884114583%"),
    height: hp("0.17835454068619985%"),
    top: hp("3.8080172560204275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.97873128255208%")
  },
  ImageBackground_55_725: {
    width: wp("13.403304036458334%"),
    height: hp("0.17816123218908123%"),
    top: hp("4.54215031156297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.97873128255208%")
  },
  ImageBackground_55_726: {
    width: wp("14.19420166015625%"),
    height: hp("0.1783551126048304%"),
    top: hp("5.27610035314374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.97873128255208%")
  },
  ImageBackground_55_727: {
    width: wp("13.837084960937501%"),
    height: hp("0.17835682836072198%"),
    top: hp("4.909102455608135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.97873128255208%")
  },
  ImageBackground_55_728: {
    width: wp("16.33193359375%"),
    height: hp("0.3325100602774785%"),
    top: hp("12.35506209297695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.88976236979167%")
  },
  ImageBackground_55_729: {
    width: wp("13.3299072265625%"),
    height: hp("5.095595398406753%"),
    top: hp("7.286005434782602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.53878987630208%")
  },
  ImageBackground_55_730: {
    width: wp("52.222102864583334%"),
    height: hp("0.025949092104338455%"),
    top: hp("20.331258931081337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.688736979166665%")
  },
  ImageBackground_55_731: {
    width: wp("2.761762491861979%"),
    height: hp("0.12587585906753654%"),
    top: hp("15.266054716782236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.142171223958334%")
  },
  ImageBackground_55_732: {
    width: wp("2.6522898356119793%"),
    height: hp("3.8579583346754354%"),
    top: hp("15.33095146762556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.615307617187499%")
  },
  ImageBackground_55_733: {
    width: wp("8.113083902994791%"),
    height: hp("3.8579583346754354%"),
    top: hp("15.33095146762556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.185603841145834%")
  },
  ImageBackground_55_734: {
    width: wp("7.322191365559896%"),
    height: hp("3.027185900457974%"),
    top: hp("15.86733793747657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.597241210937497%")
  },
  ImageBackground_55_735: {
    width: wp("8.96752217610677%"),
    height: hp("0.12587585906753654%"),
    top: hp("15.266054716782236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.76617024739583%")
  },
  ImageBackground_55_736: {
    width: wp("7.322191365559896%"),
    height: hp("0.027692300090189283%"),
    top: hp("17.36235153907421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.597241210937497%")
  },
  ImageBackground_55_737: {
    width: wp("0.40754191080729163%"),
    height: hp("0.1924837904534061%"),
    top: hp("16.161706744284103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.369645182291666%")
  },
  ImageBackground_55_738: {
    width: wp("0.2701904296875%"),
    height: hp("0.1924837904534061%"),
    top: hp("16.161706744284103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.365551757812497%")
  },
  ImageBackground_55_739: {
    width: wp("0.40754191080729163%"),
    height: hp("0.19249179731423352%"),
    top: hp("17.651293981915288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.369645182291666%")
  },
  ImageBackground_55_740: {
    width: wp("0.2701904296875%"),
    height: hp("0.19249179731423352%"),
    top: hp("17.651293981915288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.365551757812497%")
  },
  ImageBackground_55_741: {
    width: wp("8.532510375976562%"),
    height: hp("0.1295532958618347%"),
    top: hp("15.39193171968703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.76617024739583%")
  },
  ImageBackground_55_742: {
    width: wp("0.8486226399739583%"),
    height: hp("1.1436954252366005%"),
    top: hp("19.188922384510867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.930265299479165%")
  },
  ImageBackground_55_743: {
    width: wp("0.84854736328125%"),
    height: hp("1.137907608695652%"),
    top: hp("19.191027045071216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.926652018229165%")
  },
  ImageBackground_55_744: {
    width: wp("0.8486267089843749%"),
    height: hp("1.1436954252366005%"),
    top: hp("19.188922384510867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.238151041666669%")
  },
  ImageBackground_55_745: {
    width: wp("0.8485483805338541%"),
    height: hp("1.1378881634622142%"),
    top: hp("19.18872106915292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.242325846354166%")
  },
  ImageBackground_55_746: {
    width: wp("0.8486328125%"),
    height: hp("1.1436954252366005%"),
    top: hp("19.188922384510867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.88665364583333%")
  },
  ImageBackground_55_747: {
    width: wp("0.74825439453125%"),
    height: hp("1.1435009729022207%"),
    top: hp("19.188922384510867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.88665364583333%")
  },
  ImageBackground_55_748: {
    width: wp("0.8486348470052083%"),
    height: hp("1.1436954252366005%"),
    top: hp("19.188922384510867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.256461588541665%")
  },
  ImageBackground_55_749: {
    width: wp("0.7248860677083333%"),
    height: hp("1.1435112674375703%"),
    top: hp("19.189105398472634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.256868489583333%")
  },
  ImageBackground_55_750: {
    width: wp("1.314460245768229%"),
    height: hp("0.4291368567425272%"),
    top: hp("14.837134045282049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.37542317708333%")
  },
  ImageBackground_55_751: {
    width: wp("3.504677327473958%"),
    height: hp("0.42894240440814746%"),
    top: hp("14.837134045282049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.185205078124998%")
  },
  ImageBackground_55_752: {
    width: wp("1.0500050862630208%"),
    height: hp("0.21455870575454458%"),
    top: hp("15.051498298702207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.293391927083334%")
  },
  ImageBackground_55_753: {
    width: wp("2.703131103515625%"),
    height: hp("0.21455870575454458%"),
    top: hp("15.051498298702207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.343408203124998%")
  },
  ImageBackground_55_754: {
    width: wp("1.1685078938802083%"),
    height: hp("0.05248840423538231%"),
    top: hp("15.051690463362064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.083056640625%")
  },
  ImageBackground_55_755: {
    width: wp("6.264390055338542%"),
    height: hp("6.640372783883937%"),
    top: hp("6.975595454226017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.036352539062499%")
  },
  ImageBackground_55_756: {
    width: wp("6.264801025390625%"),
    height: hp("6.640372783883937%"),
    top: hp("6.975595454226017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.764111328125%")
  },
  ImageBackground_55_757: {
    width: wp("0.25502115885416665%"),
    height: hp("3.0930280327975663%"),
    top: hp("8.172360353026612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.890380859374996%")
  },
  ImageBackground_55_758: {
    width: wp("5.279978434244792%"),
    height: hp("0.12045235469423492%"),
    top: hp("8.510076016679157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.261442057291667%")
  },
  ImageBackground_55_759: {
    width: wp("1.1217559814453124%"),
    height: hp("0.5298345700196777%"),
    top: hp("8.835429087214202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.478727213541667%")
  },
  ImageBackground_55_760: {
    width: wp("1.1217549641927083%"),
    height: hp("0.5298311385078945%"),
    top: hp("9.513413459285978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.167936197916667%")
  },
  ImageBackground_55_761: {
    width: wp("1.1217590332031249%"),
    height: hp("0.5298351419383082%"),
    top: hp("8.904379597310722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.534049479166665%")
  },
  ImageBackground_55_762: {
    width: wp("1.12176513671875%"),
    height: hp("0.5298345700196777%"),
    top: hp("10.31377011689468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.142496744791664%")
  },
  ImageBackground_55_763: {
    width: wp("0.6514973958333333%"),
    height: hp("0.5453175511853448%"),
    top: hp("19.49719110171477%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.670947265625%")
  },
  ImageBackground_55_764: {
    width: wp("1.6502685546875%"),
    height: hp("0.6772042750597358%"),
    top: hp("11.175326643318968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.0078125%")
  },
  View_55_765: {
    width: wp("0.3553792317708333%"),
    height: hp("0.2482286993710176%"),
    top: hp("11.338776412574965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.82392578125%")
  },
  ImageBackground_55_766: {
    width: wp("0.3553792317708333%"),
    height: hp("0.2482286993710176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_55_768: {
    width: wp("0.8672770182291666%"),
    height: hp("0.2905014930279001%"),
    top: hp("11.171821925951086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.95481770833334%")
  },
  ImageBackground_55_769: {
    width: wp("0.86728515625%"),
    height: hp("0.2905014930279001%"),
    top: hp("11.349812154469639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.750634765625%")
  },
  ImageBackground_55_770: {
    width: wp("1.4925333658854167%"),
    height: hp("0.3683510570154376%"),
    top: hp("11.484025443333017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.87117513020833%")
  },
  ImageBackground_55_771: {
    width: wp("0.86728515625%"),
    height: hp("0.2905014930279001%"),
    top: hp("11.233625740840516%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.74817708333333%")
  },
  ImageBackground_55_772: {
    width: wp("4.708028157552083%"),
    height: hp("1.4159916044175178%"),
    top: hp("11.544264488849329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.363301595052086%")
  },
  ImageBackground_55_773: {
    width: wp("8.470540364583332%"),
    height: hp("4.159485275062664%"),
    top: hp("12.747023094897862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.648189290364584%")
  },
  ImageBackground_55_774: {
    width: wp("1.6661539713541667%"),
    height: hp("3.247766909391984%"),
    top: hp("13.356230820136808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.307918294270834%")
  },
  ImageBackground_55_775: {
    width: wp("8.356538899739583%"),
    height: hp("4.159474980527315%"),
    top: hp("12.744680516187216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.220971679687494%")
  },
  ImageBackground_55_776: {
    width: wp("1.4509236653645834%"),
    height: hp("1.7429083004884276%"),
    top: hp("11.438885049662666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.336767578125%")
  },
  ImageBackground_55_777: {
    width: wp("1.5150594075520833%"),
    height: hp("2.3407840299820792%"),
    top: hp("11.245494196261241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.255411783854164%")
  },
  ImageBackground_55_778: {
    width: wp("9.735441080729167%"),
    height: hp("5.061900812289168%"),
    top: hp("15.26955028345202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.30181884765625%")
  },
  ImageBackground_55_779: {
    width: wp("9.730521647135417%"),
    height: hp("5.064954857776191%"),
    top: hp("15.266301785630624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.67738037109375%")
  },
  ImageBackground_55_780: {
    width: wp("9.166898600260415%"),
    height: hp("0.26879031797577774%"),
    top: hp("16.902071425224882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.998295084635416%")
  },
  ImageBackground_55_781: {
    width: wp("7.90535888671875%"),
    height: hp("0.26879031797577774%"),
    top: hp("16.902071425224882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.8083740234375%")
  },
  ImageBackground_55_782: {
    width: wp("8.565873209635416%"),
    height: hp("0.2709201429558658%"),
    top: hp("16.899728846514236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.96744384765625%")
  },
  ImageBackground_55_783: {
    width: wp("11.153641764322916%"),
    height: hp("3.9040664146686423%"),
    top: hp("15.833452902455022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.7315185546875%")
  },
  ImageBackground_55_784: {
    width: wp("3.8595113118489586%"),
    height: hp("1.5583352885324915%"),
    top: hp("18.772940800107754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.72193196614583%")
  },
  ImageBackground_55_785: {
    width: wp("2.93109130859375%"),
    height: hp("0.5081451278755154%"),
    top: hp("19.82330368019116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.70570882161458%")
  },
  ImageBackground_55_786: {
    width: wp("10.71453857421875%"),
    height: hp("4.099986292254264%"),
    top: hp("15.831412296781295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.16652018229166%")
  },
  ImageBackground_55_787: {
    width: wp("2.4497497558593753%"),
    height: hp("0.5079506755411357%"),
    top: hp("19.82330368019116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.187052408854164%")
  },
  ImageBackground_55_788: {
    width: wp("3.860298665364583%"),
    height: hp("1.5207659536930753%"),
    top: hp("18.810303100402926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.95850423177083%")
  },
  ImageBackground_55_789: {
    width: wp("2.9310892740885417%"),
    height: hp("0.5081451278755154%"),
    top: hp("19.82330368019116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.9422607421875%")
  },
  ImageBackground_55_790: {
    width: wp("2.4497477213541665%"),
    height: hp("0.5079506755411357%"),
    top: hp("19.82330368019116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.42360026041666%")
  },
  ImageBackground_55_791: {
    width: wp("5.947049967447917%"),
    height: hp("1.73358259529903%"),
    top: hp("11.765967602136428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.25546061197917%")
  },
  ImageBackground_55_792: {
    width: wp("4.268509928385416%"),
    height: hp("1.7537244256289823%"),
    top: hp("12.005752494846327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.64285888671875%")
  },
  ImageBackground_55_793: {
    width: wp("11.154040527343751%"),
    height: hp("3.906372390586933%"),
    top: hp("15.835795481165668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.955371093749996%")
  },
  ImageBackground_55_794: {
    width: wp("8.244270833333333%"),
    height: hp("1.077293384557721%"),
    top: hp("15.8290331152783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.70400797526042%")
  },
  ImageBackground_55_795: {
    width: wp("10.789973958333334%"),
    height: hp("4.114915656185579%"),
    top: hp("15.833681669907236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.310420735677084%")
  },
  ImageBackground_55_796: {
    width: wp("6.65177001953125%"),
    height: hp("3.8642196998424616%"),
    top: hp("12.670148080256745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.59449055989583%")
  },
  ImageBackground_55_797: {
    width: wp("0.21319580078125%"),
    height: hp("0.1007000009516726%"),
    top: hp("15.634196451578894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.3267333984375%")
  },
  ImageBackground_55_798: {
    width: wp("0.28987223307291665%"),
    height: hp("0.39736792065393084%"),
    top: hp("14.691134657280735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.03028564453125%")
  },
  ImageBackground_55_799: {
    width: wp("0.7872029622395834%"),
    height: hp("0.17942231276939655%"),
    top: hp("16.16862467203898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.43618977864583%")
  },
  ImageBackground_55_800: {
    width: wp("1.8204752604166665%"),
    height: hp("2.654558035923445%"),
    top: hp("13.879650750796472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.89991048177083%")
  },
  ImageBackground_55_801: {
    width: wp("0.21319986979166666%"),
    height: hp("0.1007000009516726%"),
    top: hp("15.634196451578894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.34438069661458%")
  },
  ImageBackground_55_802: {
    width: wp("0.5879394531250001%"),
    height: hp("0.21282579230404328%"),
    top: hp("14.372919131254683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.75192057291667%")
  },
  ImageBackground_55_803: {
    width: wp("0.68839111328125%"),
    height: hp("0.2554554631863755%"),
    top: hp("13.0073055513259%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.38826090494791%")
  },
  ImageBackground_55_804: {
    width: wp("5.888582356770834%"),
    height: hp("1.2610691419427005%"),
    top: hp("12.240815627342577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.24643147786458%")
  },
  ImageBackground_55_805: {
    width: wp("3.3747314453125004%"),
    height: hp("0.3896390122809689%"),
    top: hp("15.394686079811656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.8515625%")
  },
  ImageBackground_55_806: {
    width: wp("0.3029703776041667%"),
    height: hp("0.1109556458343094%"),
    top: hp("15.628623676443027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.58794352213542%")
  },
  ImageBackground_55_807: {
    width: wp("0.3249796549479167%"),
    height: hp("0.151824951171875%"),
    top: hp("15.58325451532047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.35423177083333%")
  },
  ImageBackground_55_808: {
    width: wp("0.6128255208333333%"),
    height: hp("0.11046951499836019%"),
    top: hp("15.677360294462147%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.57943522135417%")
  },
  ImageBackground_55_809: {
    width: wp("4.770764160156251%"),
    height: hp("2.101137541580772%"),
    top: hp("13.902756263469826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.373071289062494%")
  },
  ImageBackground_55_810: {
    width: wp("0.47923583984375%"),
    height: hp("0.4144179588672461%"),
    top: hp("14.240883708536359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.18402099609374%")
  },
  ImageBackground_55_811: {
    width: wp("4.443485514322917%"),
    height: hp("2.8157189868200665%"),
    top: hp("13.188333811609823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.790856933593744%")
  },
  ImageBackground_55_812: {
    width: wp("2.7884114583333335%"),
    height: hp("0.1994543347222873%"),
    top: hp("15.237779059688904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.5625%")
  },
  ImageBackground_55_813: {
    width: wp("1.5272542317708333%"),
    height: hp("0.14144577186504403%"),
    top: hp("15.636749496345573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.424739583333334%")
  },
  ImageBackground_55_814: {
    width: wp("0.1328369140625%"),
    height: hp("0.06274404911801912%"),
    top: hp("15.363079568614133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.48293863932292%")
  },
  ImageBackground_55_815: {
    width: wp("0.13284098307291667%"),
    height: hp("0.06274404911801912%"),
    top: hp("15.799988799545538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.387829589843754%")
  },
  ImageBackground_55_816: {
    width: wp("0.5502197265625%"),
    height: hp("0.8758933826543759%"),
    top: hp("16.097807419532423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.89250081380209%")
  },
  ImageBackground_55_817: {
    width: wp("0.3653076171875%"),
    height: hp("0.2711145952902455%"),
    top: hp("16.899728846514236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.69042154947917%")
  },
  ImageBackground_55_818: {
    width: wp("0.24190673828125%"),
    height: hp("0.2620119383667541%"),
    top: hp("16.899728846514236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.38653564453125%")
  },
  ImageBackground_55_819: {
    width: wp("2.997111002604167%"),
    height: hp("0.0761052121644256%"),
    top: hp("15.75503141983696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.058618164062494%")
  },
  ImageBackground_55_820: {
    width: wp("2.997111002604167%"),
    height: hp("0.0761052121644256%"),
    top: hp("15.75503141983696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.058618164062494%")
  },
  ImageBackground_55_821: {
    width: wp("5.164363606770833%"),
    height: hp("0.0761052121644256%"),
    top: hp("15.75503141983696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.92787679036458%")
  },
  ImageBackground_55_822: {
    width: wp("5.197981770833334%"),
    height: hp("0.013555615380786168%"),
    top: hp("15.75503141983696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.022587076822916%")
  },
  ImageBackground_55_824: {
    width: wp("1.65323486328125%"),
    height: hp("1.708786491153837%"),
    top: hp("14.04644052485476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.53028157552083%")
  },
  ImageBackground_55_825: {
    width: wp("1.65323486328125%"),
    height: hp("1.708786491153837%"),
    top: hp("14.04644052485476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.53028157552083%")
  },
  ImageBackground_55_826: {
    width: wp("5.799214680989583%"),
    height: hp("1.708786491153837%"),
    top: hp("14.04644052485476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.271610514322916%")
  },
  ImageBackground_55_827: {
    width: wp("0.576416015625%"),
    height: hp("0.2466479162762369%"),
    top: hp("14.740676536731634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.97213948567708%")
  },
  ImageBackground_55_828: {
    width: wp("9.735445149739583%"),
    height: hp("5.061900812289168%"),
    top: hp("15.26955028345202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.14472249348958%")
  },
  ImageBackground_55_829: {
    width: wp("9.73626708984375%"),
    height: hp("5.065148166273309%"),
    top: hp("15.266109620970767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.51946207682292%")
  },
  ImageBackground_55_830: {
    width: wp("2.1486490885416667%"),
    height: hp("1.2384623423151706%"),
    top: hp("11.396499016116941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.84886474609375%")
  },
  ImageBackground_55_831: {
    width: wp("0.4331583658854167%"),
    height: hp("0.11157331795528017%"),
    top: hp("12.247120458325526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.24915771484375%")
  },
  ImageBackground_55_832: {
    width: wp("0.19926350911458335%"),
    height: hp("0.09411492983976762%"),
    top: hp("11.972050473786545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.81011962890625%")
  },
  ImageBackground_55_833: {
    width: wp("0.0377197265625%"),
    height: hp("0.01780840231739599%"),
    top: hp("12.02586572924475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.84333089192708%")
  },
  ImageBackground_55_834: {
    width: wp("0.19925944010416669%"),
    height: hp("0.09410692297894022%"),
    top: hp("11.916057352183287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.056131998697914%")
  },
  ImageBackground_55_835: {
    width: wp("0.03772379557291666%"),
    height: hp("0.01781640917822339%"),
    top: hp("11.967575782421285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.08483072916667%")
  },
  ImageBackground_55_836: {
    width: wp("0.25102132161458335%"),
    height: hp("0.12050554312687406%"),
    top: hp("12.089371573978639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.31399739583333%")
  },
  ImageBackground_55_838: {
    width: wp("2.8929646809895835%"),
    height: hp("1.0116622901927943%"),
    top: hp("11.158471057440032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.728535970052086%")
  },
  ImageBackground_55_839: {
    width: wp("0.7055013020833333%"),
    height: hp("0.32825612950360755%"),
    top: hp("11.980350156952774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.597318522135424%")
  },
  ImageBackground_55_840: {
    width: wp("0.3530802408854167%"),
    height: hp("0.13697908736061656%"),
    top: hp("12.02547224922695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.83931070963541%")
  },
  ImageBackground_55_841: {
    width: wp("1.69642333984375%"),
    height: hp("0.436300709508527%"),
    top: hp("11.762902118276799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.64600830078125%")
  },
  ImageBackground_55_842: {
    width: wp("0.170556640625%"),
    height: hp("0.08055931445898144%"),
    top: hp("12.200534254357201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.7113037109375%")
  },
  ImageBackground_55_843: {
    width: wp("0.14856363932291666%"),
    height: hp("0.06661822592121908%"),
    top: hp("12.213930876358695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.73999837239583%")
  },
  ImageBackground_55_844: {
    width: wp("0.14718424479166667%"),
    height: hp("0.1725547138540105%"),
    top: hp("12.290028081662292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.58789469401041%")
  },
  ImageBackground_55_845: {
    width: wp("1.90316162109375%"),
    height: hp("0.5803006699775113%"),
    top: hp("11.369550210246437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.08441975911458%")
  },
  ImageBackground_55_846: {
    width: wp("0.2959269205729167%"),
    height: hp("0.059106646627857945%"),
    top: hp("11.922407936656668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.49272867838542%")
  },
  ImageBackground_55_847: {
    width: wp("0.5731730143229167%"),
    height: hp("0.0903539929254123%"),
    top: hp("12.579116935672786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.25990397135416%")
  },
  ImageBackground_55_848: {
    width: wp("1.8199910481770836%"),
    height: hp("1.298401702469078%"),
    top: hp("12.30591369354385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.949930826822914%")
  },
  ImageBackground_55_849: {
    width: wp("0.8583699544270833%"),
    height: hp("0.44852146680565963%"),
    top: hp("14.697887872470012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.845402018229166%")
  },
  ImageBackground_55_850: {
    width: wp("0.38734537760416665%"),
    height: hp("0.386910960413348%"),
    top: hp("13.76080148402361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.644999186197914%")
  },
  ImageBackground_55_851: {
    width: wp("0.744970703125%"),
    height: hp("0.23704997781870785%"),
    top: hp("12.343449857102698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.0910400390625%")
  },
  ImageBackground_55_852: {
    width: wp("0.635498046875%"),
    height: hp("0.12069427627494846%"),
    top: hp("13.495092663629123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.16971435546875%")
  },
  ImageBackground_55_853: {
    width: wp("0.5649820963541666%"),
    height: hp("0.19536054116496437%"),
    top: hp("12.762295610007499%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.263606770833334%")
  },
  ImageBackground_55_854: {
    width: wp("0.4334798177083333%"),
    height: hp("0.25019953097181874%"),
    top: hp("12.657968501101017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.84490559895833%")
  },
  ImageBackground_55_855: {
    width: wp("0.4334757486979167%"),
    height: hp("0.2502018186463409%"),
    top: hp("11.91836332810157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.54480794270833%")
  },
  ImageBackground_55_856: {
    width: wp("0.7777750651041667%"),
    height: hp("0.21895676002330866%"),
    top: hp("14.156697286122558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.95486653645833%")
  },
  ImageBackground_55_857: {
    width: wp("0.37432861328125%"),
    height: hp("0.22985752912118163%"),
    top: hp("15.174840558236511%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.03151041666666%")
  },
  ImageBackground_55_858: {
    width: wp("0.8327107747395833%"),
    height: hp("0.16712263070125094%"),
    top: hp("13.417632004310342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.06512044270833%")
  },
  ImageBackground_55_859: {
    width: wp("2.337821451822917%"),
    height: hp("2.0279325287917565%"),
    top: hp("8.139454442700526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.040364583333332%")
  },
  ImageBackground_55_860: {
    width: wp("0.8638712565104166%"),
    height: hp("2.070733203344617%"),
    top: hp("8.14368206521739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.561865234375002%")
  },
  ImageBackground_55_861: {
    width: wp("1.292315673828125%"),
    height: hp("0.2583322138979338%"),
    top: hp("11.5825693110476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.615592447916665%")
  },
  ImageBackground_55_862: {
    width: wp("0.7982706705729167%"),
    height: hp("0.25814004923807626%"),
    top: hp("11.5825693110476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.17151692708333%")
  },
  ImageBackground_55_863: {
    width: wp("6.045859781901042%"),
    height: hp("1.8598456432794346%"),
    top: hp("9.593399711277172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.924747721354166%")
  },
  ImageBackground_55_864: {
    width: wp("10.314369710286458%"),
    height: hp("5.828960367228495%"),
    top: hp("4.509390812406295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.95008138020833%")
  },
  ImageBackground_55_865: {
    width: wp("10.314369710286458%"),
    height: hp("5.828960367228495%"),
    top: hp("4.509390812406295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.95008138020833%")
  },
  ImageBackground_55_866: {
    width: wp("2.0327880859375003%"),
    height: hp("1.2343476737278334%"),
    top: hp("4.509390812406295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.24763997395833%")
  },
  ImageBackground_55_867: {
    width: wp("2.0327880859375003%"),
    height: hp("1.2343476737278334%"),
    top: hp("4.509390812406295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.24763997395833%")
  },
  ImageBackground_55_868: {
    width: wp("5.89866943359375%"),
    height: hp("0.34896244352189143%"),
    top: hp("5.052045510447897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.65198974609375%")
  },
  ImageBackground_55_869: {
    width: wp("5.938031005859375%"),
    height: hp("0.15298594599184784%"),
    top: hp("5.866512544508993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.127587890624994%")
  },
  ImageBackground_55_870: {
    width: wp("7.0499511718750005%"),
    height: hp("0.15298594599184784%"),
    top: hp("6.342705722334145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.01566975911458%")
  },
  ImageBackground_55_871: {
    width: wp("7.0499511718750005%"),
    height: hp("0.15298594599184784%"),
    top: hp("6.819136818309595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.01566975911458%")
  },
  ImageBackground_55_872: {
    width: wp("7.0499511718750005%"),
    height: hp("0.15298594599184784%"),
    top: hp("7.295320845436656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.01566975911458%")
  },
  ImageBackground_55_873: {
    width: wp("7.0499511718750005%"),
    height: hp("0.15298594599184784%"),
    top: hp("7.771514023261808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.01566975911458%")
  },
  ImageBackground_55_874: {
    width: wp("7.0499511718750005%"),
    height: hp("0.1529813706428036%"),
    top: hp("8.247881064350636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.01566975911458%")
  },
  ImageBackground_55_875: {
    width: wp("7.0499511718750005%"),
    height: hp("0.15298594599184784%"),
    top: hp("8.724074242175789%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.01566975911458%")
  },
  ImageBackground_55_876: {
    width: wp("3.610469563802084%"),
    height: hp("0.15298594599184784%"),
    top: hp("9.200276570699025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.01608072916667%")
  },
  ImageBackground_55_877: {
    width: wp("1.7744913736979167%"),
    height: hp("0.8022983213593399%"),
    top: hp("9.123859090962334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.205859374999996%")
  },
  ImageBackground_55_878: {
    width: wp("0.9497436523437499%"),
    height: hp("0.4485912408785842%"),
    top: hp("9.29935117890274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.61741536458333%")
  },
  ImageBackground_55_879: {
    width: wp("0.5161905924479167%"),
    height: hp("0.0943093821741473%"),
    top: hp("9.477972805589388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.834798177083336%")
  },
  ImageBackground_55_880: {
    width: wp("2.8392496744791664%"),
    height: hp("0.02052730348692841%"),
    top: hp("9.915787955631558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.196887207031246%")
  },
  ImageBackground_55_881: {
    width: wp("2.177569580078125%"),
    height: hp("0.33199018624232807%"),
    top: hp("9.572481215446963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.52805989583333%")
  },
  ImageBackground_55_882: {
    width: wp("2.5296081542968754%"),
    height: hp("0.6805602935836769%"),
    top: hp("10.83568933306784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.6126708984375%")
  },
  ImageBackground_55_883: {
    width: wp("1.1773600260416666%"),
    height: hp("0.24225443735651706%"),
    top: hp("11.051581753068781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.022257486979164%")
  },
  ImageBackground_55_884: {
    width: wp("1.1773640950520834%"),
    height: hp("0.24225558119377813%"),
    top: hp("11.301597126241568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.90416666666666%")
  },
  ImageBackground_55_885: {
    width: wp("2.019500732421875%"),
    height: hp("0.30325413465142426%"),
    top: hp("11.321335182018366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.710660807291667%")
  },
  ImageBackground_55_886: {
    width: wp("1.1773600260416666%"),
    height: hp("0.24225443735651706%"),
    top: hp("11.191614885916415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.110400390625003%")
  },
  ImageBackground_55_887: {
    width: wp("1.7362548828125002%"),
    height: hp("0.7414095762787551%"),
    top: hp("8.47625503654423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.072200520833334%")
  },
  ImageBackground_55_888: {
    width: wp("0.7017598470052083%"),
    height: hp("0.25643859131225405%"),
    top: hp("8.487162668665668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.810856119791666%")
  },
  ImageBackground_55_889: {
    width: wp("0.7016215006510417%"),
    height: hp("0.25643859131225405%"),
    top: hp("8.582009654352511%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.970072428385414%")
  },
  ImageBackground_55_890: {
    width: wp("0.7016153971354167%"),
    height: hp("0.2564340159632098%"),
    top: hp("8.678274998243062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.12670084635417%")
  },
  ImageBackground_55_891: {
    width: wp("1.0065022786458333%"),
    height: hp("0.35741082553205816%"),
    top: hp("8.258020037832651%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.83321940104167%")
  },
  ImageBackground_55_892: {
    width: wp("0.19886678059895832%"),
    height: hp("0.457021321492574%"),
    top: hp("8.572438024151985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.470361328125%")
  },
  ImageBackground_55_893: {
    width: wp("0.00458984375%"),
    height: hp("0.0035338852180355138%"),
    top: hp("8.741698486694148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.341304524739584%")
  },
  ImageBackground_55_894: {
    width: wp("0.013403320312500001%"),
    height: hp("0.005467542107852324%"),
    top: hp("8.856347583044418%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.44178059895833%")
  },
  ImageBackground_55_895: {
    width: wp("0.5616455078125%"),
    height: hp("0.16945777446969876%"),
    top: hp("8.550851527361317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.61878255208333%")
  },
  ImageBackground_55_896: {
    width: wp("0.4476542154947917%"),
    height: hp("0.22371512302930566%"),
    top: hp("8.475770049545538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.97604166666667%")
  },
  ImageBackground_55_898: {
    width: wp("1.0783182779947915%"),
    height: hp("0.5027587982131981%"),
    top: hp("8.548243578406108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.07177734375%")
  },
  ImageBackground_55_899: {
    width: wp("2.46533203125%"),
    height: hp("0.9856846021569294%"),
    top: hp("19.01618465669508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.969799804687497%")
  },
  ImageBackground_55_900: {
    width: wp("2.389068603515625%"),
    height: hp("0.5722366172870595%"),
    top: hp("19.42979621029329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.045654296874996%")
  },
  ImageBackground_55_901: {
    width: wp("1.3669413248697917%"),
    height: hp("0.6375039714029704%"),
    top: hp("19.28824406156297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.019409179687496%")
  },
  ImageBackground_55_902: {
    width: wp("1.3575113932291667%"),
    height: hp("0.9152230830385589%"),
    top: hp("19.014015941248125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.5557373046875%")
  },
  ImageBackground_55_903: {
    width: wp("1.2607523600260417%"),
    height: hp("0.4970979476082271%"),
    top: hp("19.432138789003936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.5557373046875%")
  },
  ImageBackground_55_904: {
    width: wp("1.29027099609375%"),
    height: hp("0.6501113456943404%"),
    top: hp("19.28473934419508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.559838867187498%")
  },
  ImageBackground_55_905: {
    width: wp("5.966733805338541%"),
    height: hp("7.4395713062658135%"),
    top: hp("12.069240038184034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.48152669270833%")
  },
  ImageBackground_55_906: {
    width: wp("1.7142110188802084%"),
    height: hp("0.8435479525862069%"),
    top: hp("19.496815923093145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.2777587890625%")
  },
  ImageBackground_55_907: {
    width: wp("1.7142069498697916%"),
    height: hp("0.11851755396715706%"),
    top: hp("20.221844034037666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.277351888020835%")
  },
  ImageBackground_55_908: {
    width: wp("2.172998046875%"),
    height: hp("6.256739489142148%"),
    top: hp("13.25226058845577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.5573486328125%")
  },
  ImageBackground_55_909: {
    width: wp("0.7720316569010417%"),
    height: hp("6.947115050262955%"),
    top: hp("12.52451472017897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.478662109375%")
  },
  ImageBackground_55_910: {
    width: wp("3.8595947265625%"),
    height: hp("0.7803761083325524%"),
    top: hp("19.552040386056973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.90966796875%")
  },
  View_55_911: {
    width: wp("3.8556416829427085%"),
    height: hp("0.2464260118475918%"),
    top: hp("20.086770579553978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.91363118489583%")
  },
  View_55_912: {
    width: wp("3.8556416829427085%"),
    height: hp("0.2464260118475918%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_55_913: {
    width: wp("3.8556416829427085%"),
    height: hp("0.2464260118475918%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_55_915: {
    width: wp("1.3183451334635417%"),
    height: hp("0.479025318883527%"),
    top: hp("19.55392542986319%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.182796223958334%")
  },
  View_55_916: {
    width: wp("1.3183451334635417%"),
    height: hp("0.479025318883527%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_55_917: {
    width: wp("1.3183451334635417%"),
    height: hp("0.479025318883527%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_55_919: {
    width: wp("1.8098449707031248%"),
    height: hp("1.560091078728214%"),
    top: hp("6.902225156952774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.52661946614583%")
  },
  ImageBackground_55_920: {
    width: wp("1.0823974609375%"),
    height: hp("0.5112454987716103%"),
    top: hp("6.608798872048347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.923494466145833%")
  },
  ImageBackground_55_921: {
    width: wp("1.9642313639322915%"),
    height: hp("1.2230840222588901%"),
    top: hp("6.6591277115348575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.671761067708335%")
  },
  ImageBackground_55_922: {
    width: wp("2.7012166341145836%"),
    height: hp("0.901323744560825%"),
    top: hp("6.304583914097641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.121402994791666%")
  },
  ImageBackground_55_923: {
    width: wp("0.17261149088541666%"),
    height: hp("0.1258747152302755%"),
    top: hp("7.36093135073088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.6205078125%")
  },
  ImageBackground_55_924: {
    width: wp("0.58123779296875%"),
    height: hp("0.371180338480662%"),
    top: hp("7.007522239856634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.220703125%")
  },
  ImageBackground_55_925: {
    width: wp("0.29058837890625%"),
    height: hp("0.15458617432006652%"),
    top: hp("7.076445297858882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.35779622395833%")
  },
  ImageBackground_55_926: {
    width: wp("0.38088785807291664%"),
    height: hp("0.06855474240418853%"),
    top: hp("6.706976711839388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.287980143229166%")
  },
  ImageBackground_55_927: {
    width: wp("1.2415629069010417%"),
    height: hp("0.23515349563987537%"),
    top: hp("7.742003021926536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.069791666666667%")
  },
  ImageBackground_55_928: {
    width: wp("0.19597981770833334%"),
    height: hp("0.09256560226966595%"),
    top: hp("7.155489027946963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.527018229166668%")
  },
  ImageBackground_55_929: {
    width: wp("0.03935953776041667%"),
    height: hp("0.018595934271633714%"),
    top: hp("7.177578813132499%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.64838053385417%")
  },
  ImageBackground_55_930: {
    width: wp("0.1959818522135417%"),
    height: hp("0.092566746106927%"),
    top: hp("7.157428975941713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.303971354166663%")
  },
  ImageBackground_55_931: {
    width: wp("0.039361572265625%"),
    height: hp("0.018587355492175786%"),
    top: hp("7.1795004597310665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.425325520833336%")
  },
  ImageBackground_55_932: {
    width: wp("0.2788004557291667%"),
    height: hp("0.11135141352663512%"),
    top: hp("7.334815258386428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.86486002604167%")
  },
  ImageBackground_55_934: {
    width: wp("1.6285176595052082%"),
    height: hp("0.3001583391043736%"),
    top: hp("7.083061252576833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.19287109375%")
  },
  ImageBackground_55_935: {
    width: wp("1.810968017578125%"),
    height: hp("0.7354959376390906%"),
    top: hp("7.1469788787246955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.746793619791667%")
  },
  ImageBackground_55_936: {
    width: wp("0.563751220703125%"),
    height: hp("0.09582210695189515%"),
    top: hp("7.509886414214769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.5799072265625%")
  },
  ImageBackground_55_937: {
    width: wp("4.254160563151042%"),
    height: hp("0.22503396739130435%"),
    top: hp("11.99407620408546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.50817057291666%")
  },
  ImageBackground_55_938: {
    width: wp("4.254160563151042%"),
    height: hp("0.22503396739130435%"),
    top: hp("11.99407620408546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.50817057291666%")
  },
  ImageBackground_55_939: {
    width: wp("0.17220458984374998%"),
    height: hp("0.24401137138950055%"),
    top: hp("11.99407620408546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.821809895833333%")
  },
  ImageBackground_55_940: {
    width: wp("0.8605916341145834%"),
    height: hp("0.22483951505692465%"),
    top: hp("11.994268368745317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.750870768229166%")
  },
  ImageBackground_55_941: {
    width: wp("0.17220458984374998%"),
    height: hp("0.24401137138950055%"),
    top: hp("11.99407620408546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.13584798177083%")
  },
  ImageBackground_55_942: {
    width: wp("1.3333170572916668%"),
    height: hp("0.6072969450943474%"),
    top: hp("7.968071018201833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.472908528645835%")
  },
  ImageBackground_55_943: {
    width: wp("0.49405314127604166%"),
    height: hp("0.5412603604203757%"),
    top: hp("7.868712738357381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.067805989583334%")
  },
  ImageBackground_55_944: {
    width: wp("5.4632507324218755%"),
    height: hp("3.8546715183057882%"),
    top: hp("8.139454442700526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.521712239583334%")
  },
  ImageBackground_55_945: {
    width: wp("1.5702962239583333%"),
    height: hp("3.021377494846327%"),
    top: hp("8.221929684571776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.745556640624997%")
  },
  ImageBackground_55_946: {
    width: wp("4.148836263020833%"),
    height: hp("4.611854038495889%"),
    top: hp("8.139454442700526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.49268391927083%")
  },
  ImageBackground_55_947: {
    width: wp("7.12415771484375%"),
    height: hp("4.607203768111061%"),
    top: hp("8.14368206521739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.561865234375002%")
  },
  ImageBackground_55_948: {
    width: wp("7.057332356770833%"),
    height: hp("2.0395550592013567%"),
    top: hp("9.413652548725636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.9026123046875%")
  },
  ImageBackground_55_949: {
    width: wp("0.44066365559895837%"),
    height: hp("0.23068681113544792%"),
    top: hp("8.587307908545725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.04003499348958%")
  },
  ImageBackground_55_951: {
    width: wp("0.477386474609375%"),
    height: hp("0.2347525806798749%"),
    top: hp("8.67426699248032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.237003580729166%")
  },
  ImageBackground_55_953: {
    width: wp("1.3148701985677085%"),
    height: hp("0.4957567984196378%"),
    top: hp("8.139454442700526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.472908528645835%")
  },
  ImageBackground_55_954: {
    width: wp("0.2878214518229167%"),
    height: hp("0.31855524569258337%"),
    top: hp("8.14368206521739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.28838704427083%")
  },
  ImageBackground_55_955: {
    width: wp("5.391497802734375%"),
    height: hp("1.6479892530541371%"),
    top: hp("9.414091782233882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.5672119140625%")
  },
  ImageBackground_55_956: {
    width: wp("4.700238037109375%"),
    height: hp("1.1957932090473318%"),
    top: hp("9.018653515039354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.984960937500002%")
  },
  ImageBackground_55_957: {
    width: wp("0.6831929524739583%"),
    height: hp("0.08755959849665011%"),
    top: hp("11.21559886560626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.376432291666667%")
  },
  ImageBackground_55_959: {
    width: wp("0.6831787109375%"),
    height: hp("0.08756074233391117%"),
    top: hp("11.338364631160978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.309602864583333%")
  },
  ImageBackground_55_961: {
    width: wp("0.6831787109375%"),
    height: hp("0.08755959849665011%"),
    top: hp("11.443140124273796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.038590494791663%")
  },
  ImageBackground_55_963: {
    width: wp("2.6502400716145833%"),
    height: hp("1.251774892277982%"),
    top: hp("8.975828247985376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.61907145182292%")
  },
  ImageBackground_55_964: {
    width: wp("2.244340006510417%"),
    height: hp("1.0600534693590704%"),
    top: hp("9.07167265976387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.717061360677086%")
  },
  ImageBackground_55_965: {
    width: wp("2.0573811848958337%"),
    height: hp("0.9717469451309502%"),
    top: hp("9.115843079436843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.81053873697917%")
  },
  ImageBackground_55_966: {
    width: wp("2.650244140625%"),
    height: hp("1.251774892277982%"),
    top: hp("8.975828247985376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.51410725911458%")
  },
  ImageBackground_55_967: {
    width: wp("2.650244140625%"),
    height: hp("1.251774892277982%"),
    top: hp("8.975828247985376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.51410725911458%")
  },
  ImageBackground_55_968: {
    width: wp("0.8093424479166667%"),
    height: hp("0.5395182962717859%"),
    top: hp("9.332906788793103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.40011800130208%")
  },
  ImageBackground_55_969: {
    width: wp("0.80933837890625%"),
    height: hp("0.5395177243531555%"),
    top: hp("9.33309895345296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.47268880208333%")
  },
  ImageBackground_55_970: {
    width: wp("0.8093424479166667%"),
    height: hp("0.5395182962717859%"),
    top: hp("9.332906788793103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.40011800130208%")
  },
  ImageBackground_55_971: {
    width: wp("1.0754313151041668%"),
    height: hp("0.9717469451309502%"),
    top: hp("9.115843079436843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.81053873697917%")
  },
  ImageBackground_55_972: {
    width: wp("4.30992431640625%"),
    height: hp("2.035686029665831%"),
    top: hp("9.758176331755998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.138916015625%")
  },
  ImageBackground_55_973: {
    width: wp("3.649820963541667%"),
    height: hp("1.723905732070488%"),
    top: hp("9.91405847369284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.29881998697917%")
  },
  ImageBackground_55_974: {
    width: wp("3.3464152018229165%"),
    height: hp("1.5805966493071824%"),
    top: hp("9.985726741121624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.45052083333333%")
  },
  ImageBackground_55_975: {
    width: wp("4.309920247395834%"),
    height: hp("2.035686029665831%"),
    top: hp("9.758176331755998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.96876627604166%")
  },
  ImageBackground_55_976: {
    width: wp("4.309920247395834%"),
    height: hp("2.035686029665831%"),
    top: hp("9.758176331755998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.96876627604166%")
  },
  ImageBackground_55_977: {
    width: wp("1.7490641276041667%"),
    height: hp("1.5805966493071824%"),
    top: hp("9.985726741121624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.45052083333333%")
  },
  ImageBackground_55_978: {
    width: wp("1.0443929036458335%"),
    height: hp("0.8904166843580164%"),
    top: hp("10.33084531952774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.771679687500004%")
  },
  ImageBackground_55_979: {
    width: wp("1.04439697265625%"),
    height: hp("0.8904166843580164%"),
    top: hp("10.33084531952774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.66958821614583%")
  },
  ImageBackground_55_980: {
    width: wp("1.04439697265625%"),
    height: hp("0.8904166843580164%"),
    top: hp("10.33084531952774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.66958821614583%")
  },
  ImageBackground_55_981: {
    width: wp("2.996284993489583%"),
    height: hp("1.4152177985104126%"),
    top: hp("7.811173148777172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.332438151041664%")
  },
  ImageBackground_55_982: {
    width: wp("2.53790283203125%"),
    height: hp("1.1987134255748104%"),
    top: hp("7.9196546746158205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.44355061848958%")
  },
  ImageBackground_55_983: {
    width: wp("2.3263427734375%"),
    height: hp("1.0987923777979174%"),
    top: hp("7.969580883386428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.54932861328125%")
  },
  ImageBackground_55_984: {
    width: wp("2.3263427734375%"),
    height: hp("1.0987923777979174%"),
    top: hp("7.969580883386428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.54932861328125%")
  },
  ImageBackground_55_985: {
    width: wp("2.9962809244791666%"),
    height: hp("1.4152177985104126%"),
    top: hp("7.811173148777172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.214359537760416%")
  },
  ImageBackground_55_986: {
    width: wp("2.9962809244791666%"),
    height: hp("1.4152177985104126%"),
    top: hp("7.811173148777172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.214359537760416%")
  },
  ImageBackground_55_987: {
    width: wp("1.2160603841145832%"),
    height: hp("1.0987923777979174%"),
    top: hp("7.969580883386428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.548917643229174%")
  },
  ImageBackground_55_988: {
    width: wp("0.73226318359375%"),
    height: hp("0.5027233392581053%"),
    top: hp("8.288354601995877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.44845784505208%")
  },
  ImageBackground_55_989: {
    width: wp("0.7322591145833333%"),
    height: hp("0.5027233392581053%"),
    top: hp("8.288354601995877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.38572998046875%")
  },
  ImageBackground_55_990: {
    width: wp("0.7322591145833333%"),
    height: hp("0.5027233392581053%"),
    top: hp("8.288354601995877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.38572998046875%")
  },
  View_449_14: {
    width: wp("33.6%"),
    top: hp("10.044977511244383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.8%")
  },
  Text_449_14: {
    color: "rgba(52, 52, 52, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_449_15: {
    width: wp("38.4%"),
    top: hp("5.397301349325332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.400000000000006%")
  },
  Text_449_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_55_669: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("1.199400299850075%"),
    minHeight: hp("1.199400299850075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.33333333333333%"),
    top: hp("21.139430284857568%")
  },
  View_55_673: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0494752623688122%")
  },
  View_55_674: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 123, 21, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_55_675: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999999%"),
    top: hp("2.8485757121439335%")
  },
  Text_55_675: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_676: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.33333333333333%"),
    top: hp("2.9985007496251903%")
  },
  Text_55_676: {
    color: "rgba(44, 73, 105, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_55_677: {
    width: wp("6.323326619466147%"),
    height: hp("3.555093676611401%"),
    top: hp("1.9149848903673181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.88185221354166%")
  },
  View_55_686: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("65.96701649175412%")
  },
  Text_55_686: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_688: {
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
  View_55_689: {
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
  View_55_690: {
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
  ImageBackground_55_691: {
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
  View_55_693: {
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
  ImageBackground_55_694: {
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
  ImageBackground_55_695: {
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
  ImageBackground_55_696: {
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
  ImageBackground_55_698: {
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
  View_55_700: {
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
  ImageBackground_55_701: {
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
  View_55_702: {
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
  ImageBackground_55_703: {
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
  ImageBackground_55_704: {
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
  View_55_705: {
    width: wp("92.53478190104167%"),
    minWidth: wp("92.53478190104167%"),
    height: hp("9.897786244817045%"),
    minHeight: hp("9.897786244817045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7325927734375%"),
    top: hp("5.997001499250374%")
  },
  View_55_706: {
    width: wp("44.20280354817708%"),
    minWidth: wp("44.20280354817708%"),
    height: hp("8.245877061469265%"),
    minHeight: hp("8.245877061469265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6007405598958337%"),
    top: hp("0%")
  },
  View_55_707: {
    width: wp("20.66624552408854%"),
    minWidth: wp("20.66624552408854%"),
    height: hp("4.94752623688156%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_55_708: {
    width: wp("20.66624552408854%"),
    minWidth: wp("20.66624552408854%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_55_708: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_709: {
    width: wp("44.20280354817708%"),
    minWidth: wp("44.20280354817708%"),
    height: hp("3.1484257871064467%"),
    minHeight: hp("3.1484257871064467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.097451274362819%")
  },
  View_55_710: {
    width: wp("44.20280354817708%"),
    minWidth: wp("44.20280354817708%"),
    minHeight: hp("3.1484257871064467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_55_710: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_711: {
    width: wp("9.129443359375%"),
    minWidth: wp("9.129443359375%"),
    height: hp("5.097451274362818%"),
    minHeight: hp("5.097451274362818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.40463053385416%"),
    top: hp("0%")
  },
  View_55_712: {
    width: wp("9.129443359375%"),
    minWidth: wp("9.129443359375%"),
    height: hp("5.097451274362818%"),
    minHeight: hp("5.097451274362818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_55_713: {
    width: wp("9.129443359375%"),
    minWidth: wp("9.129443359375%"),
    height: hp("5.097451274362818%"),
    minHeight: hp("5.097451274362818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 123, 21, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_55_714: {
    width: wp("8.055391947428385%"),
    minWidth: wp("8.055391947428385%"),
    height: hp("4.497751124437781%"),
    minHeight: hp("4.497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5370178222656392%"),
    top: hp("0.29985007496251903%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_55_715: {
    width: wp("4.603081766764323%"),
    minWidth: wp("4.603081766764323%"),
    height: hp("3.212679415449746%"),
    minHeight: hp("3.212679415449746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.263185628255215%"),
    top: hp("0.9423846426396185%")
  },
  ImageBackground_55_716: {
    width: wp("92.53478190104167%"),
    minWidth: wp("92.53478190104167%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.897788532491568%")
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
