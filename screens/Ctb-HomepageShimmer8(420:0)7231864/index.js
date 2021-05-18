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
      <View style={styles.View_420_1}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_420_2}
        />
        <View style={styles.View_420_3}>
          <View source={{ uri: "null" }} style={styles.View_420_4} />
          <View style={styles.View_420_5}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_420_6}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_420_7}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_420_10}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_420_13}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_420_16}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_420_17}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_420_23}
          />
          <View style={styles.View_420_30}>
            <View style={styles.View_420_31}>
              <Text style={styles.Text_420_31}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_420_32}>
        <View style={styles.View_420_33} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f4e/9be8/38d244db5d2f5137e75bf8fbfb48c459"
          }}
          style={styles.ImageBackground_420_36}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63d6/9941/106f53ab3243538fb94e4c94e93f7cf5"
          }}
          style={styles.ImageBackground_420_37}
        />
      </View>
      <View style={styles.View_420_38}>
        <View style={styles.View_420_39}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
            }}
            style={styles.ImageBackground_420_40}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef13/00d7/c609e5d4a51d57f75e1f40f5feaed437"
            }}
            style={styles.ImageBackground_420_44}
          />
          <View style={styles.View_449_4} />
          <View style={styles.View_449_5} />
        </View>
        <View style={styles.View_420_45}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
            }}
            style={styles.ImageBackground_420_46}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef13/00d7/c609e5d4a51d57f75e1f40f5feaed437"
            }}
            style={styles.ImageBackground_420_50}
          />
          <View style={styles.View_449_6} />
          <View style={styles.View_449_7} />
        </View>
        <View style={styles.View_420_51}>
          <View style={styles.View_420_52}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/524c/4700/ffce691f3698de1d12f90c4cc0f3757d"
              }}
              style={styles.ImageBackground_420_56}
            />
            <View style={styles.View_420_57} />
            <View style={styles.View_420_58}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1245/e487/cb2f8a46c987db9152c5cad0bb932cfa"
                }}
                style={styles.ImageBackground_420_59}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcad/36cf/d8613bbde1698902aee5d0b90f27bf4f"
                }}
                style={styles.ImageBackground_420_60}
              />
            </View>
            <View style={styles.View_420_62}>
              <Text style={styles.Text_420_62}>
                Let’s play &amp; test your Luck
              </Text>
            </View>
          </View>
          <View style={styles.View_420_63}>
            <View style={styles.View_420_66} />
          </View>
          <View style={styles.View_420_67}>
            <View style={styles.View_420_70} />
          </View>
        </View>
        <View style={styles.View_420_71}>
          <View style={styles.View_420_72} />
          <View style={styles.View_420_73}>
            <Text style={styles.Text_420_73}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
          <View style={styles.View_420_74}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a164/caa5/c3f63ffedf3961ef43ebb39f62c6d56e"
              }}
              style={styles.ImageBackground_420_75}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3f4/f944/39c70f28c003f7b67879991009dbfdeb"
              }}
              style={styles.ImageBackground_420_76}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a14/4a02/95003109e920420fddaf2ff758872c71"
              }}
              style={styles.ImageBackground_420_77}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3f4/f944/39c70f28c003f7b67879991009dbfdeb"
              }}
              style={styles.ImageBackground_420_78}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82de/9b45/b4b0728c81382efa56247f2aa62d6ece"
              }}
              style={styles.ImageBackground_420_79}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3bc/c730/519e35bd7080bb867ebd473e65635094"
              }}
              style={styles.ImageBackground_420_80}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9f1/bc57/0f7e96e00e0e31f8cf07a823f63907a4"
              }}
              style={styles.ImageBackground_420_81}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2289/bea5/986a599eac1db3aacf6284f42ea649ea"
              }}
              style={styles.ImageBackground_420_82}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c67/3a29/ed6bcd882cf2505b28d91676cec2faf2"
              }}
              style={styles.ImageBackground_420_84}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d646/a05d/1c778f9a1c2a5222212f331837d5377b"
              }}
              style={styles.ImageBackground_420_85}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c67/3a29/ed6bcd882cf2505b28d91676cec2faf2"
              }}
              style={styles.ImageBackground_420_86}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c743/9b95/7f1d8542f655c3f1df520b3114084c3b"
              }}
              style={styles.ImageBackground_420_87}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c9/fee9/42cc6afc25f7bf31bf9e290ae9de2c4b"
              }}
              style={styles.ImageBackground_420_88}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91e1/7236/0c586a3a403b54b63eda314ff7f34e5c"
              }}
              style={styles.ImageBackground_420_89}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1de/53d2/de58f43745f2a870637dfe4038589f6c"
              }}
              style={styles.ImageBackground_420_90}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/695f/8e0b/487738bbf138a725dda3c6640a285527"
              }}
              style={styles.ImageBackground_420_92}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fd1/0bb2/5d71f392223b942e5c828a6c9e67c271"
              }}
              style={styles.ImageBackground_420_93}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/695f/8e0b/487738bbf138a725dda3c6640a285527"
              }}
              style={styles.ImageBackground_420_94}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ead0/2719/5bc197771ec009bc02b88db2291587be"
              }}
              style={styles.ImageBackground_420_95}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2aff/5038/a539b361bf050be21538a09ee8101bc6"
              }}
              style={styles.ImageBackground_420_96}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e34/f2e8/faf7c551e3da845b0c0281b942ba5067"
              }}
              style={styles.ImageBackground_420_97}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b3d/f7b7/74a7057ff6f4c112fa9f038b2a488b0e"
              }}
              style={styles.ImageBackground_420_98}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c67/3a29/ed6bcd882cf2505b28d91676cec2faf2"
              }}
              style={styles.ImageBackground_420_100}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d646/a05d/1c778f9a1c2a5222212f331837d5377b"
              }}
              style={styles.ImageBackground_420_101}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c67/3a29/ed6bcd882cf2505b28d91676cec2faf2"
              }}
              style={styles.ImageBackground_420_102}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c743/9b95/7f1d8542f655c3f1df520b3114084c3b"
              }}
              style={styles.ImageBackground_420_103}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4116/2b7f/af5753a72ea369b25a2333a1c9f58fdf"
              }}
              style={styles.ImageBackground_420_104}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c9d/f4a1/275e3e2825eed55e9974b1527e6f13ac"
              }}
              style={styles.ImageBackground_420_105}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53e8/2d5e/33efb1513d1d4310f80ad26e6a993c70"
              }}
              style={styles.ImageBackground_420_106}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3747/c925/45e6510e971ea8f79734ea96a58e23f5"
              }}
              style={styles.ImageBackground_420_108}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4042/eafb/be1915b8337db53c37cf2e34bab1552f"
              }}
              style={styles.ImageBackground_420_109}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f167/f5b2/b05bbae994948dd5d2ecc76883884097"
              }}
              style={styles.ImageBackground_420_110}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1aa/392e/76a3623ba65a280f8dd4de21e7a2f465"
              }}
              style={styles.ImageBackground_420_111}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7c8/4bf9/5533da4ae3865f72d0832dec089b48e6"
              }}
              style={styles.ImageBackground_420_112}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad55/db17/91e0c6986f3e4ca0365612d9f81abeff"
              }}
              style={styles.ImageBackground_420_113}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7c8/4bf9/5533da4ae3865f72d0832dec089b48e6"
              }}
              style={styles.ImageBackground_420_115}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00be/211c/009b3cf95d99a3efc4f921a37d2401f9"
              }}
              style={styles.ImageBackground_420_116}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1aa/392e/76a3623ba65a280f8dd4de21e7a2f465"
              }}
              style={styles.ImageBackground_420_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9590/4667/25eb11c4ac10a0153f111d82c5834bb6"
              }}
              style={styles.ImageBackground_420_118}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/235c/a7a7/75c3de1521d0d46811b4fc0d64ea53c3"
              }}
              style={styles.ImageBackground_420_119}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c586/26f1/dd3091b0e0e4e867d2875a2fe01d38eb"
              }}
              style={styles.ImageBackground_420_120}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a521/aa9c/669db58833f0466eb0fd2e6f067e6d74"
              }}
              style={styles.ImageBackground_420_121}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/ff27/09c871afa170f4ebacd7eec553df2d12"
              }}
              style={styles.ImageBackground_420_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f9e/0069/b3f143e16408aaa34f59d27074e1f28c"
              }}
              style={styles.ImageBackground_420_123}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d05/2c76/600cc30f63e98b0ccbbcbe106f2a55f4"
              }}
              style={styles.ImageBackground_420_124}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e61a/02b7/6607f1884bc8460dd30cf1fa301f999f"
              }}
              style={styles.ImageBackground_420_125}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/397f/4fce/d6f262b0b4651b2d9c4dea32a6db4ca8"
              }}
              style={styles.ImageBackground_420_126}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d05/2c76/600cc30f63e98b0ccbbcbe106f2a55f4"
              }}
              style={styles.ImageBackground_420_127}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a49/c5f1/f9515becf217ebcc61cfbe35bcb5d28a"
              }}
              style={styles.ImageBackground_420_128}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a55/d45e/d4285ff1b1541309317d1467d54124d8"
              }}
              style={styles.ImageBackground_420_129}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51b5/7fa5/75442f0687e07f07c7bc02addb7c8100"
              }}
              style={styles.ImageBackground_420_130}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e61a/02b7/6607f1884bc8460dd30cf1fa301f999f"
              }}
              style={styles.ImageBackground_420_131}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1768/8855/11b0b7c495b9373aaa527cacd1d0aa35"
              }}
              style={styles.ImageBackground_420_132}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a55/d45e/d4285ff1b1541309317d1467d54124d8"
              }}
              style={styles.ImageBackground_420_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a7b/cac8/939e53af9c05c0a989da067dd8ac9213"
              }}
              style={styles.ImageBackground_420_134}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1768/8855/11b0b7c495b9373aaa527cacd1d0aa35"
              }}
              style={styles.ImageBackground_420_135}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cf8/9a26/62ff9d4a5f57e3926a70b1626f1f2f44"
              }}
              style={styles.ImageBackground_420_136}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf48/f0cd/9505998d6bc88c7c57cf6a99e6a72260"
              }}
              style={styles.ImageBackground_420_137}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e51b/ac19/0fa2f86656a1c932242bd9cfce112276"
              }}
              style={styles.ImageBackground_420_139}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/411e/c12e/f20ea12f7c55e3801fe42b7d9c203959"
              }}
              style={styles.ImageBackground_420_141}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ef1/9179/a7f96319d4e54e48267701a308311602"
              }}
              style={styles.ImageBackground_420_143}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e51b/ac19/0fa2f86656a1c932242bd9cfce112276"
              }}
              style={styles.ImageBackground_420_145}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b45/2e46/89d92d778f06e335efbca82635764b32"
              }}
              style={styles.ImageBackground_420_147}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ca0/77ec/2abaf623a8c6b6b02ccd206f8c59fae7"
              }}
              style={styles.ImageBackground_420_149}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7cd/dd00/d514fb3fbe2ef27d5a0ef6bff7b20efc"
              }}
              style={styles.ImageBackground_420_151}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/411e/c12e/f20ea12f7c55e3801fe42b7d9c203959"
              }}
              style={styles.ImageBackground_420_153}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5459/e1c9/07b834862a7c4504a1ff0da035ea345a"
              }}
              style={styles.ImageBackground_420_155}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ca0/77ec/2abaf623a8c6b6b02ccd206f8c59fae7"
              }}
              style={styles.ImageBackground_420_157}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c557/fcbe/785bb4781fcfcfe5ba77e7b8dd475839"
              }}
              style={styles.ImageBackground_420_159}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5459/e1c9/07b834862a7c4504a1ff0da035ea345a"
              }}
              style={styles.ImageBackground_420_161}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0194/7031/fb33ffabef04d7d5d230bc0c7541c961"
              }}
              style={styles.ImageBackground_420_163}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf0d/9d52/efc7d16d4ae489d2e1f68ddfa88bd7f3"
              }}
              style={styles.ImageBackground_420_165}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1819/da91/64ccbb2cf03de34bbbf7ae4b64f0910d"
              }}
              style={styles.ImageBackground_420_166}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e08/995d/25096406c472c7642a44a3039aeeab71"
              }}
              style={styles.ImageBackground_420_167}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e08/995d/25096406c472c7642a44a3039aeeab71"
              }}
              style={styles.ImageBackground_420_168}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e08/995d/25096406c472c7642a44a3039aeeab71"
              }}
              style={styles.ImageBackground_420_169}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d367/9f00/f6d4f5108c68a12014c7703c6e0ce525"
              }}
              style={styles.ImageBackground_420_170}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/359c/b5cd/98b4882d57410dd20b9af0d398d7e6dc"
              }}
              style={styles.ImageBackground_420_171}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/b520/7da862698066d7594e0f44704f3e3b5d"
              }}
              style={styles.ImageBackground_420_172}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1305/153a/f37f0283d4b05e92c2cf8af3458ccc9a"
              }}
              style={styles.ImageBackground_420_173}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1305/153a/f37f0283d4b05e92c2cf8af3458ccc9a"
              }}
              style={styles.ImageBackground_420_174}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1305/153a/f37f0283d4b05e92c2cf8af3458ccc9a"
              }}
              style={styles.ImageBackground_420_175}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1305/153a/f37f0283d4b05e92c2cf8af3458ccc9a"
              }}
              style={styles.ImageBackground_420_176}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1305/153a/f37f0283d4b05e92c2cf8af3458ccc9a"
              }}
              style={styles.ImageBackground_420_177}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1305/153a/f37f0283d4b05e92c2cf8af3458ccc9a"
              }}
              style={styles.ImageBackground_420_178}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b201/95b7/155a7fddbe01546075f3ad0534984ba9"
              }}
              style={styles.ImageBackground_420_179}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b201/95b7/155a7fddbe01546075f3ad0534984ba9"
              }}
              style={styles.ImageBackground_420_180}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b201/95b7/155a7fddbe01546075f3ad0534984ba9"
              }}
              style={styles.ImageBackground_420_181}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b201/95b7/155a7fddbe01546075f3ad0534984ba9"
              }}
              style={styles.ImageBackground_420_182}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b201/95b7/155a7fddbe01546075f3ad0534984ba9"
              }}
              style={styles.ImageBackground_420_183}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9071/59ac/7e58621d90fc6f7657fbe0babfd0ebd3"
              }}
              style={styles.ImageBackground_420_184}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9071/59ac/7e58621d90fc6f7657fbe0babfd0ebd3"
              }}
              style={styles.ImageBackground_420_185}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a59c/d31d/1479266f3da565532eef45d324edbed2"
              }}
              style={styles.ImageBackground_420_186}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38ff/780b/229691b65940d186580fbf23022d7128"
              }}
              style={styles.ImageBackground_420_187}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38ff/780b/229691b65940d186580fbf23022d7128"
              }}
              style={styles.ImageBackground_420_188}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38ff/780b/229691b65940d186580fbf23022d7128"
              }}
              style={styles.ImageBackground_420_189}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d27/e5ad/2ad71399e078555a2b5f66dfd3caf7cc"
              }}
              style={styles.ImageBackground_420_190}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/139c/44b5/89d7c015f2cc0431b1c36fff169c0e92"
              }}
              style={styles.ImageBackground_420_191}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/139c/44b5/89d7c015f2cc0431b1c36fff169c0e92"
              }}
              style={styles.ImageBackground_420_192}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/139c/44b5/89d7c015f2cc0431b1c36fff169c0e92"
              }}
              style={styles.ImageBackground_420_193}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/139c/44b5/89d7c015f2cc0431b1c36fff169c0e92"
              }}
              style={styles.ImageBackground_420_194}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1e7/815a/84bf1ac73a5679ad6b98d04d61278f57"
              }}
              style={styles.ImageBackground_420_195}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a0d/995b/e7f68e5542653cc36224e4b4498314b6"
              }}
              style={styles.ImageBackground_420_196}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a0d/995b/e7f68e5542653cc36224e4b4498314b6"
              }}
              style={styles.ImageBackground_420_197}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a0d/995b/e7f68e5542653cc36224e4b4498314b6"
              }}
              style={styles.ImageBackground_420_198}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ae6/b6c5/f15b352892af9cdcdf496ab74bbe8e48"
              }}
              style={styles.ImageBackground_420_199}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7680/6971/2529a6c73d0f66decf3901e1fa3b4d14"
              }}
              style={styles.ImageBackground_420_200}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1919/3552/f14cec34f8673cbc77704a3d47997bee"
              }}
              style={styles.ImageBackground_420_201}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ae6/b6c5/f15b352892af9cdcdf496ab74bbe8e48"
              }}
              style={styles.ImageBackground_420_202}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7680/6971/2529a6c73d0f66decf3901e1fa3b4d14"
              }}
              style={styles.ImageBackground_420_203}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1919/3552/f14cec34f8673cbc77704a3d47997bee"
              }}
              style={styles.ImageBackground_420_204}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ae6/b6c5/f15b352892af9cdcdf496ab74bbe8e48"
              }}
              style={styles.ImageBackground_420_205}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7680/6971/2529a6c73d0f66decf3901e1fa3b4d14"
              }}
              style={styles.ImageBackground_420_206}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1919/3552/f14cec34f8673cbc77704a3d47997bee"
              }}
              style={styles.ImageBackground_420_207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ae6/b6c5/f15b352892af9cdcdf496ab74bbe8e48"
              }}
              style={styles.ImageBackground_420_208}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7680/6971/2529a6c73d0f66decf3901e1fa3b4d14"
              }}
              style={styles.ImageBackground_420_209}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1919/3552/f14cec34f8673cbc77704a3d47997bee"
              }}
              style={styles.ImageBackground_420_210}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ae6/b6c5/f15b352892af9cdcdf496ab74bbe8e48"
              }}
              style={styles.ImageBackground_420_211}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7680/6971/2529a6c73d0f66decf3901e1fa3b4d14"
              }}
              style={styles.ImageBackground_420_212}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1919/3552/f14cec34f8673cbc77704a3d47997bee"
              }}
              style={styles.ImageBackground_420_213}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ae6/b6c5/f15b352892af9cdcdf496ab74bbe8e48"
              }}
              style={styles.ImageBackground_420_214}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7680/6971/2529a6c73d0f66decf3901e1fa3b4d14"
              }}
              style={styles.ImageBackground_420_215}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1919/3552/f14cec34f8673cbc77704a3d47997bee"
              }}
              style={styles.ImageBackground_420_216}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ae6/b6c5/f15b352892af9cdcdf496ab74bbe8e48"
              }}
              style={styles.ImageBackground_420_217}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7680/6971/2529a6c73d0f66decf3901e1fa3b4d14"
              }}
              style={styles.ImageBackground_420_218}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1919/3552/f14cec34f8673cbc77704a3d47997bee"
              }}
              style={styles.ImageBackground_420_219}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1912/fd5c/d48a2e5879a034f21f813f441c55fd30"
              }}
              style={styles.ImageBackground_420_220}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1912/fd5c/d48a2e5879a034f21f813f441c55fd30"
              }}
              style={styles.ImageBackground_420_222}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1912/fd5c/d48a2e5879a034f21f813f441c55fd30"
              }}
              style={styles.ImageBackground_420_224}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1912/fd5c/d48a2e5879a034f21f813f441c55fd30"
              }}
              style={styles.ImageBackground_420_226}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ba1/9f95/1786de1f6342fce00d104a6eff2f68e3"
              }}
              style={styles.ImageBackground_420_228}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ba1/9f95/1786de1f6342fce00d104a6eff2f68e3"
              }}
              style={styles.ImageBackground_420_230}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ea6/5e27/3eace47d9957e7e4c62b32fb730eaf41"
              }}
              style={styles.ImageBackground_420_232}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d303/ed11/6f1cefc2b7c7a2d32ee93c29860b818c"
              }}
              style={styles.ImageBackground_420_233}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ea6/5e27/3eace47d9957e7e4c62b32fb730eaf41"
              }}
              style={styles.ImageBackground_420_234}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e44/ee5a/a47f6d94f2371220917ffa0631c3d29a"
              }}
              style={styles.ImageBackground_420_235}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9b9/e656/30a265e29ce3a103f64c8e532c6a5e97"
              }}
              style={styles.ImageBackground_420_236}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ada/246e/adcb55225318f59d026f080044b8bea0"
              }}
              style={styles.ImageBackground_420_237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb14/07e5/88c28152bb65e98e72429f6e11974d67"
              }}
              style={styles.ImageBackground_420_238}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c4d/3135/8328b2adf2da64835b91bef44d864bf4"
              }}
              style={styles.ImageBackground_420_239}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b06/42d9/0fcdf34aa861daf4446885b8c3c75225"
              }}
              style={styles.ImageBackground_420_240}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dd9/ca02/b225e7159b57e350a39deb8645feca14"
              }}
              style={styles.ImageBackground_420_241}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad3d/6f66/6bc45c551a220d4896143d8cf41a8725"
              }}
              style={styles.ImageBackground_420_242}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e293/a632/7e155e57d3cebd47b975bffea2d33bd0"
              }}
              style={styles.ImageBackground_420_243}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78b1/9b7c/fc00615ec24d27c00583544979bc886e"
              }}
              style={styles.ImageBackground_420_244}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c4d/3135/8328b2adf2da64835b91bef44d864bf4"
              }}
              style={styles.ImageBackground_420_245}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b06/42d9/0fcdf34aa861daf4446885b8c3c75225"
              }}
              style={styles.ImageBackground_420_246}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dd9/ca02/b225e7159b57e350a39deb8645feca14"
              }}
              style={styles.ImageBackground_420_247}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad3d/6f66/6bc45c551a220d4896143d8cf41a8725"
              }}
              style={styles.ImageBackground_420_248}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e293/a632/7e155e57d3cebd47b975bffea2d33bd0"
              }}
              style={styles.ImageBackground_420_249}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78b1/9b7c/fc00615ec24d27c00583544979bc886e"
              }}
              style={styles.ImageBackground_420_250}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f80/971e/e0cde8ad62a1e71ebc63748241600248"
              }}
              style={styles.ImageBackground_420_251}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd06/7e8b/df10b8bfd8933eed7e7b30ac1aedc919"
              }}
              style={styles.ImageBackground_420_252}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f80/971e/e0cde8ad62a1e71ebc63748241600248"
              }}
              style={styles.ImageBackground_420_253}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aa4/aeae/22e1da85aac4ca4a31b3e10fc7deab9b"
              }}
              style={styles.ImageBackground_420_254}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b18/9283/a74c8372b212c2671f2a451b68ea4d8b"
              }}
              style={styles.ImageBackground_420_255}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a8/21a7/911f4ce595bfdf9e421e8e3f4065ce61"
              }}
              style={styles.ImageBackground_420_256}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5547/7f3c/55c2b7a5f450dc09806a0aa1fc63cc3c"
              }}
              style={styles.ImageBackground_420_257}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25ad/510a/764e908f1eb3d76b2deb513f573dedf2"
              }}
              style={styles.ImageBackground_420_258}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ff8/b865/fa03c2c55311ad29238492a438ed775f"
              }}
              style={styles.ImageBackground_420_259}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/912e/6c7d/3fe3e6f6e5280f0f049e638adc4bb914"
              }}
              style={styles.ImageBackground_420_260}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed92/c8e1/e1080e3dbabcfdfebe3563f7c0c645f7"
              }}
              style={styles.ImageBackground_420_261}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f9b/c661/354e7e69718cda7966981007d9a55901"
              }}
              style={styles.ImageBackground_420_262}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07ea/a13f/c1ad6bc5f0c115d048fabfb77da38521"
              }}
              style={styles.ImageBackground_420_263}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7396/8c41/a3ff7d634d8a269481f824e08c4f4bb4"
              }}
              style={styles.ImageBackground_420_264}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af01/6989/97b219be71f6544553d87cd7040e9a63"
              }}
              style={styles.ImageBackground_420_265}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddb3/6a57/f18d33a1c83a0286eb2e9c568d54a6d3"
              }}
              style={styles.ImageBackground_420_266}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1759/795a/99b708eff4b1171576d31a385ca8f507"
              }}
              style={styles.ImageBackground_420_267}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddb3/6a57/f18d33a1c83a0286eb2e9c568d54a6d3"
              }}
              style={styles.ImageBackground_420_268}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b880/fec5/bda7822e64f49bfcb24fcee9d651adf8"
              }}
              style={styles.ImageBackground_420_269}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b880/fec5/bda7822e64f49bfcb24fcee9d651adf8"
              }}
              style={styles.ImageBackground_420_270}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b880/fec5/bda7822e64f49bfcb24fcee9d651adf8"
              }}
              style={styles.ImageBackground_420_271}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b64e/da82/e9f66aa0f858e609c3a2bbab74949a44"
              }}
              style={styles.ImageBackground_420_272}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed92/c8e1/e1080e3dbabcfdfebe3563f7c0c645f7"
              }}
              style={styles.ImageBackground_420_273}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dec/feb9/660f87b9214c27e8144322c33a85bc85"
              }}
              style={styles.ImageBackground_420_274}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ef4/b4c3/06dffa051cdbebf5c4ab48a5d5d5bef1"
              }}
              style={styles.ImageBackground_420_275}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08ed/038c/661b1188771e211896189f36a21a1859"
              }}
              style={styles.ImageBackground_420_276}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a7c/f98d/1d23f05e267ed523032d76a42d08ef30"
              }}
              style={styles.ImageBackground_420_277}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4fe/0ced/3fbe44f4752c429d9cf7a430e6e0dbfd"
              }}
              style={styles.ImageBackground_420_278}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17c4/c074/a45a5799a888cdfd29610400f27731f3"
              }}
              style={styles.ImageBackground_420_279}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23f7/39cf/434994e22213de7e0fa2744f0022201d"
              }}
              style={styles.ImageBackground_420_280}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/082e/e5b3/c7b60cf866b1f2a5ddd8fd5537a7dbb9"
              }}
              style={styles.ImageBackground_420_281}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e997/fb1c/abcba5ea40f5a6db4f310d3370a74cc4"
              }}
              style={styles.ImageBackground_420_282}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b35/ff3e/94d8b27fc5c126764abd7c4d8ae221e4"
              }}
              style={styles.ImageBackground_420_283}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac44/3b85/0c077802ce47341e1fe8277ce6af2911"
              }}
              style={styles.ImageBackground_420_284}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b66/ef6b/57453004e088908071ad33b37c194d43"
              }}
              style={styles.ImageBackground_420_286}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a66/e536/f194a1fbd67e6a53ce134b40cc474b2c"
              }}
              style={styles.ImageBackground_420_288}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_420_289}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a66/e536/f194a1fbd67e6a53ce134b40cc474b2c"
              }}
              style={styles.ImageBackground_420_290}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_420_291}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac44/3b85/0c077802ce47341e1fe8277ce6af2911"
              }}
              style={styles.ImageBackground_420_292}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf99/04e4/91490efd16b9d0d9b8937517fc0bb247"
              }}
              style={styles.ImageBackground_420_294}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b899/c27c/6555f5b5beb078fe4f223194d334bcd2"
              }}
              style={styles.ImageBackground_420_295}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb90/3ba8/fc36ef948ed0445865dbefed2ce599ca"
              }}
              style={styles.ImageBackground_420_296}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14b6/1f00/b3ecaae513d7a2241c21303cfced8346"
              }}
              style={styles.ImageBackground_420_297}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c12a/9509/1b761435f427323d0d27b7486eac75fe"
              }}
              style={styles.ImageBackground_420_298}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6da/4011/ca5cc4053fa5da70bf5acb0d62964d1d"
              }}
              style={styles.ImageBackground_420_299}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ff8/150e/cef4b31312f315f65c733c803286ed1e"
              }}
              style={styles.ImageBackground_420_300}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a879/7ddb/a43ce462dfd81616a889962429b357ec"
              }}
              style={styles.ImageBackground_420_301}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c70f/6240/317d8bf86e7defb3ced00058bf01a8c9"
              }}
              style={styles.ImageBackground_420_302}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/618c/aa8d/998a6af4f3df72c655eabe8efd6fa1d2"
              }}
              style={styles.ImageBackground_420_303}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b13/abae/d52c35abc7f50d389c28b0bf6242a22c"
              }}
              style={styles.ImageBackground_420_304}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9743/5c05/cef0c51d9113dc4d7254224f4f7ad476"
              }}
              style={styles.ImageBackground_420_305}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/724e/a437/1344fd54bddc2af63216bb0043c5f2da"
              }}
              style={styles.ImageBackground_420_306}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a99f/e9c8/75f8cc5b55ed863492fe2357d7177cca"
              }}
              style={styles.ImageBackground_420_307}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc35/a32e/964665aacdc93943fb0469ba63071039"
              }}
              style={styles.ImageBackground_420_308}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6af7/2a6d/94309abbf7802438c32273ebd12e8423"
              }}
              style={styles.ImageBackground_420_309}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0816/298e/07f37c9a3835b8172251ba15aa2b1590"
              }}
              style={styles.ImageBackground_420_310}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9154/1c9a/a6b94cf144fbdc798dddef1136ebbb2f"
              }}
              style={styles.ImageBackground_420_311}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e22b/659d/08b0dd9b6b19f8cf40944076981e332f"
              }}
              style={styles.ImageBackground_420_312}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f945/d8ae/9adb42a415349d3d975f19517baeb601"
              }}
              style={styles.ImageBackground_420_313}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7e3/1d80/de7777bf9f51a5ed785d601ac2a16197"
              }}
              style={styles.ImageBackground_420_314}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e946/1776/5335ad62a5fb26bf167526a4f7749c4a"
              }}
              style={styles.ImageBackground_420_315}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bc9/9077/f22b480d495a100c38c99c92bd7f6c56"
              }}
              style={styles.ImageBackground_420_316}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a07a/e8c1/d211f54368381a9b56ffcb17ed1b539c"
              }}
              style={styles.ImageBackground_420_317}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e75/cc6b/c502c41a39d3e5063e32fce49468647f"
              }}
              style={styles.ImageBackground_420_318}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab42/2e46/5f39d3d2a2bb1589de26f3e29e2d1777"
              }}
              style={styles.ImageBackground_420_319}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcc2/16b0/958c69784b72a3aa37170a18b38e680d"
              }}
              style={styles.ImageBackground_420_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3833/1538/d82dd294d0094d327e4ab5c4e50a4a1d"
              }}
              style={styles.ImageBackground_420_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a44d/cf6e/e77bf14aa833414a3c0705ed192fa023"
              }}
              style={styles.ImageBackground_420_322}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f3f/f7fd/23cda6977e71e99692a69a369363eab2"
            }}
            style={styles.ImageBackground_420_323}
          />
        </View>
        <View style={styles.View_449_12} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd4/8361/a453468b5d3eebe33a8c9a8cb30099d5"
        }}
        style={styles.ImageBackground_449_10}
      />
      <View style={styles.View_420_342}>
        <Text style={styles.Text_420_342}>Recent Activity</Text>
      </View>
      <View style={styles.View_420_344}>
        <View style={styles.View_420_345} />
        <View style={styles.View_420_346}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046c/059c/9541d9159f8c6f69cfb7b2236d130b14"
            }}
            style={styles.ImageBackground_420_347}
          />
          <View style={styles.View_420_349}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf39/fc2c/e5c31b774f6bc26423bcfb7b50efebc9"
              }}
              style={styles.ImageBackground_420_350}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b580/5d51/7aff626a6634a6ae5a3bcc494e9c2105"
              }}
              style={styles.ImageBackground_420_351}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f74a/31c9/c62f940257c89b9b595980f1c170775a"
            }}
            style={styles.ImageBackground_420_352}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97bf/cc1c/0748205e22266d0d07972451054e01c1"
            }}
            style={styles.ImageBackground_420_354}
          />
          <View style={styles.View_420_356}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1103/e1ec/71812e15609825ae35c52f7c0ef956b3"
              }}
              style={styles.ImageBackground_420_357}
            />
            <View style={styles.View_420_358}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/856e/e583/12321cb6c7ce8d9493474eed2a3bd518"
                }}
                style={styles.ImageBackground_420_359}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/5224/c100cf6f9e057cd72950e27f9fc411ae"
                }}
                style={styles.ImageBackground_420_360}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_420_361}>
        <View style={styles.View_420_362}>
          <View style={styles.View_449_2} />
          <View style={styles.View_449_3} />
        </View>
        <View style={styles.View_420_367}>
          <View style={styles.View_420_368}>
            <View style={styles.View_420_369} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31f6/a06e/809fa1ee608238e2f47dc43df67ba281"
          }}
          style={styles.ImageBackground_420_372}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_420_1: {
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
  ImageBackground_420_2: {
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
  View_420_3: {
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
  View_420_4: {
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
  View_420_5: {
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
  ImageBackground_420_6: {
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
  ImageBackground_420_7: {
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
  ImageBackground_420_10: {
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
  ImageBackground_420_13: {
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
  ImageBackground_420_16: {
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
  ImageBackground_420_17: {
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
  ImageBackground_420_23: {
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
  View_420_30: {
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
  View_420_31: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_420_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_420_32: {
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
  View_420_33: {
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
  ImageBackground_420_36: {
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
  ImageBackground_420_37: {
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
  View_420_38: {
    width: wp("96.26666666666667%"),
    minWidth: wp("96.26666666666667%"),
    height: hp("62.368815592203894%"),
    minHeight: hp("62.368815592203894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("19.1904047976012%")
  },
  View_420_39: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.67916041979011%")
  },
  ImageBackground_420_40: {
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
  ImageBackground_420_44: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.199999999999999%"),
    top: hp("1.7991004497751035%")
  },
  View_449_4: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("1.949025487256371%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_449_5: {
    width: wp("54.400000000000006%"),
    minWidth: wp("54.400000000000006%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("5.247376311844079%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_420_45: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52.77361319340329%")
  },
  ImageBackground_420_46: {
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
  ImageBackground_420_50: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.199999999999999%"),
    top: hp("1.7991004497751106%")
  },
  View_449_6: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("2.248875562218899%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_449_7: {
    width: wp("54.400000000000006%"),
    minWidth: wp("54.400000000000006%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("5.547226386806599%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_420_51: {
    width: wp("96.26666666666667%"),
    minWidth: wp("96.26666666666667%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.68665667166417%")
  },
  View_420_52: {
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
  ImageBackground_420_56: {
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
  View_420_57: {
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
  View_420_58: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    height: hp("4.3478260869565215%"),
    minHeight: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("0.7496251874062878%")
  },
  ImageBackground_420_59: {
    flexGrow: 1,
    width: wp("13.77762451171875%"),
    height: hp("3.5567036275563386%"),
    minHeight: hp("3.5567036275563386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.489029947916666%"),
    top: hp("0.7911327539355426%")
  },
  ImageBackground_420_60: {
    width: wp("8.391234334309896%"),
    height: hp("4.2193202600665005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_420_62: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9999999999999996%"),
    top: hp("5.2473763118440715%")
  },
  Text_420_62: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_420_63: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_420_66: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(204, 204, 204, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_420_67: {
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
  View_420_70: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%"),
    backgroundColor: "rgba(204, 204, 204, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 5
  },
  View_420_71: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("23.238380809595203%"),
    minHeight: hp("23.238380809595203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.6491754122938538%")
  },
  View_420_72: {
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
  View_420_73: {
    width: wp("33.6%"),
    top: hp("5.847076461769113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.8%")
  },
  Text_420_73: {
    color: "rgba(52, 52, 52, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_420_74: {
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
  ImageBackground_420_75: {
    width: wp("52.51706949869792%"),
    height: hp("18.90558588808623%"),
    top: hp("2.1189539507589927%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.604524739583333%")
  },
  ImageBackground_420_76: {
    width: wp("5.999055989583333%"),
    height: hp("2.833529104893354%"),
    top: hp("6.569057390250187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.47552083333333%")
  },
  ImageBackground_420_77: {
    width: wp("5.999055989583333%"),
    height: hp("2.833529104893354%"),
    top: hp("6.569057390250187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.47552083333333%")
  },
  ImageBackground_420_78: {
    width: wp("5.99775390625%"),
    height: hp("2.832889127945793%"),
    top: hp("6.554141752366004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.23668619791667%")
  },
  ImageBackground_420_79: {
    width: wp("5.99775390625%"),
    height: hp("2.832889127945793%"),
    top: hp("6.554141752366004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.23668619791667%")
  },
  ImageBackground_420_80: {
    width: wp("4.810770670572917%"),
    height: hp("2.272303065081229%"),
    top: hp("6.83250598821683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.830859374999996%")
  },
  ImageBackground_420_81: {
    width: wp("4.097334798177084%"),
    height: hp("1.9623346057074003%"),
    top: hp("6.82486515531297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.81080729166666%")
  },
  ImageBackground_420_82: {
    width: wp("1.5596435546875%"),
    height: hp("1.5786607047428434%"),
    top: hp("7.180076953710646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.44453125%")
  },
  ImageBackground_420_84: {
    width: wp("3.1316101074218747%"),
    height: hp("1.4791359965769069%"),
    top: hp("4.335472644537109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.12652994791667%")
  },
  ImageBackground_420_85: {
    width: wp("3.1316101074218747%"),
    height: hp("1.4791359965769069%"),
    top: hp("4.335472644537109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.12652994791667%")
  },
  ImageBackground_420_86: {
    width: wp("3.1308919270833333%"),
    height: hp("1.4788019960966783%"),
    top: hp("4.328106332575899%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.002083333333335%")
  },
  ImageBackground_420_87: {
    width: wp("3.1308919270833333%"),
    height: hp("1.4788019960966783%"),
    top: hp("4.328106332575899%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.002083333333335%")
  },
  ImageBackground_420_88: {
    width: wp("2.5120585123697916%"),
    height: hp("1.1864995313012439%"),
    top: hp("4.472870376335269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.311914062499998%")
  },
  ImageBackground_420_89: {
    width: wp("2.1533365885416664%"),
    height: hp("1.0306222506727591%"),
    top: hp("4.462347073533547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.288020833333334%")
  },
  ImageBackground_420_90: {
    width: wp("0.8139750162760417%"),
    height: hp("0.8247687183934889%"),
    top: hp("4.65426466454273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.155240885416667%")
  },
  ImageBackground_420_92: {
    width: wp("4.662991333007812%"),
    height: hp("2.2024357694199774%"),
    top: hp("10.08857143693778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.614680989583333%")
  },
  ImageBackground_420_93: {
    width: wp("4.662991333007812%"),
    height: hp("2.2024357694199774%"),
    top: hp("10.08857143693778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.614680989583333%")
  },
  ImageBackground_420_94: {
    width: wp("4.661918131510417%"),
    height: hp("2.2019404878859397%"),
    top: hp("10.076025829858509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.427278645833333%")
  },
  ImageBackground_420_95: {
    width: wp("4.661918131510417%"),
    height: hp("2.2019404878859397%"),
    top: hp("10.076025829858509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.427278645833333%")
  },
  ImageBackground_420_96: {
    width: wp("3.7389851888020833%"),
    height: hp("1.7660138131617784%"),
    top: hp("10.293190196893743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.890592447916665%")
  },
  ImageBackground_420_97: {
    width: wp("3.167692057291667%"),
    height: hp("1.517966983915269%"),
    top: hp("10.294892226738195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.891569010416664%")
  },
  ImageBackground_420_98: {
    width: wp("1.2099395751953126%"),
    height: hp("1.2265996060807487%"),
    top: hp("10.563035132824211%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.14384765625%")
  },
  ImageBackground_420_100: {
    width: wp("2.9617919921875%"),
    height: hp("1.3989518607395521%"),
    top: hp("5.258164984890367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.37721354166666%")
  },
  ImageBackground_420_101: {
    width: wp("2.9617919921875%"),
    height: hp("1.3989518607395521%"),
    top: hp("5.258164984890367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.37721354166666%")
  },
  ImageBackground_420_102: {
    width: wp("2.9683797200520834%"),
    height: hp("1.402043652856189%"),
    top: hp("5.367223004708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.32591145833333%")
  },
  ImageBackground_420_103: {
    width: wp("2.9683797200520834%"),
    height: hp("1.402043652856189%"),
    top: hp("5.367223004708581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.32591145833333%")
  },
  ImageBackground_420_104: {
    width: wp("2.3749593098958335%"),
    height: hp("1.1218178218629942%"),
    top: hp("5.388443473575709%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.5533203125%")
  },
  ImageBackground_420_105: {
    width: wp("2.0589070638020837%"),
    height: hp("0.9853105673725637%"),
    top: hp("5.3680831703288945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.50807291666667%")
  },
  ImageBackground_420_106: {
    width: wp("0.76943359375%"),
    height: hp("0.7796480559158897%"),
    top: hp("5.5603850906577925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.35%")
  },
  ImageBackground_420_108: {
    width: wp("49.03595784505209%"),
    height: hp("0.05809549448908359%"),
    top: hp("20.992973361951833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.177083333333332%")
  },
  ImageBackground_420_109: {
    width: wp("15.775223795572918%"),
    height: hp("0.520345296101949%"),
    top: hp("20.510392996860944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.14270833333333%")
  },
  ImageBackground_420_110: {
    width: wp("15.775223795572918%"),
    height: hp("0.520345296101949%"),
    top: hp("20.510392996860944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.14270833333333%")
  },
  ImageBackground_420_111: {
    width: wp("5.190641276041666%"),
    height: hp("1.263404857629779%"),
    top: hp("19.507064704952207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.67610677083333%")
  },
  ImageBackground_420_112: {
    width: wp("29.479854329427084%"),
    height: hp("10.074807643175482%"),
    top: hp("9.430910765320466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.554036458333332%")
  },
  ImageBackground_420_113: {
    width: wp("29.479854329427084%"),
    height: hp("10.074807643175482%"),
    top: hp("9.430910765320466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.554036458333332%")
  },
  ImageBackground_420_115: {
    width: wp("29.479860432942708%"),
    height: hp("10.074807643175482%"),
    top: hp("9.430910765320466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.082552083333336%")
  },
  ImageBackground_420_116: {
    width: wp("5.190641276041666%"),
    height: hp("1.263404857629779%"),
    top: hp("19.507064704952207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.67610677083333%")
  },
  ImageBackground_420_117: {
    width: wp("5.190596516927084%"),
    height: hp("1.263404857629779%"),
    top: hp("19.507064704952207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.22718098958333%")
  },
  ImageBackground_420_118: {
    width: wp("5.192561848958333%"),
    height: hp("0.22289727938764994%"),
    top: hp("19.507064704952207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.217447916666664%")
  },
  ImageBackground_420_119: {
    width: wp("15.322928873697917%"),
    height: hp("0.44540107875749624%"),
    top: hp("20.585337214205396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.15999348958333%")
  },
  ImageBackground_420_120: {
    width: wp("1.0619099934895833%"),
    height: hp("0.5015692074616989%"),
    top: hp("18.652471859773236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.263248697916666%")
  },
  ImageBackground_420_121: {
    width: wp("0.6096720377604167%"),
    height: hp("0.5015692074616989%"),
    top: hp("18.652471859773236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.71552734375%")
  },
  ImageBackground_420_122: {
    width: wp("28.071101888020834%"),
    height: hp("8.602848081574448%"),
    top: hp("9.715204653532606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.786914062499996%")
  },
  ImageBackground_420_123: {
    width: wp("0.9356201171875%"),
    height: hp("4.9348639584016585%"),
    top: hp("11.99314283288043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.976725260416664%")
  },
  ImageBackground_420_124: {
    width: wp("0.9356221516927085%"),
    height: hp("3.258795788263095%"),
    top: hp("13.669376859421853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.7828125%")
  },
  ImageBackground_420_125: {
    width: wp("0.9356160481770834%"),
    height: hp("4.346544989224138%"),
    top: hp("12.606623934126688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.589192708333336%")
  },
  ImageBackground_420_126: {
    width: wp("0.9356201171875%"),
    height: hp("4.744309821407656%"),
    top: hp("12.18388913453429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.39527994791666%")
  },
  ImageBackground_420_127: {
    width: wp("0.9356201171875%"),
    height: hp("3.15848240430566%"),
    top: hp("13.769732565357941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.2013671875%")
  },
  ImageBackground_420_128: {
    width: wp("0.9356201171875%"),
    height: hp("2.5391883220987164%"),
    top: hp("14.388987757098015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.007421875%")
  },
  ImageBackground_420_129: {
    width: wp("0.9356241861979167%"),
    height: hp("4.428460894674733%"),
    top: hp("12.499762081849696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.81383463541666%")
  },
  ImageBackground_420_130: {
    width: wp("0.9356282552083333%"),
    height: hp("3.6300373220372237%"),
    top: hp("13.298133037973194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.619921875%")
  },
  ImageBackground_420_131: {
    width: wp("0.9356201171875%"),
    height: hp("4.268107492884417%"),
    top: hp("12.660082312359442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.4259765625%")
  },
  ImageBackground_420_132: {
    width: wp("0.9356241861979167%"),
    height: hp("2.907701804005224%"),
    top: hp("14.0204891450759%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.23203125%")
  },
  ImageBackground_420_133: {
    width: wp("0.9356160481770834%"),
    height: hp("4.428460894674733%"),
    top: hp("12.499762081849696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.83470052083334%")
  },
  ImageBackground_420_134: {
    width: wp("0.9356241861979167%"),
    height: hp("1.515336158214838%"),
    top: hp("15.348950890765558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.67067057291666%")
  },
  ImageBackground_420_135: {
    width: wp("0.9356119791666667%"),
    height: hp("2.907701804005224%"),
    top: hp("14.0204891450759%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.80065104166666%")
  },
  ImageBackground_420_136: {
    width: wp("0.9356201171875%"),
    height: hp("3.460970167992176%"),
    top: hp("13.467228787949772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.038509114583334%")
  },
  ImageBackground_420_137: {
    width: wp("0.9356180826822916%"),
    height: hp("4.934871965262485%"),
    top: hp("11.974713326930285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.9375%")
  },
  ImageBackground_420_139: {
    width: wp("0.9356201171875%"),
    height: hp("3.258795788263095%"),
    top: hp("13.650810093000374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.74342447916667%")
  },
  ImageBackground_420_141: {
    width: wp("0.9356201171875%"),
    height: hp("4.346554139922226%"),
    top: hp("12.588011414214769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.549967447916664%")
  },
  ImageBackground_420_143: {
    width: wp("0.9356160481770834%"),
    height: hp("4.744309821407656%"),
    top: hp("12.165267463924287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.3560546875%")
  },
  ImageBackground_420_145: {
    width: wp("0.9355997721354167%"),
    height: hp("3.15848240430566%"),
    top: hp("13.751110894747939%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.16197916666667%")
  },
  ImageBackground_420_147: {
    width: wp("0.9356241861979167%"),
    height: hp("2.5391883220987164%"),
    top: hp("14.370402689280361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.968066406249996%")
  },
  ImageBackground_420_149: {
    width: wp("0.9356323242187501%"),
    height: hp("4.428460894674733%"),
    top: hp("12.481140411239693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.77444661458333%")
  },
  ImageBackground_420_151: {
    width: wp("0.9356160481770834%"),
    height: hp("3.630028171339135%"),
    top: hp("13.279575422249813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.58053385416667%")
  },
  ImageBackground_420_153: {
    width: wp("0.9356282552083333%"),
    height: hp("4.268115499745244%"),
    top: hp("12.641460641749433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.386621093749994%")
  },
  ImageBackground_420_155: {
    width: wp("0.9356241861979167%"),
    height: hp("2.907701804005224%"),
    top: hp("14.00186747446589%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.19267578125%")
  },
  ImageBackground_420_157: {
    width: wp("0.9356241861979167%"),
    height: hp("4.428460894674733%"),
    top: hp("12.481140411239693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.795345052083334%")
  },
  ImageBackground_420_159: {
    width: wp("0.9356201171875%"),
    height: hp("1.5153281513540107%"),
    top: hp("15.330374973645988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.63131510416666%")
  },
  ImageBackground_420_161: {
    width: wp("0.9356160481770834%"),
    height: hp("2.907701804005224%"),
    top: hp("14.00186747446589%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.76129557291666%")
  },
  ImageBackground_420_163: {
    width: wp("0.9356160481770834%"),
    height: hp("3.460969024154915%"),
    top: hp("13.448662021528293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.99915364583333%")
  },
  ImageBackground_420_165: {
    width: wp("25.743048095703124%"),
    height: hp("6.343017989906414%"),
    top: hp("10.953815694691716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.910384114583334%")
  },
  ImageBackground_420_166: {
    width: wp("24.2326416015625%"),
    height: hp("3.719049593855416%"),
    top: hp("12.57630767135963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.5630859375%")
  },
  ImageBackground_420_167: {
    width: wp("0.34849853515625%"),
    height: hp("0.16460504488966454%"),
    top: hp("12.855266702586206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.15901692708333%")
  },
  ImageBackground_420_168: {
    width: wp("0.34849446614583335%"),
    height: hp("0.1646039010524035%"),
    top: hp("16.183814830865813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.89013671875%")
  },
  ImageBackground_420_169: {
    width: wp("0.34850667317708334%"),
    height: hp("0.16461305175049193%"),
    top: hp("12.783223256535791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.698307291666666%")
  },
  ImageBackground_420_170: {
    width: wp("19.568076578776044%"),
    height: hp("7.193247667853085%"),
    top: hp("6.507299328851197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.677083333333332%")
  },
  ImageBackground_420_171: {
    width: wp("3.167661539713542%"),
    height: hp("0.08326734917453382%"),
    top: hp("7.452365126030735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.50859375%")
  },
  ImageBackground_420_172: {
    width: wp("1.5653788248697917%"),
    height: hp("0.08327135260494753%"),
    top: hp("7.6471926390320455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.50859375%")
  },
  ImageBackground_420_173: {
    width: wp("0.16522623697916666%"),
    height: hp("0.27634193157327586%"),
    top: hp("12.872707933142799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.669498697916666%")
  },
  ImageBackground_420_174: {
    width: wp("0.16525065104166667%"),
    height: hp("0.27634193157327586%"),
    top: hp("12.872707933142799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.11487630208333%")
  },
  ImageBackground_420_175: {
    width: wp("0.16522827148437502%"),
    height: hp("0.27634193157327586%"),
    top: hp("12.872707933142799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.560546875%")
  },
  ImageBackground_420_176: {
    width: wp("0.16523030598958333%"),
    height: hp("0.27634193157327586%"),
    top: hp("12.872707933142799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.005859375%")
  },
  ImageBackground_420_177: {
    width: wp("0.16523030598958333%"),
    height: hp("0.27634193157327586%"),
    top: hp("12.872707933142799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.4515625%")
  },
  ImageBackground_420_178: {
    width: wp("0.16523030598958333%"),
    height: hp("0.27634193157327586%"),
    top: hp("12.872707933142799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.896907552083334%")
  },
  ImageBackground_420_179: {
    width: wp("0.5740010579427083%"),
    height: hp("0.07804172864739505%"),
    top: hp("12.667027692208585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.314713541666666%")
  },
  ImageBackground_420_180: {
    width: wp("0.5740010579427083%"),
    height: hp("0.07804287248465612%"),
    top: hp("11.623838959426536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.314713541666666%")
  },
  ImageBackground_420_181: {
    width: wp("0.5740010579427083%"),
    height: hp("0.07804172864739505%"),
    top: hp("9.660565835246437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.314713541666666%")
  },
  ImageBackground_420_182: {
    width: wp("0.5740010579427083%"),
    height: hp("0.07804230056602558%"),
    top: hp("8.674111430612818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.314713541666666%")
  },
  ImageBackground_420_183: {
    width: wp("0.5740030924479167%"),
    height: hp("0.07804172864739505%"),
    top: hp("10.642225274081706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.34368489583333%")
  },
  ImageBackground_420_184: {
    width: wp("13.211440022786459%"),
    height: hp("4.401350807750422%"),
    top: hp("8.133433283358322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.882161458333332%")
  },
  ImageBackground_420_185: {
    width: wp("13.211440022786459%"),
    height: hp("4.401350807750422%"),
    top: hp("8.133433283358322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.882161458333332%")
  },
  ImageBackground_420_186: {
    width: wp("13.377473958333333%"),
    height: hp("3.5552744028986485%"),
    top: hp("8.398153828359256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.88294270833333%")
  },
  ImageBackground_420_187: {
    width: wp("0.25993448893229165%"),
    height: hp("0.12278864229994378%"),
    top: hp("10.481282796101947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.46165364583333%")
  },
  ImageBackground_420_188: {
    width: wp("0.25993448893229165%"),
    height: hp("0.12279550532351012%"),
    top: hp("9.43359191986038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.360156250000003%")
  },
  ImageBackground_420_189: {
    width: wp("0.2591227213541667%"),
    height: hp("0.11812922121702821%"),
    top: hp("9.17642985148051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.3916015625%")
  },
  ImageBackground_420_190: {
    width: wp("13.8989990234375%"),
    height: hp("4.68640706349706%"),
    top: hp("8.05597262403954%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.180989583333332%")
  },
  ImageBackground_420_191: {
    width: wp("13.489003499348959%"),
    height: hp("0%"),
    top: hp("8.714392803598198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.75501302083333%")
  },
  ImageBackground_420_192: {
    width: wp("13.48900146484375%"),
    height: hp("0%"),
    top: hp("9.711709086862818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.77548828125%")
  },
  ImageBackground_420_193: {
    width: wp("13.48899129231771%"),
    height: hp("0%"),
    top: hp("10.709025370127435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.79599609375%")
  },
  ImageBackground_420_194: {
    width: wp("13.48901163736979%"),
    height: hp("0%"),
    top: hp("11.706323351995877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.816503906250002%")
  },
  ImageBackground_420_195: {
    width: wp("19.51600138346354%"),
    height: hp("0.5809595202398801%"),
    top: hp("6.5067502869658895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.695996093749997%")
  },
  ImageBackground_420_196: {
    width: wp("0.3017476399739583%"),
    height: hp("0.14252155080906811%"),
    top: hp("6.732177734375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.19296875%")
  },
  ImageBackground_420_197: {
    width: wp("0.301788330078125%"),
    height: hp("0.14252383848359024%"),
    top: hp("6.732177734375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.713151041666666%")
  },
  ImageBackground_420_198: {
    width: wp("0.30174153645833335%"),
    height: hp("0.14252155080906811%"),
    top: hp("6.732177734375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.233040364583335%")
  },
  ImageBackground_420_199: {
    width: wp("5.0200347900390625%"),
    height: hp("0.3009367203605229%"),
    top: hp("20.41820886431784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.083951822916665%")
  },
  ImageBackground_420_200: {
    width: wp("0.9548878987630208%"),
    height: hp("0.3009367203605229%"),
    top: hp("20.41820886431784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.073697916666665%")
  },
  ImageBackground_420_201: {
    width: wp("0.70028076171875%"),
    height: hp("0.3009367203605229%"),
    top: hp("20.41820886431784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.806315104166668%")
  },
  ImageBackground_420_202: {
    width: wp("5.0200347900390625%"),
    height: hp("0.3009435833840892%"),
    top: hp("19.816330848247745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.083951822916665%")
  },
  ImageBackground_420_203: {
    width: wp("0.9548878987630208%"),
    height: hp("0.3009435833840892%"),
    top: hp("19.816330848247745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.073697916666665%")
  },
  ImageBackground_420_204: {
    width: wp("0.70028076171875%"),
    height: hp("0.3009435833840892%"),
    top: hp("19.816330848247745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.806315104166668%")
  },
  ImageBackground_420_205: {
    width: wp("5.0200347900390625%"),
    height: hp("0.300939008035045%"),
    top: hp("18.913532125538786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.083951822916665%")
  },
  ImageBackground_420_206: {
    width: wp("0.9548878987630208%"),
    height: hp("0.300939008035045%"),
    top: hp("18.913532125538786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.073697916666665%")
  },
  ImageBackground_420_207: {
    width: wp("0.70028076171875%"),
    height: hp("0.300939008035045%"),
    top: hp("18.913532125538786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.806315104166668%")
  },
  ImageBackground_420_208: {
    width: wp("5.020035807291666%"),
    height: hp("0.3009367203605229%"),
    top: hp("20.719147872352885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.681347656249997%")
  },
  ImageBackground_420_209: {
    width: wp("0.9548889160156251%"),
    height: hp("0.3009367203605229%"),
    top: hp("20.702493601831897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.706803385416666%")
  },
  ImageBackground_420_210: {
    width: wp("0.7002766927083334%"),
    height: hp("0.3009367203605229%"),
    top: hp("20.719147872352885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.403678385416665%")
  },
  ImageBackground_420_211: {
    width: wp("5.020035807291666%"),
    height: hp("0.3009367203605229%"),
    top: hp("19.51540099091079%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.681347656249997%")
  },
  ImageBackground_420_212: {
    width: wp("0.9548889160156251%"),
    height: hp("0.3009367203605229%"),
    top: hp("19.51540099091079%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.706803385416666%")
  },
  ImageBackground_420_213: {
    width: wp("0.7002766927083334%"),
    height: hp("0.3009367203605229%"),
    top: hp("19.51540099091079%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.403678385416665%")
  },
  ImageBackground_420_214: {
    width: wp("5.020035807291666%"),
    height: hp("0.30091613128982386%"),
    top: hp("19.21448943497002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.681347656249997%")
  },
  ImageBackground_420_215: {
    width: wp("0.9548889160156251%"),
    height: hp("0.30091613128982386%"),
    top: hp("19.21448943497002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.706803385416666%")
  },
  ImageBackground_420_216: {
    width: wp("0.7002766927083334%"),
    height: hp("0.30091613128982386%"),
    top: hp("19.21448943497002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.403678385416665%")
  },
  ImageBackground_420_217: {
    width: wp("5.020035807291666%"),
    height: hp("0.3009367203605229%"),
    top: hp("20.117269856282796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.681347656249997%")
  },
  ImageBackground_420_218: {
    width: wp("0.9548889160156251%"),
    height: hp("0.3009367203605229%"),
    top: hp("20.117269856282796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.706803385416666%")
  },
  ImageBackground_420_219: {
    width: wp("0.7002766927083334%"),
    height: hp("0.3009367203605229%"),
    top: hp("20.117269856282796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.403678385416665%")
  },
  ImageBackground_420_220: {
    width: wp("4.422676595052083%"),
    height: hp("0.01897854783545727%"),
    top: hp("20.709658598435155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.681347656249997%")
  },
  ImageBackground_420_222: {
    width: wp("4.422676595052083%"),
    height: hp("0.01897854783545727%"),
    top: hp("20.40871959040011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.681347656249997%")
  },
  ImageBackground_420_224: {
    width: wp("4.422676595052083%"),
    height: hp("0.01897854783545727%"),
    top: hp("20.107780582365066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.681347656249997%")
  },
  ImageBackground_420_226: {
    width: wp("4.422676595052083%"),
    height: hp("0.01897854783545727%"),
    top: hp("19.806841574330022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.681347656249997%")
  },
  ImageBackground_420_228: {
    width: wp("5.020035807291666%"),
    height: hp("0.01897854783545727%"),
    top: hp("19.50591171699306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.681347656249997%")
  },
  ImageBackground_420_230: {
    width: wp("5.020035807291666%"),
    height: hp("0.01897854783545727%"),
    top: hp("19.20500016105229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.681347656249997%")
  },
  ImageBackground_420_232: {
    width: wp("4.4685607910156255%"),
    height: hp("2.1105856373571026%"),
    top: hp("18.916140074494002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.140592447916667%")
  },
  ImageBackground_420_233: {
    width: wp("4.4685607910156255%"),
    height: hp("2.1105856373571026%"),
    top: hp("18.916140074494002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.140592447916667%")
  },
  ImageBackground_420_234: {
    width: wp("4.478477986653646%"),
    height: hp("2.1153440003630997%"),
    top: hp("18.982098306315592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.789648437499999%")
  },
  ImageBackground_420_235: {
    width: wp("4.478477986653646%"),
    height: hp("2.1153440003630997%"),
    top: hp("18.982098306315592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.789648437499999%")
  },
  ImageBackground_420_236: {
    width: wp("3.583966064453125%"),
    height: hp("1.6928539819445747%"),
    top: hp("19.112093123360197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.405110677083332%")
  },
  ImageBackground_420_237: {
    width: wp("3.0361124674479165%"),
    height: hp("1.4545766667447526%"),
    top: hp("19.113712796921853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.405338541666666%")
  },
  ImageBackground_420_238: {
    width: wp("1.1607676188151042%"),
    height: hp("1.1762467460117598%"),
    top: hp("19.369776781531108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.60537109375%")
  },
  ImageBackground_420_239: {
    width: wp("0.4931559244791666%"),
    height: hp("0.5267439217403017%"),
    top: hp("20.00378289858977%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.47727864583333%")
  },
  ImageBackground_420_240: {
    width: wp("0.5780843098958334%"),
    height: hp("0.22899164431456148%"),
    top: hp("20.472234585832084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.93424479166667%")
  },
  ImageBackground_420_241: {
    width: wp("0.6557902018229167%"),
    height: hp("0.28503967010635306%"),
    top: hp("20.42452284599888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.886555989583336%")
  },
  ImageBackground_420_242: {
    width: wp("0.053324381510416664%"),
    height: hp("0.8443280495982478%"),
    top: hp("20.15154837132215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.70143229166667%")
  },
  ImageBackground_420_243: {
    width: wp("0.5313598632812501%"),
    height: hp("0.411124851392663%"),
    top: hp("20.573331498313337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.773990885416666%")
  },
  ImageBackground_420_244: {
    width: wp("0.5317667643229167%"),
    height: hp("0.4107382343984257%"),
    top: hp("20.57371582763306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.19384765625%")
  },
  ImageBackground_420_245: {
    width: wp("0.49322916666666666%"),
    height: hp("0.5267439217403017%"),
    top: hp("19.984420021434595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.959244791666666%")
  },
  ImageBackground_420_246: {
    width: wp("0.5780680338541667%"),
    height: hp("0.22899164431456148%"),
    top: hp("20.452862557978825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.416308593749996%")
  },
  ImageBackground_420_247: {
    width: wp("0.6557779947916667%"),
    height: hp("0.28503967010635306%"),
    top: hp("20.405159968843698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.36858723958333%")
  },
  ImageBackground_420_248: {
    width: wp("0.05337931315104167%"),
    height: hp("0.8443280495982478%"),
    top: hp("20.132185494166976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.183430989583332%")
  },
  ImageBackground_420_249: {
    width: wp("0.5313598632812501%"),
    height: hp("0.4111271390671851%"),
    top: hp("20.55395947046008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.25598958333333%")
  },
  ImageBackground_420_250: {
    width: wp("0.5317728678385416%"),
    height: hp("0.4107382343984257%"),
    top: hp("20.554352950477885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.67591145833333%")
  },
  ImageBackground_420_251: {
    width: wp("0.410009765625%"),
    height: hp("0.19366537434407796%"),
    top: hp("16.82944233449681%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.22034505208333%")
  },
  ImageBackground_420_252: {
    width: wp("0.27347412109374997%"),
    height: hp("0.19481836230322339%"),
    top: hp("16.827895866519867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.215104166666666%")
  },
  ImageBackground_420_253: {
    width: wp("0.410009765625%"),
    height: hp("0.19365507980872845%"),
    top: hp("18.33547337659295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.22034505208333%")
  },
  ImageBackground_420_254: {
    width: wp("0.26617024739583334%"),
    height: hp("0.19361275783006934%"),
    top: hp("18.33430208723763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.222298177083335%")
  },
  ImageBackground_420_255: {
    width: wp("2.7474121093750004%"),
    height: hp("0.9758075674077025%"),
    top: hp("19.695871058611317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.346256510416666%")
  },
  ImageBackground_420_256: {
    width: wp("1.3788330078125%"),
    height: hp("0.6442823510119939%"),
    top: hp("19.970867837565592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.389322916666664%")
  },
  ImageBackground_420_257: {
    width: wp("1.372271728515625%"),
    height: hp("0.9252751248887275%"),
    top: hp("19.6941415766726%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.884309895833333%")
  },
  ImageBackground_420_258: {
    width: wp("1.3087209065755208%"),
    height: hp("0.657454780910326%"),
    top: hp("19.967573586253742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.888313802083331%")
  },
  ImageBackground_420_259: {
    width: wp("6.034381103515625%"),
    height: hp("7.565043390780196%"),
    top: hp("12.406214495291415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.808691406249999%")
  },
  ImageBackground_420_260: {
    width: wp("1.7342997233072917%"),
    height: hp("0.8535245011771457%"),
    top: hp("20.182505182955396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.602571614583333%")
  },
  ImageBackground_420_261: {
    width: wp("1.6338450113932292%"),
    height: hp("0.1549144556139899%"),
    top: hp("19.816330848247745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.76946614583333%")
  },
  ImageBackground_420_262: {
    width: wp("0.6875651041666666%"),
    height: hp("0.1549144556139899%"),
    top: hp("19.816330848247745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.76946614583333%")
  },
  ImageBackground_420_263: {
    width: wp("1.7332336425781252%"),
    height: hp("0.11993362449634558%"),
    top: hp("20.915320537973194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.602571614583333%")
  },
  ImageBackground_420_264: {
    width: wp("3.8265279134114585%"),
    height: hp("0.8116440437008059%"),
    top: hp("20.227224644513683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.341764322916667%")
  },
  ImageBackground_420_265: {
    width: wp("3.8229268391927085%"),
    height: hp("0.11619098897816718%"),
    top: hp("20.922677699236317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.345442708333334%")
  },
  ImageBackground_420_266: {
    width: wp("0.26573486328124996%"),
    height: hp("0.13303971183353636%"),
    top: hp("20.310157421289354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.994075520833334%")
  },
  ImageBackground_420_267: {
    width: wp("0.26712646484374997%"),
    height: hp("0.133815233496533%"),
    top: hp("20.369408191412106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.156966145833334%")
  },
  ImageBackground_420_268: {
    width: wp("0.265020751953125%"),
    height: hp("0.13249982064631746%"),
    top: hp("20.430580608133432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.31920572916667%")
  },
  ImageBackground_420_269: {
    width: wp("0.6259765625%"),
    height: hp("0.06439346244846327%"),
    top: hp("20.388386739247558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.17724609375%")
  },
  ImageBackground_420_270: {
    width: wp("0.6387064615885417%"),
    height: hp("0.06579351925599701%"),
    top: hp("20.475528837143926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.165690104166664%")
  },
  ImageBackground_420_271: {
    width: wp("0.6290069580078125%"),
    height: hp("0.06432940756184408%"),
    top: hp("20.55977016374625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.174153645833332%")
  },
  ImageBackground_420_272: {
    width: wp("2.4505655924479166%"),
    height: hp("6.205394922167822%"),
    top: hp("13.734099747001501%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.787434895833332%")
  },
  ImageBackground_420_273: {
    width: wp("1.6309855143229166%"),
    height: hp("0.1549144556139899%"),
    top: hp("19.816330848247745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.27001953125%")
  },
  ImageBackground_420_274: {
    width: wp("2.1672627766927084%"),
    height: hp("3.955555105137861%"),
    top: hp("8.901652689280358%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.40979817708333%")
  },
  ImageBackground_420_275: {
    width: wp("0.9835917154947917%"),
    height: hp("0.1549144556139899%"),
    top: hp("19.816330848247745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.27001953125%")
  },
  ImageBackground_420_276: {
    width: wp("1.730657958984375%"),
    height: hp("1.354852930895392%"),
    top: hp("7.809709037083017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.626302083333332%")
  },
  ImageBackground_420_277: {
    width: wp("1.043035888671875%"),
    height: hp("0.4926632905471092%"),
    top: hp("7.52690671265929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.97275390625%")
  },
  ImageBackground_420_278: {
    width: wp("1.8922017415364583%"),
    height: hp("1.2163599749197667%"),
    top: hp("7.53929675787106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.791438802083334%")
  },
  ImageBackground_420_279: {
    width: wp("2.5822998046875%"),
    height: hp("1.014696318527748%"),
    top: hp("7.087096710433844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.236002604166664%")
  },
  ImageBackground_420_280: {
    width: wp("0.166455078125%"),
    height: hp("0.12142461636613334%"),
    top: hp("8.251568795680285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.718098958333332%")
  },
  ImageBackground_420_281: {
    width: wp("0.5604593912760416%"),
    height: hp("0.3573250377374789%"),
    top: hp("7.911162826789731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.332584635416666%")
  },
  ImageBackground_420_282: {
    width: wp("0.2769795735677083%"),
    height: hp("0.14737313655184126%"),
    top: hp("7.977908018646922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.465364583333333%")
  },
  ImageBackground_420_283: {
    width: wp("1.1940999348958334%"),
    height: hp("0.22577460201783872%"),
    top: hp("8.619115735101197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.110807291666667%")
  },
  ImageBackground_420_284: {
    width: wp("0.20429890950520832%"),
    height: hp("0.03592392493938577%"),
    top: hp("8.497786629146365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.81018880208333%")
  },
  ImageBackground_420_286: {
    width: wp("0.5750325520833334%"),
    height: hp("0.1047937945089955%"),
    top: hp("8.362228187663977%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.62119140625%")
  },
  ImageBackground_420_288: {
    width: wp("0.18943074544270835%"),
    height: hp("0.08947152247850684%"),
    top: hp("8.08909815111975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.591080729166666%")
  },
  ImageBackground_420_289: {
    width: wp("0.03296305338541667%"),
    height: hp("0.018010289593972544%"),
    top: hp("8.128400399409667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.710709635416666%")
  },
  ImageBackground_420_290: {
    width: wp("0.18942871093750002%"),
    height: hp("0.08947266631576789%"),
    top: hp("8.090845934454649%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.339322916666667%")
  },
  ImageBackground_420_291: {
    width: wp("0.0377197265625%"),
    height: hp("0.017822128364528674%"),
    top: hp("8.13033119670633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.456087239583333%")
  },
  ImageBackground_420_292: {
    width: wp("0.25936279296875%"),
    height: hp("0.11065252896012931%"),
    top: hp("8.248000023425789%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.955436197916665%")
  },
  ImageBackground_420_294: {
    width: wp("1.5706013997395833%"),
    height: hp("0.3038580807252624%"),
    top: hp("7.97557459063437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.273990885416666%")
  },
  ImageBackground_420_295: {
    width: wp("2.3489034016927084%"),
    height: hp("3.8132154244533005%"),
    top: hp("9.547097178949585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.028515625%")
  },
  ImageBackground_420_296: {
    width: wp("2.4252237955729163%"),
    height: hp("9.937699302204367%"),
    top: hp("9.87631184407796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.805013020833332%")
  },
  ImageBackground_420_297: {
    width: wp("3.681392415364583%"),
    height: hp("4.380240147260355%"),
    top: hp("8.9378437002202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.368033854166665%")
  },
  ImageBackground_420_298: {
    width: wp("3.987342325846354%"),
    height: hp("4.350805211102945%"),
    top: hp("8.966137658709705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.021354166666665%")
  },
  ImageBackground_420_299: {
    width: wp("1.4423787434895834%"),
    height: hp("0.9986705865817092%"),
    top: hp("10.592079448556966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.606998697916666%")
  },
  ImageBackground_420_300: {
    width: wp("0.3858103434244792%"),
    height: hp("0.33308312274526797%"),
    top: hp("10.029293214720763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.251985677083333%")
  },
  ImageBackground_420_301: {
    width: wp("1.4805074055989584%"),
    height: hp("1.5833075436158874%"),
    top: hp("10.029293214720763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.58776041666667%")
  },
  ImageBackground_420_302: {
    width: wp("0.2205810546875%"),
    height: hp("0.34306767819703426%"),
    top: hp("10.94400614634089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.01940104166667%")
  },
  ImageBackground_420_303: {
    width: wp("0.2205810546875%"),
    height: hp("0.34306767819703426%"),
    top: hp("10.94400614634089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.01940104166667%")
  },
  ImageBackground_420_304: {
    width: wp("0.2570719401041667%"),
    height: hp("0.5035022924328851%"),
    top: hp("9.491543290854569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.595930989583334%")
  },
  ImageBackground_420_305: {
    width: wp("0.5994222005208333%"),
    height: hp("3.2606556676495737%"),
    top: hp("10.057248597380998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.616048177083332%")
  },
  ImageBackground_420_306: {
    width: wp("2.049034627278646%"),
    height: hp("1.3969307002992644%"),
    top: hp("10.573466928645054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.021354166666665%")
  },
  ImageBackground_420_307: {
    width: wp("1.4792500813802083%"),
    height: hp("0.7217738939368207%"),
    top: hp("11.287074968375187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.60380859375%")
  },
  ImageBackground_420_308: {
    width: wp("1.4809183756510418%"),
    height: hp("0.7324516147687875%"),
    top: hp("11.278564819152926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.573404947916668%")
  },
  ImageBackground_420_309: {
    width: wp("5.6038269042968745%"),
    height: hp("1.3039355871380716%"),
    top: hp("10.469981683962704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.226529947916667%")
  },
  ImageBackground_420_310: {
    width: wp("5.987522379557292%"),
    height: hp("1.0046254033627717%"),
    top: hp("10.966782233883059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.020572916666666%")
  },
  ImageBackground_420_311: {
    width: wp("0.30585327148437497%"),
    height: hp("0.06642377358683939%"),
    top: hp("10.82732559501499%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.797233072916665%")
  },
  ImageBackground_420_312: {
    width: wp("0.239849853515625%"),
    height: hp("0.04841291207423632%"),
    top: hp("10.93152459414824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.650520833333335%")
  },
  ImageBackground_420_313: {
    width: wp("0.806060791015625%"),
    height: hp("1.026362314753268%"),
    top: hp("8.966137658709705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.015006510416665%")
  },
  ImageBackground_420_314: {
    width: wp("0.676910400390625%"),
    height: hp("1.0069965780049428%"),
    top: hp("8.888676999390924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.125683593749997%")
  },
  ImageBackground_420_315: {
    width: wp("0.8199951171875001%"),
    height: hp("1.045728051501593%"),
    top: hp("8.90804902724419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.352018229166667%")
  },
  ImageBackground_420_316: {
    width: wp("0.6969930013020833%"),
    height: hp("1.0069965780049428%"),
    top: hp("8.869314122235753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.352018229166667%")
  },
  ImageBackground_420_317: {
    width: wp("0.36899922688802084%"),
    height: hp("0.1301355090277127%"),
    top: hp("10.966159986413043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.251985677083333%")
  },
  ImageBackground_420_318: {
    width: wp("3.7215718587239586%"),
    height: hp("1.0709016219429348%"),
    top: hp("10.573466928645054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.233170572916666%")
  },
  ImageBackground_420_319: {
    width: wp("3.7309997558593753%"),
    height: hp("1.0650920724940263%"),
    top: hp("10.573466928645054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.22900390625%")
  },
  ImageBackground_420_320: {
    width: wp("0.16400146484375%"),
    height: hp("0.0774606593187781%"),
    top: hp("10.883309565920161%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.606998697916666%")
  },
  ImageBackground_420_321: {
    width: wp("2.301249186197917%"),
    height: hp("0.6402651945511619%"),
    top: hp("10.960770225238942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.994075520833334%")
  },
  ImageBackground_420_322: {
    width: wp("0.9967508951822918%"),
    height: hp("0.11619213281542821%"),
    top: hp("11.425534181151605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.200162760416667%")
  },
  ImageBackground_420_323: {
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
  View_449_12: {
    width: wp("92.53333333333333%"),
    height: hp("23.238380809595203%"),
    top: hp("1.6491754122938538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.4000000059604645,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_449_10: {
    width: wp("6.4%"),
    height: hp("3.598200899550225%"),
    top: hp("21.88905547226387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.73333333333333%")
  },
  View_420_342: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("55.77211394302849%")
  },
  Text_420_342: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_420_344: {
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
  View_420_345: {
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
  View_420_346: {
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
  ImageBackground_420_347: {
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
  View_420_349: {
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
  ImageBackground_420_350: {
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
  ImageBackground_420_351: {
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
  ImageBackground_420_352: {
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
  ImageBackground_420_354: {
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
  View_420_356: {
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
  ImageBackground_420_357: {
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
  View_420_358: {
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
  ImageBackground_420_359: {
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
  ImageBackground_420_360: {
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
  View_420_361: {
    width: wp("92.53478190104167%"),
    minWidth: wp("92.53478190104167%"),
    height: hp("9.897786244817045%"),
    minHeight: hp("9.897786244817045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7325846354166665%"),
    top: hp("5.997001499250374%")
  },
  View_420_362: {
    width: wp("57.06666666666666%"),
    minWidth: wp("57.06666666666666%"),
    height: hp("8.245877061469265%"),
    minHeight: hp("8.245877061469265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6007486979166674%"),
    top: hp("0%")
  },
  View_449_2: {
    width: wp("57.06666666666666%"),
    minWidth: wp("57.06666666666666%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.847076461769116%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_449_3: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.6491754122938538%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_420_367: {
    width: wp("9.129443359375%"),
    minWidth: wp("9.129443359375%"),
    height: hp("5.097451274362818%"),
    minHeight: hp("5.097451274362818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.40462239583333%"),
    top: hp("0%")
  },
  View_420_368: {
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
  View_420_369: {
    width: wp("9.129443359375%"),
    minWidth: wp("9.129443359375%"),
    height: hp("5.097451274362818%"),
    minHeight: hp("5.097451274362818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(204, 204, 204, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_420_372: {
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
