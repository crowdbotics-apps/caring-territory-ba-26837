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
      <View style={styles.View_300_3}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_300_4}
        />
        <View style={styles.View_300_5}>
          <View source={{ uri: "null" }} style={styles.View_300_6} />
          <View style={styles.View_300_7}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_300_8}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_300_9}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_300_12}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_300_15}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_300_18}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_300_19}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_300_25}
          />
          <View style={styles.View_300_32}>
            <View style={styles.View_300_33}>
              <Text style={styles.Text_300_33}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_300_34}>
        <View style={styles.View_300_35} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f4e/9be8/38d244db5d2f5137e75bf8fbfb48c459"
          }}
          style={styles.ImageBackground_300_36}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63d6/9941/106f53ab3243538fb94e4c94e93f7cf5"
          }}
          style={styles.ImageBackground_300_37}
        />
      </View>
      <View style={styles.View_300_114}>
        <View style={styles.View_300_116}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
            }}
            style={styles.ImageBackground_300_117}
          />
          <View style={styles.View_300_118}>
            <View source={{ uri: "null" }} style={styles.View_300_119} />
            <View style={styles.View_300_120}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
                }}
                style={styles.ImageBackground_300_121}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
                }}
                style={styles.ImageBackground_300_122}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
                }}
                style={styles.ImageBackground_300_125}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
                }}
                style={styles.ImageBackground_300_128}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
                }}
                style={styles.ImageBackground_300_131}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
              }}
              style={styles.ImageBackground_300_132}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
              }}
              style={styles.ImageBackground_300_138}
            />
            <View style={styles.View_300_145}>
              <View style={styles.View_300_146}>
                <Text style={styles.Text_300_146}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b35/e9f5/27521ed94985a2f0be968d0f03f348f6"
          }}
          style={styles.ImageBackground_300_147}
        />
        <View style={styles.View_300_148}>
          <View style={styles.View_300_149}>
            <Text style={styles.Text_300_149}>Inbox</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c93/fc33/7fc531d11cc81295adb55d30823af894"
            }}
            style={styles.ImageBackground_300_150}
          />
        </View>
      </View>
      <View style={styles.View_300_152}>
        <View style={styles.View_300_153} />
        <View style={styles.View_300_154}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2b9/1620/8912a5446171a52d6b1382440d45a48a"
            }}
            style={styles.ImageBackground_300_155}
          />
          <View style={styles.View_300_157}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a943/fc90/15a0f1ae72df4133f12686374a490df4"
              }}
              style={styles.ImageBackground_300_158}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b580/5d51/7aff626a6634a6ae5a3bcc494e9c2105"
              }}
              style={styles.ImageBackground_300_159}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f74a/31c9/c62f940257c89b9b595980f1c170775a"
            }}
            style={styles.ImageBackground_300_160}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97bf/cc1c/0748205e22266d0d07972451054e01c1"
            }}
            style={styles.ImageBackground_300_162}
          />
          <View style={styles.View_300_164}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1103/e1ec/71812e15609825ae35c52f7c0ef956b3"
              }}
              style={styles.ImageBackground_300_165}
            />
            <View style={styles.View_300_166}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/856e/e583/12321cb6c7ce8d9493474eed2a3bd518"
                }}
                style={styles.ImageBackground_300_167}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/5224/c100cf6f9e057cd72950e27f9fc411ae"
                }}
                style={styles.ImageBackground_300_168}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_300_266}>
        <View style={styles.View_300_169}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90d1/2f16/b449201c00dcacd8256da7cd83804cdf"
            }}
            style={styles.ImageBackground_300_170}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a5e/e34b/39b4118dda4ddb7b1d8b19d8db85e36b"
            }}
            style={styles.ImageBackground_300_171}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1d6/4662/d7eec66a67523ec713661fe340442776"
            }}
            style={styles.ImageBackground_300_172}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c27/7ff9/4f5dc6b59a543830dc804ad3b2272b4e"
            }}
            style={styles.ImageBackground_300_173}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f28/0835/ba414b1c7f70586c9f65993232f5b28a"
            }}
            style={styles.ImageBackground_300_174}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7863/9d00/fe27a7d6262224b387e7832f7ff0bf8f"
            }}
            style={styles.ImageBackground_300_175}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f5/484b/d6f08c961743caef32e18c99704bb806"
            }}
            style={styles.ImageBackground_300_176}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5421/c985/f38c4439cc6fb288c0acae9464778b43"
            }}
            style={styles.ImageBackground_300_177}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb17/ccfe/4f8933eeb5c081fd6b53e4e125b930f3"
            }}
            style={styles.ImageBackground_300_178}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/731d/7700/d523d9be71159f3a783a029df60b89bb"
            }}
            style={styles.ImageBackground_300_179}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bec4/2a82/002c09f904a39af9996b693b190f7cd6"
            }}
            style={styles.ImageBackground_300_180}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f03/c71b/10e449c6c065f1417621c97f3790937e"
            }}
            style={styles.ImageBackground_300_181}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20f2/245a/17ac6bdb21449384a4825cf038cbc7e3"
            }}
            style={styles.ImageBackground_300_185}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18c9/bc71/fa81c11fe1029514d231f20a0dec49df"
            }}
            style={styles.ImageBackground_300_186}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5641/3832/14543a3786f301c5082132a231d40093"
            }}
            style={styles.ImageBackground_300_187}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e65/8379/40b78c2688523ae99279290fbfd17929"
            }}
            style={styles.ImageBackground_300_188}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54e7/98e9/df9ee9a2930a5b4eb4bf0cca6fc55569"
            }}
            style={styles.ImageBackground_300_189}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9502/771a/5610b5692a9a0ca367821575e689687e"
            }}
            style={styles.ImageBackground_300_190}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6b2/154a/121d3b2bec1a7f16ef9a5771a50d3def"
            }}
            style={styles.ImageBackground_300_191}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ffc/8aa4/d55c5453aea1eb4dbfedef00443744a2"
            }}
            style={styles.ImageBackground_300_192}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d6b/c66e/1b73db20ee8bf9bc37f3106ef59cee7f"
            }}
            style={styles.ImageBackground_300_193}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a976/9696/fb05d2365a4b4669487102ce30fbba75"
            }}
            style={styles.ImageBackground_300_194}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f2b/1a33/cddd1568618bae38917f6663ffa0adff"
            }}
            style={styles.ImageBackground_300_195}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa09/4507/32a56f4fd387f9fe015b9fdc453d508f"
            }}
            style={styles.ImageBackground_300_196}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f837/8193/1cb0c72ed33a096de63a43ce017bf011"
            }}
            style={styles.ImageBackground_300_197}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0825/49b8/f132ae29a7afadaa8bbd3a4b862355c6"
            }}
            style={styles.ImageBackground_300_198}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38d5/540a/265e4ae72017a9e51e0c11d08b9237e9"
            }}
            style={styles.ImageBackground_300_199}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e370/a313/35aa8719c7c19cf89351f31e7ec13a04"
            }}
            style={styles.ImageBackground_300_200}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/672a/fed2/bff7e49beb84ac7a5dff2886efac4083"
            }}
            style={styles.ImageBackground_300_201}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ddd/99bb/3bd3c6c3a78e9f95024e9395d92d5f64"
            }}
            style={styles.ImageBackground_300_202}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3de/2756/0f9701e1b4b47544e3851b08e66718b4"
            }}
            style={styles.ImageBackground_300_203}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e13/453f/ef1836717e10851badea0c2c5ab994ed"
            }}
            style={styles.ImageBackground_300_204}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc02/b623/559f467057cf146f493c1710598fa7bf"
            }}
            style={styles.ImageBackground_300_205}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cd7/3e28/ec1a13436071ad923a0feb51783ca989"
            }}
            style={styles.ImageBackground_300_206}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6155/5673/e425b83212a64f8fe5735a759e3c7cff"
            }}
            style={styles.ImageBackground_300_207}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd86/5a78/a7d223d1ff1b5ebfdff3a25addabd6a7"
            }}
            style={styles.ImageBackground_300_208}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/368b/f9b1/4baa9fc4a63ab9a1a51465ed19ae43eb"
            }}
            style={styles.ImageBackground_300_209}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92f5/8ecf/02c1e5ca9cbc222c85fcd9fc1ad52fe2"
            }}
            style={styles.ImageBackground_300_210}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cb6/826d/684417b40b36335a1c00927df622502e"
            }}
            style={styles.ImageBackground_300_211}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d135/3ba8/3e36e77e18d690c2c2ed04ce329d7d7a"
            }}
            style={styles.ImageBackground_300_215}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec6a/484c/9cbcb1da4cdbb5379eec5c9852d1d190"
            }}
            style={styles.ImageBackground_300_216}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b085/40d7/0446b0a1b97ae973768e6fd55916f71b"
            }}
            style={styles.ImageBackground_300_217}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfe2/7e4f/eb522b1d2c51b7fc179e7f1bb0f57f41"
            }}
            style={styles.ImageBackground_300_218}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d7/d7a5/bec5e21f433aabd71ff7ce4f90a6d2ac"
            }}
            style={styles.ImageBackground_300_219}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a378/cea9/b963340e245cbffc12f58590a79a69c3"
            }}
            style={styles.ImageBackground_300_220}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ed9/ca6d/bddea614ad017f78c10a896396a8e40b"
            }}
            style={styles.ImageBackground_300_221}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89c9/21ce/53a00ad5c4ae7a34350585a43cf91860"
            }}
            style={styles.ImageBackground_300_222}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed9f/66c7/34ff02707dc11ca0224cbc3539cbca16"
            }}
            style={styles.ImageBackground_300_223}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/679d/6a33/154f6bd02852cd83ebf949f182f7d014"
            }}
            style={styles.ImageBackground_300_224}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6856/3001/57d07341339de8e7c8217a17d882087c"
            }}
            style={styles.ImageBackground_300_225}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f97/9e78/fa414f0be8874724d51c51b371e18fab"
            }}
            style={styles.ImageBackground_300_226}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3733/af32/fa096d7c5559ffbb65f8020904a9a066"
            }}
            style={styles.ImageBackground_300_227}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bf3/c874/5a7c29db1e33fb5bcd0f6703a1d37f50"
            }}
            style={styles.ImageBackground_300_228}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffeb/da61/03084cc31c39de4857355dc0f991bbb1"
            }}
            style={styles.ImageBackground_300_229}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5e/2ada/afd51a9951f68e32698f9be4e650a7c9"
            }}
            style={styles.ImageBackground_300_230}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a45/a957/a6370c85c45b249f3340ae3d316b0638"
            }}
            style={styles.ImageBackground_300_231}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7376/fa5d/1a7728b3246d39c90402ac93735e8bf8"
            }}
            style={styles.ImageBackground_300_232}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2aab/6214/3d68b3975be39795592506b63747caaa"
            }}
            style={styles.ImageBackground_300_233}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c1f/8abd/a141ea53ec770774466bce1cdc544378"
            }}
            style={styles.ImageBackground_300_234}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6514/6f31/ffed91121c3c38a706dc7d3a9a5e11a3"
            }}
            style={styles.ImageBackground_300_235}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85e2/61df/42fdd8a5febf6f2af613c7f95688f3c8"
            }}
            style={styles.ImageBackground_300_236}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9f1/2e92/5d6918249864e750522719a63eb423c9"
            }}
            style={styles.ImageBackground_300_237}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a494/8da0/f61dfc782054bf37d7781c481daf6880"
            }}
            style={styles.ImageBackground_300_238}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e85/1f74/0bcd70b5de212d5bc6997b9940e21be0"
            }}
            style={styles.ImageBackground_300_239}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3151/ff14/f80f146a81ab7c53f197685bf38202f8"
            }}
            style={styles.ImageBackground_300_240}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d5/6d33/eeb77266dc39120fff751b44a30a8aff"
            }}
            style={styles.ImageBackground_300_241}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f4b/5050/f36c81d287f6278ac341aceb96114d6d"
            }}
            style={styles.ImageBackground_300_242}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50cb/10ed/c3a65970656e7ed6679b12c4783e6d3c"
            }}
            style={styles.ImageBackground_300_243}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/defb/4e49/69fc93dfe215182b3fcc554aaf75c3a5"
            }}
            style={styles.ImageBackground_300_244}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b679/5b20/fead5c8e2626b2a3626d9b2408f04e68"
            }}
            style={styles.ImageBackground_300_245}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8884/d260/a4052ca256a8c340e2b953b6cf738cf1"
            }}
            style={styles.ImageBackground_300_246}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b88/9048/c798ccaea4b057a211762dcf5af46b8d"
            }}
            style={styles.ImageBackground_300_247}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b47c/0893/7a16d2a598480ecd723ed8eb734a7b54"
            }}
            style={styles.ImageBackground_300_248}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa54/5447/abd03e918ea1811f95efa53940727399"
            }}
            style={styles.ImageBackground_300_249}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7573/cf8a/0e8600189bc7e18efa31891279e34ef7"
            }}
            style={styles.ImageBackground_300_250}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c5d/4705/184ecf74376054aab94893fbaaedca3c"
            }}
            style={styles.ImageBackground_300_251}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adec/0d16/526d323fd34d65c003052db3f0d026c5"
            }}
            style={styles.ImageBackground_300_252}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7547/21bc/8d199eeff42c7e5f4ae4dd828befdd37"
            }}
            style={styles.ImageBackground_300_253}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6430/71bc/fd742e880c1bb2ada92b65c9ed8492a9"
            }}
            style={styles.ImageBackground_300_254}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ef8/30b7/cef61e77b81cb4f90d32e5a5288482e1"
            }}
            style={styles.ImageBackground_300_255}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f9b/aea6/f9e44efa6e53f8e16b4c120940513de3"
            }}
            style={styles.ImageBackground_300_256}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f3b/7be9/13dc04611a14a8df14ad7862053d07f4"
            }}
            style={styles.ImageBackground_300_257}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce4c/fa01/e8706d1a6542cf9987ef9c90174cfe12"
            }}
            style={styles.ImageBackground_300_258}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce4c/fa01/e8706d1a6542cf9987ef9c90174cfe12"
            }}
            style={styles.ImageBackground_300_259}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce4c/fa01/e8706d1a6542cf9987ef9c90174cfe12"
            }}
            style={styles.ImageBackground_300_260}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce4c/fa01/e8706d1a6542cf9987ef9c90174cfe12"
            }}
            style={styles.ImageBackground_300_261}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea81/3f8f/86b29ef3c58f2c0c911653cccb539d1f"
            }}
            style={styles.ImageBackground_300_262}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a76/d2a8/68f7d9338a290f81112e1e41876079b3"
            }}
            style={styles.ImageBackground_300_263}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e12/91a8/aed2c59067f8d890a4db804735b6e6eb"
            }}
            style={styles.ImageBackground_300_264}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/609a/f03f/97c8ac6604450b1dd165724cb6ec6d44"
            }}
            style={styles.ImageBackground_300_265}
          />
        </View>
        <View style={styles.View_300_267}>
          <Text style={styles.Text_300_267}>It&#39;s still empty here!</Text>
        </View>
        <View style={styles.View_300_268}>
          <Text style={styles.Text_300_268}>
            please wait till this heart is fully filled
          </Text>
        </View>
        <View style={styles.View_300_269}>
          <Text style={styles.Text_300_269}>
            or take a shortcut and click the refresh button
          </Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_300_3: {
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
  ImageBackground_300_4: {
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
  View_300_5: {
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
  View_300_6: {
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
  View_300_7: {
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
  ImageBackground_300_8: {
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
  ImageBackground_300_9: {
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
  ImageBackground_300_12: {
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
  ImageBackground_300_15: {
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
  ImageBackground_300_18: {
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
  ImageBackground_300_19: {
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
  ImageBackground_300_25: {
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
  View_300_32: {
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
  View_300_33: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_300_33: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_300_34: {
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
  View_300_35: {
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
  ImageBackground_300_36: {
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
  ImageBackground_300_37: {
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
  View_300_114: {
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
  View_300_116: {
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
  ImageBackground_300_117: {
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
  View_300_118: {
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
  View_300_119: {
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
  View_300_120: {
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
  ImageBackground_300_121: {
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
  ImageBackground_300_122: {
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
  ImageBackground_300_125: {
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
  ImageBackground_300_128: {
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
  ImageBackground_300_131: {
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
  ImageBackground_300_132: {
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
  ImageBackground_300_138: {
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
  View_300_145: {
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
  View_300_146: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_300_146: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_300_147: {
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
  View_300_148: {
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
  View_300_149: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.377799479166667%"),
    top: hp("0%")
  },
  Text_300_149: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_300_150: {
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
  View_300_152: {
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
  View_300_153: {
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
  View_300_154: {
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
  ImageBackground_300_155: {
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
  View_300_157: {
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
  ImageBackground_300_158: {
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
  ImageBackground_300_159: {
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
  ImageBackground_300_160: {
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
  ImageBackground_300_162: {
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
  View_300_164: {
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
  ImageBackground_300_165: {
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
  View_300_166: {
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
  ImageBackground_300_167: {
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
  ImageBackground_300_168: {
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
  View_300_266: {
    width: wp("71.73333333333333%"),
    minWidth: wp("71.73333333333333%"),
    height: hp("37.48125937031484%"),
    minHeight: hp("37.48125937031484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("24.587706146926536%")
  },
  View_300_169: {
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
  ImageBackground_300_170: {
    width: wp("25.025732421875002%"),
    height: hp("2.507302714609492%"),
    top: hp("26.602891181362445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.649999999999997%")
  },
  ImageBackground_300_171: {
    width: wp("71.73360188802084%"),
    height: hp("25.393178044766678%"),
    top: hp("0.00025621954647547796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0004557291666689167%")
  },
  ImageBackground_300_172: {
    width: wp("22.187825520833336%"),
    height: hp("25.34556696261244%"),
    top: hp("3.6119269466829067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.835351562499996%")
  },
  ImageBackground_300_173: {
    width: wp("5.571931966145834%"),
    height: hp("1.6897942172712472%"),
    top: hp("13.99910396364318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.411067708333334%")
  },
  ImageBackground_300_174: {
    width: wp("0.8313517252604166%"),
    height: hp("0.6347187276722966%"),
    top: hp("13.99910396364318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.411067708333334%")
  },
  ImageBackground_300_175: {
    width: wp("8.41680704752604%"),
    height: hp("6.445687106702996%"),
    top: hp("8.379092924241007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.71471354166667%")
  },
  ImageBackground_300_176: {
    width: wp("2.2775044759114587%"),
    height: hp("0.6850738754158078%"),
    top: hp("11.851069094359076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.379947916666666%")
  },
  ImageBackground_300_177: {
    width: wp("1.1419698079427083%"),
    height: hp("0.6256012008644116%"),
    top: hp("12.038585199587708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.534700520833333%")
  },
  ImageBackground_300_178: {
    width: wp("0.231207275390625%"),
    height: hp("0.3737270921424054%"),
    top: hp("12.245647195933287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.122395833333336%")
  },
  ImageBackground_300_179: {
    width: wp("13.269099934895834%"),
    height: hp("7.310012291217673%"),
    top: hp("8.421186135447897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.80638020833333%")
  },
  ImageBackground_300_180: {
    width: wp("1.2914469401041666%"),
    height: hp("0.6968119333887743%"),
    top: hp("4.2336436762087715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.975130208333333%")
  },
  ImageBackground_300_181: {
    width: wp("1.2683430989583333%"),
    height: hp("0.44196785121843374%"),
    top: hp("4.480236688296479%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.9857421875%")
  },
  ImageBackground_300_185: {
    width: wp("1.4509501139322918%"),
    height: hp("1.3848025938202775%"),
    top: hp("7.55348033990817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.174283854166667%")
  },
  ImageBackground_300_186: {
    width: wp("1.4502400716145833%"),
    height: hp("1.3848025938202775%"),
    top: hp("7.55348033990817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.174283854166667%")
  },
  ImageBackground_300_187: {
    width: wp("4.675844319661458%"),
    height: hp("2.609895194309584%"),
    top: hp("5.607602692794227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.698697916666667%")
  },
  ImageBackground_300_188: {
    width: wp("2.103737386067708%"),
    height: hp("0.5434307916232314%"),
    top: hp("5.544847205303601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.86634114583334%")
  },
  ImageBackground_300_189: {
    width: wp("6.674151611328124%"),
    height: hp("1.5249729871392428%"),
    top: hp("25.545015578148423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.391080729166667%")
  },
  ImageBackground_300_190: {
    width: wp("6.578297932942709%"),
    height: hp("0.9541455773578055%"),
    top: hp("26.036188448744383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.391080729166667%")
  },
  ImageBackground_300_191: {
    width: wp("7.852913411458333%"),
    height: hp("1.794756155857618%"),
    top: hp("27.04483329624251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.863216145833334%")
  },
  ImageBackground_300_192: {
    width: wp("7.7394775390625%"),
    height: hp("1.1224978331146926%"),
    top: hp("27.6246764313156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.863216145833334%")
  },
  ImageBackground_300_193: {
    width: wp("2.348640950520833%"),
    height: hp("4.040067521171055%"),
    top: hp("22.266210644677663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.14778645833333%")
  },
  ImageBackground_300_194: {
    width: wp("1.6615966796875%"),
    height: hp("5.193486706963901%"),
    top: hp("16.383519665948278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.23326822916667%")
  },
  ImageBackground_300_195: {
    width: wp("2.348640950520833%"),
    height: hp("4.040067521171055%"),
    top: hp("22.266210644677663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.14778645833333%")
  },
  ImageBackground_300_196: {
    width: wp("1.6615966796875%"),
    height: hp("5.193486706963901%"),
    top: hp("16.383519665948278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.23326822916667%")
  },
  ImageBackground_300_197: {
    width: wp("7.357769775390626%"),
    height: hp("13.710325089530432%"),
    top: hp("14.098700161637936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.468554687500003%")
  },
  ImageBackground_300_198: {
    width: wp("3.714400227864583%"),
    height: hp("1.4937839765420025%"),
    top: hp("5.604985593140931%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.660091145833334%")
  },
  ImageBackground_300_199: {
    width: wp("5.080464680989583%"),
    height: hp("2.6901205082883366%"),
    top: hp("4.336406015742128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.545703125000003%")
  },
  ImageBackground_300_200: {
    width: wp("3.792976888020833%"),
    height: hp("2.346463181983227%"),
    top: hp("6.5918151763961745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.698697916666667%")
  },
  ImageBackground_300_201: {
    width: wp("8.369141642252604%"),
    height: hp("8.224288277004076%"),
    top: hp("6.580889242878563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.00572916666667%")
  },
  ImageBackground_300_202: {
    width: wp("0.9485677083333333%"),
    height: hp("0.809279732082201%"),
    top: hp("9.598551554300975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.58958333333333%")
  },
  ImageBackground_300_203: {
    width: wp("1.1368896484375%"),
    height: hp("0.21319296406484256%"),
    top: hp("10.791692776658543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.758854166666666%")
  },
  ImageBackground_300_204: {
    width: wp("2.1693379720052084%"),
    height: hp("1.9177381066546804%"),
    top: hp("11.524498980978258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.916536458333333%")
  },
  ImageBackground_300_205: {
    width: wp("3.015594482421875%"),
    height: hp("1.7670072358230065%"),
    top: hp("6.654186334567093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.381770833333334%")
  },
  ImageBackground_300_206: {
    width: wp("3.015594482421875%"),
    height: hp("1.7670072358230065%"),
    top: hp("6.579022500468518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.45286458333333%")
  },
  ImageBackground_300_207: {
    width: wp("7.50150146484375%"),
    height: hp("6.587925557789953%"),
    top: hp("8.898907479853825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.744075520833334%")
  },
  ImageBackground_300_208: {
    width: wp("4.830458577473959%"),
    height: hp("2.2287720504371835%"),
    top: hp("4.1615544766679164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.540625%")
  },
  ImageBackground_300_209: {
    width: wp("5.49578857421875%"),
    height: hp("2.310771456007836%"),
    top: hp("4.125098095483509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.808984375%")
  },
  ImageBackground_300_210: {
    width: wp("2.10333251953125%"),
    height: hp("0.5431190959695934%"),
    top: hp("5.544847205303601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.86634114583334%")
  },
  ImageBackground_300_211: {
    width: wp("5.49498291015625%"),
    height: hp("1.6697987981107103%"),
    top: hp("4.771466805659667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.80553385416667%")
  },
  ImageBackground_300_215: {
    width: wp("4.747214762369792%"),
    height: hp("1.2464649137528403%"),
    top: hp("4.3367171394771376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.871809895833337%")
  },
  ImageBackground_300_216: {
    width: wp("2.0374471028645833%"),
    height: hp("0.3906575993619401%"),
    top: hp("5.544847205303601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.86634114583334%")
  },
  ImageBackground_300_217: {
    width: wp("7.313482666015625%"),
    height: hp("2.1773940262229727%"),
    top: hp("3.720545732992882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.592578124999996%")
  },
  ImageBackground_300_218: {
    width: wp("1.7053304036458334%"),
    height: hp("0.5662703621333864%"),
    top: hp("21.316953827773617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.639713541666666%")
  },
  ImageBackground_300_219: {
    width: wp("0.4606526692708333%"),
    height: hp("0.28547661594007684%"),
    top: hp("21.59993001546102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.391080729166667%")
  },
  ImageBackground_300_220: {
    width: wp("1.4371419270833332%"),
    height: hp("0.7143652599969547%"),
    top: hp("26.850545674428417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.819140625000003%")
  },
  ImageBackground_300_221: {
    width: wp("5.471270751953125%"),
    height: hp("2.7395428567454556%"),
    top: hp("12.58160592555285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.516536458333334%")
  },
  ImageBackground_300_222: {
    width: wp("5.471270751953125%"),
    height: hp("2.7395428567454556%"),
    top: hp("12.58160592555285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.516536458333334%")
  },
  ImageBackground_300_223: {
    width: wp("6.561260986328126%"),
    height: hp("2.7395428567454556%"),
    top: hp("12.58160592555285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.987825520833333%")
  },
  ImageBackground_300_224: {
    width: wp("6.561260986328126%"),
    height: hp("2.7395428567454556%"),
    top: hp("12.58160592555285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.987825520833333%")
  },
  ImageBackground_300_225: {
    width: wp("7.633494059244791%"),
    height: hp("1.095817829000539%"),
    top: hp("11.74547003841829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.987825520833333%")
  },
  ImageBackground_300_226: {
    width: wp("7.452294921875%"),
    height: hp("1.2303525361342766%"),
    top: hp("11.822134587003376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.535481770833336%")
  },
  ImageBackground_300_227: {
    width: wp("6.6706888834635425%"),
    height: hp("3.986056669541206%"),
    top: hp("13.052482547788607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.516536458333334%")
  },
  ImageBackground_300_228: {
    width: wp("5.361846923828125%"),
    height: hp("4.197253637585504%"),
    top: hp("12.841284435907049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.187174479166664%")
  },
  ImageBackground_300_229: {
    width: wp("5.361846923828125%"),
    height: hp("4.197253637585504%"),
    top: hp("12.841284435907049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.187174479166664%")
  },
  ImageBackground_300_230: {
    width: wp("8.651713053385416%"),
    height: hp("1.115360288605697%"),
    top: hp("13.052482547788607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.535481770833336%")
  },
  ImageBackground_300_231: {
    width: wp("8.651713053385416%"),
    height: hp("1.115360288605697%"),
    top: hp("13.052482547788607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.535481770833336%")
  },
  ImageBackground_300_232: {
    width: wp("7.488531494140625%"),
    height: hp("1.2784554683107665%"),
    top: hp("12.841284435907049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.187174479166664%")
  },
  ImageBackground_300_233: {
    width: wp("7.488531494140625%"),
    height: hp("1.2784554683107665%"),
    top: hp("12.841284435907049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.187174479166664%")
  },
  ImageBackground_300_234: {
    width: wp("0.999041748046875%"),
    height: hp("0.905287712589018%"),
    top: hp("15.898752284014243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.49576822916667%")
  },
  ImageBackground_300_235: {
    width: wp("1.1148620605468749%"),
    height: hp("0.5163407218509886%"),
    top: hp("16.383153638024737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.509375%")
  },
  ImageBackground_300_236: {
    width: wp("1.11414794921875%"),
    height: hp("0.2747062442899644%"),
    top: hp("16.54587135143366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.05553385416667%")
  },
  ImageBackground_300_237: {
    width: wp("5.485793050130209%"),
    height: hp("1.783051269165222%"),
    top: hp("14.606014863661919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.101302083333337%")
  },
  ImageBackground_300_238: {
    width: wp("5.485788981119791%"),
    height: hp("1.783051269165222%"),
    top: hp("14.530869330959526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.0302734375%")
  },
  ImageBackground_300_239: {
    width: wp("0.876824951171875%"),
    height: hp("0.628703287516398%"),
    top: hp("14.530869330959526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.027408854166666%")
  },
  ImageBackground_300_240: {
    width: wp("7.9950408935546875%"),
    height: hp("6.5864871824341735%"),
    top: hp("8.74845170188344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.815104166666664%")
  },
  ImageBackground_300_241: {
    width: wp("2.3378580729166667%"),
    height: hp("0.6200604531718515%"),
    top: hp("12.238509651424287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.21302083333333%")
  },
  ImageBackground_300_242: {
    width: wp("1.2010904947916667%"),
    height: hp("0.5934959766210645%"),
    top: hp("12.426410085972641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.349804687500004%")
  },
  ImageBackground_300_243: {
    width: wp("0.2536702473958333%"),
    height: hp("0.3690476539074213%"),
    top: hp("12.651883286872192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.94205729166667%")
  },
  ImageBackground_300_244: {
    width: wp("2.464375813802083%"),
    height: hp("1.1750806039241122%"),
    top: hp("4.221711165901425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.04368489583333%")
  },
  ImageBackground_300_245: {
    width: wp("2.4581013997395833%"),
    height: hp("1.1750823196800038%"),
    top: hp("9.232560233555098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.24778645833333%")
  },
  ImageBackground_300_246: {
    width: wp("1.93890380859375%"),
    height: hp("1.4289918868080609%"),
    top: hp("6.932440762040855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.4119140625%")
  },
  ImageBackground_300_247: {
    width: wp("3.0719726562500003%"),
    height: hp("0.8920283510588456%"),
    top: hp("8.458905312968518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.26966145833333%")
  },
  ImageBackground_300_248: {
    width: wp("3.071968587239583%"),
    height: hp("0.8918127377351364%"),
    top: hp("0.48775050951087096%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.48958333333333%")
  },
  ImageBackground_300_249: {
    width: wp("2.862113444010417%"),
    height: hp("0.995363181141363%"),
    top: hp("0.9881838865723402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.985937500000006%")
  },
  ImageBackground_300_250: {
    width: wp("2.532767740885417%"),
    height: hp("1.1240334346376617%"),
    top: hp("1.9939371134745159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.706966145833334%")
  },
  ImageBackground_300_251: {
    width: wp("2.5292236328124997%"),
    height: hp("1.122923340575806%"),
    top: hp("13.048675857383806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.270377604166676%")
  },
  ImageBackground_300_252: {
    width: wp("2.5263956705729167%"),
    height: hp("1.122868436387275%"),
    top: hp("14.37829059103261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.38515625%")
  },
  ImageBackground_300_253: {
    width: wp("3.07196044921875%"),
    height: hp("0.8920283510588456%"),
    top: hp("2.82723628420165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.659830729166664%")
  },
  ImageBackground_300_254: {
    width: wp("2.8074015299479167%"),
    height: hp("1.0362639420036075%"),
    top: hp("8.392654258808093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.599934895833336%")
  },
  ImageBackground_300_255: {
    width: wp("3.06031494140625%"),
    height: hp("0.9061616042564655%"),
    top: hp("11.767504919415295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.69016927083333%")
  },
  ImageBackground_300_256: {
    width: wp("3.0440104166666666%"),
    height: hp("0.9112219402993815%"),
    top: hp("5.558298731493629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.24707031249999%")
  },
  ImageBackground_300_257: {
    width: wp("2.28905029296875%"),
    height: hp("1.2790136608941622%"),
    top: hp("7.646725953429531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.26757812500001%")
  },
  ImageBackground_300_258: {
    width: wp("3.82705078125%"),
    height: hp("0.3419753136127249%"),
    top: hp("26.747197690217398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.75208333333334%")
  },
  ImageBackground_300_259: {
    width: wp("3.8270426432291664%"),
    height: hp("0.34197073826368063%"),
    top: hp("29.343177532327594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.7765625%")
  },
  ImageBackground_300_260: {
    width: wp("3.8270477294921874%"),
    height: hp("0.3419684505891586%"),
    top: hp("28.01325167494378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.704622395833331%")
  },
  ImageBackground_300_261: {
    width: wp("3.82705078125%"),
    height: hp("0.34197073826368063%"),
    top: hp("29.172205889242875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.290364583333336%")
  },
  ImageBackground_300_262: {
    width: wp("5.714274088541667%"),
    height: hp("0.5110825019619096%"),
    top: hp("26.918169333302103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.33912760416667%")
  },
  ImageBackground_300_263: {
    width: wp("2.9241617838541667%"),
    height: hp("0.9297177888106727%"),
    top: hp("26.059486126077594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.737890625%")
  },
  ImageBackground_300_264: {
    width: wp("4.062073262532552%"),
    height: hp("1.0906991572573088%"),
    top: hp("27.077574494002995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3333984375%")
  },
  ImageBackground_300_265: {
    width: wp("4.060344950358073%"),
    height: hp("0.7788342157046477%"),
    top: hp("27.388679927614326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3333984375%")
  },
  View_300_267: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    minHeight: hp("3.1484257871064467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("28.935532233883052%")
  },
  Text_300_267: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_300_268: {
    width: wp("52.26666666666666%"),
    minWidth: wp("52.26666666666666%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666665%"),
    top: hp("32.8335832083958%")
  },
  Text_300_268: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_300_269: {
    width: wp("64.8%"),
    minWidth: wp("64.8%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666632%"),
    top: hp("35.382308845577214%")
  },
  Text_300_269: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
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
