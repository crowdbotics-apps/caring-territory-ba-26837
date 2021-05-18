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
      <View style={styles.View_15_10}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_15_11}
        />
        <View style={styles.View_15_12}>
          <View source={{ uri: "null" }} style={styles.View_15_13} />
          <View style={styles.View_15_14}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_15_15}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_15_16}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_15_19}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_15_22}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_15_25}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_15_26}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_15_32}
          />
          <View style={styles.View_15_39}>
            <View style={styles.View_15_40}>
              <Text style={styles.Text_15_40}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_16_36}>
        <View style={styles.View_15_262} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f4e/9be8/38d244db5d2f5137e75bf8fbfb48c459"
          }}
          style={styles.ImageBackground_29_225}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63d6/9941/106f53ab3243538fb94e4c94e93f7cf5"
          }}
          style={styles.ImageBackground_29_226}
        />
      </View>
      <View style={styles.View_16_35}>
        <View style={styles.View_16_132}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
            }}
            style={styles.ImageBackground_16_133}
          />
          <View style={styles.View_16_134}>
            <Text style={styles.Text_16_134}>Can’t wait to see you!</Text>
          </View>
          <View style={styles.View_16_135}>
            <Text style={styles.Text_16_135}>5:09 PM</Text>
          </View>
          <View style={styles.View_16_136}>
            <Text style={styles.Text_16_136}>Sandra Adams</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef13/00d7/c609e5d4a51d57f75e1f40f5feaed437"
            }}
            style={styles.ImageBackground_16_137}
          />
        </View>
        <View style={styles.View_16_138}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
            }}
            style={styles.ImageBackground_16_139}
          />
          <View style={styles.View_16_140}>
            <Text style={styles.Text_16_140}>Can’t wait to see you!</Text>
          </View>
          <View style={styles.View_16_141}>
            <Text style={styles.Text_16_141}>5:09 PM</Text>
          </View>
          <View style={styles.View_16_142}>
            <Text style={styles.Text_16_142}>Sandra Adams</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef13/00d7/c609e5d4a51d57f75e1f40f5feaed437"
            }}
            style={styles.ImageBackground_16_143}
          />
        </View>
        <View style={styles.View_55_1888}>
          <View style={styles.View_55_1889} />
          <View style={styles.View_213_439}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/524c/4700/ffce691f3698de1d12f90c4cc0f3757d"
              }}
              style={styles.ImageBackground_213_443}
            />
            <View style={styles.View_213_444} />
            <View style={styles.View_213_445}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1245/e487/cb2f8a46c987db9152c5cad0bb932cfa"
                }}
                style={styles.ImageBackground_213_446}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcad/36cf/d8613bbde1698902aee5d0b90f27bf4f"
                }}
                style={styles.ImageBackground_213_447}
              />
            </View>
            <View style={styles.View_213_449}>
              <Text style={styles.Text_213_449}>
                Let’s play &amp; test your Luck
              </Text>
            </View>
          </View>
          <View style={styles.View_55_1890}>
            <View style={styles.View_55_1892} />
          </View>
          <View style={styles.View_55_1893}>
            <View style={styles.View_55_1895} />
          </View>
        </View>
        <View style={styles.View_47_835}>
          <View style={styles.View_16_5} />
          <View style={styles.View_55_0}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e886/0bad/0965ae00ebdec33e1256943f3f349d38"
              }}
              style={styles.ImageBackground_55_1}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/361d/f54f/aec39aa7959727056823919104ab8f32"
              }}
              style={styles.ImageBackground_55_2}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e588/4a14/0fdadb87ec6f751cf43e5f8e755b6473"
              }}
              style={styles.ImageBackground_55_3}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/361d/f54f/aec39aa7959727056823919104ab8f32"
              }}
              style={styles.ImageBackground_55_4}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8462/c5aa/997822176feb3599e61c4542b03929e9"
              }}
              style={styles.ImageBackground_55_5}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bc4/913f/a2c0c4b58a0abb7e1682bdbddf9b38c8"
              }}
              style={styles.ImageBackground_55_6}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b905/4ce5/9c1864bfa9dc7cde5d0e31a2dcae442b"
              }}
              style={styles.ImageBackground_55_7}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84fe/a7c6/2923b8475a3a239ed4e5b323d2a6a905"
              }}
              style={styles.ImageBackground_55_8}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8696/debf/bbfe64e7d3083f384cb761a9f589c14e"
              }}
              style={styles.ImageBackground_55_9}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/031e/946b/b7ee62fdb322689d15065be0d42e17e9"
              }}
              style={styles.ImageBackground_55_10}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ca0/57f6/4c7f5ab91b892c3f31e8cb3b02157923"
              }}
              style={styles.ImageBackground_55_11}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27e2/2770/616ef1a7a8334241e105a178d46437d4"
              }}
              style={styles.ImageBackground_55_12}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27e2/2770/616ef1a7a8334241e105a178d46437d4"
              }}
              style={styles.ImageBackground_55_13}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27e2/2770/616ef1a7a8334241e105a178d46437d4"
              }}
              style={styles.ImageBackground_55_14}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eac6/e379/f4a154ba6daaed6beb43af47ebc530b4"
              }}
              style={styles.ImageBackground_55_15}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f70f/1752/8737b2f0e0153ef331c461b9d393f910"
              }}
              style={styles.ImageBackground_55_16}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07b8/d39f/bb63f6150a222333529d758b85eb4d48"
              }}
              style={styles.ImageBackground_55_17}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8de9/e7d5/4b5f646486d3496a30e8330cd7c57649"
              }}
              style={styles.ImageBackground_55_18}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01ca/c3d2/709f1a591e2797745c5379a7cd0e5959"
              }}
              style={styles.ImageBackground_55_19}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdc0/b805/53c2fa5176f368ac46f6f75dec91af1f"
              }}
              style={styles.ImageBackground_55_20}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8eda/a7ff/09ba3a1e4a1a55940a34c5904e78d3fc"
              }}
              style={styles.ImageBackground_55_21}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/613a/f9a8/c74a575153990550ae188e839cf61eba"
              }}
              style={styles.ImageBackground_55_22}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23f7/39cf/434994e22213de7e0fa2744f0022201d"
              }}
              style={styles.ImageBackground_55_23}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0028/3e0c/11b3db18f323837f0b4c43208bbcc3c9"
              }}
              style={styles.ImageBackground_55_24}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a1c/c7fd/91ab13adf86dcee4a545fd4cf593887a"
              }}
              style={styles.ImageBackground_55_25}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e725/de9d/68dceac4074b59f97f5d8a2c558a08a3"
              }}
              style={styles.ImageBackground_55_26}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d84b/b9ed/8d589034a08f95ecae2ba1459a8d83ac"
              }}
              style={styles.ImageBackground_55_27}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7289/96de/fe60cc4595ab074915c6f3986d7f7538"
              }}
              style={styles.ImageBackground_55_28}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b79/f141/eac221194738b4fe03ebcec7877e1c0a"
              }}
              style={styles.ImageBackground_55_29}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a66/e536/f194a1fbd67e6a53ce134b40cc474b2c"
              }}
              style={styles.ImageBackground_55_30}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_55_31}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a66/e536/f194a1fbd67e6a53ce134b40cc474b2c"
              }}
              style={styles.ImageBackground_55_32}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_55_33}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7289/96de/fe60cc4595ab074915c6f3986d7f7538"
              }}
              style={styles.ImageBackground_55_34}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d619/a8d3/dcbc90b4a97d404f3a7b093340f279ee"
              }}
              style={styles.ImageBackground_55_35}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff63/74d3/3052712a1f337ca8df8c467e642222ec"
              }}
              style={styles.ImageBackground_55_36}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7634/77d8/a839452ab1d1f82560feb0c1594151ea"
              }}
              style={styles.ImageBackground_55_37}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed93/5b8a/5ac52445c9ce588eaf705aefeae767da"
              }}
              style={styles.ImageBackground_55_41}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/272b/47d7/0cad313b19a4153734acd2a6d9f14d21"
              }}
              style={styles.ImageBackground_55_42}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3234/e2aa/97f17ac487446554e7e4c25b895be690"
              }}
              style={styles.ImageBackground_55_43}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edaa/6f5e/2c1afc7b7f750bb71e77396bb85b5400"
              }}
              style={styles.ImageBackground_55_44}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c6/374e/8a1cd45a0b84c2675bce62bb88cff035"
              }}
              style={styles.ImageBackground_55_45}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c6/374e/8a1cd45a0b84c2675bce62bb88cff035"
              }}
              style={styles.ImageBackground_55_46}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c6/374e/8a1cd45a0b84c2675bce62bb88cff035"
              }}
              style={styles.ImageBackground_55_47}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c6/374e/8a1cd45a0b84c2675bce62bb88cff035"
              }}
              style={styles.ImageBackground_55_48}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94ca/71c4/a3e1877a93cde42b5d798e7437971fa2"
              }}
              style={styles.ImageBackground_55_49}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1ba/e6bc/0b09bebb9c8d6c7075efdcc03c22f6d2"
              }}
              style={styles.ImageBackground_55_50}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1081/6a1d/01aa3445d61a1cab0fd676a3a4127ff6"
              }}
              style={styles.ImageBackground_55_51}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1081/6a1d/01aa3445d61a1cab0fd676a3a4127ff6"
              }}
              style={styles.ImageBackground_55_52}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d591/2ab1/9ac27a33d312b8d892c5944e7961450d"
              }}
              style={styles.ImageBackground_55_53}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d70/9b69/78ef70fb00332f1b6333e246c08ed8b9"
              }}
              style={styles.ImageBackground_55_54}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_55_55}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d70/9b69/78ef70fb00332f1b6333e246c08ed8b9"
              }}
              style={styles.ImageBackground_55_56}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_57}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9329/dead/e3820ced0364145527f98ac70c01a1e0"
              }}
              style={styles.ImageBackground_55_58}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f61e/4312/86fbc74ef42d2a23778f6a10e018abfb"
              }}
              style={styles.ImageBackground_55_59}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eac6/e379/f4a154ba6daaed6beb43af47ebc530b4"
              }}
              style={styles.ImageBackground_55_61}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1ba/e6bc/0b09bebb9c8d6c7075efdcc03c22f6d2"
              }}
              style={styles.ImageBackground_55_62}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1081/6a1d/01aa3445d61a1cab0fd676a3a4127ff6"
              }}
              style={styles.ImageBackground_55_63}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1081/6a1d/01aa3445d61a1cab0fd676a3a4127ff6"
              }}
              style={styles.ImageBackground_55_64}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d591/2ab1/9ac27a33d312b8d892c5944e7961450d"
              }}
              style={styles.ImageBackground_55_65}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b12/f5ad/e0ecd8a6b15429d161f852ab332c042e"
              }}
              style={styles.ImageBackground_55_66}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8599/b4f8/bc7ddb3b60956f6453ad8c4e5d5aeeee"
              }}
              style={styles.ImageBackground_55_67}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45c8/626a/44a1d376ac550c1277a340660c8bed1f"
              }}
              style={styles.ImageBackground_55_68}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caa5/6001/4adb558e07938f8a44d40af369452d92"
              }}
              style={styles.ImageBackground_55_69}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88e0/4342/4a6419e767d26401d41cf08f0de4e2a0"
              }}
              style={styles.ImageBackground_55_70}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50e8/e678/fd95b814635a266aa711ceb12e147ef7"
              }}
              style={styles.ImageBackground_55_71}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1928/2e6e/93ac731bba124b75f1ad3bce58992d27"
              }}
              style={styles.ImageBackground_55_72}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2896/7fc0/9f34e4309ddc945b65eec4cad9aeb5c4"
              }}
              style={styles.ImageBackground_55_73}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2896/7fc0/9f34e4309ddc945b65eec4cad9aeb5c4"
              }}
              style={styles.ImageBackground_55_74}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a66/e536/f194a1fbd67e6a53ce134b40cc474b2c"
              }}
              style={styles.ImageBackground_55_75}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_55_76}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a66/e536/f194a1fbd67e6a53ce134b40cc474b2c"
              }}
              style={styles.ImageBackground_55_77}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_55_78}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/467e/f876/a9a7fb23bee362bf80e3d32b40f6dd4c"
              }}
              style={styles.ImageBackground_55_79}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea8a/e83e/1dde1cbdd1784fac5e030692c46f8125"
              }}
              style={styles.ImageBackground_55_81}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/419f/fce5/a3777031771b9d1d58380caabfb447a1"
              }}
              style={styles.ImageBackground_55_82}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/022e/147d/c0bee831ffb7b949de5a6516e65cb6b7"
              }}
              style={styles.ImageBackground_55_83}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/478c/d24a/89a1b94f13325d8857d6d0a65d5211ca"
              }}
              style={styles.ImageBackground_55_84}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_55_85}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a552/f931/96435c31648d182b2a297df35850d4fe"
              }}
              style={styles.ImageBackground_55_86}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7289/96de/fe60cc4595ab074915c6f3986d7f7538"
              }}
              style={styles.ImageBackground_55_87}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/478c/d24a/89a1b94f13325d8857d6d0a65d5211ca"
              }}
              style={styles.ImageBackground_55_88}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23f7/39cf/434994e22213de7e0fa2744f0022201d"
              }}
              style={styles.ImageBackground_55_89}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_55_90}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4bf/93b9/8308e181d467345a06679d9a6b521fb4"
              }}
              style={styles.ImageBackground_55_91}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3917/e3a5/ba163f110bf7f5ac2be38307ddf2d1ba"
              }}
              style={styles.ImageBackground_55_92}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa20/01de/6c717fbc4803c20b7fede6f734c41bd8"
              }}
              style={styles.ImageBackground_55_93}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bb6/e7a6/b6ae1cec9e3728c12108122de602075a"
              }}
              style={styles.ImageBackground_55_94}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e146/1fb4/459aa28c4ed864436e73e656fa4cd34b"
              }}
              style={styles.ImageBackground_55_95}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_55_96}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_55_97}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_55_98}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_55_99}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd1a/bece/464bc27987ab80b8787a75606788a1bb"
              }}
              style={styles.ImageBackground_55_100}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c6/374e/8a1cd45a0b84c2675bce62bb88cff035"
              }}
              style={styles.ImageBackground_55_101}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c6/374e/8a1cd45a0b84c2675bce62bb88cff035"
              }}
              style={styles.ImageBackground_55_102}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c6/374e/8a1cd45a0b84c2675bce62bb88cff035"
              }}
              style={styles.ImageBackground_55_103}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c6/374e/8a1cd45a0b84c2675bce62bb88cff035"
              }}
              style={styles.ImageBackground_55_104}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1167/432e/fd05b1a733d2375c2afa67469f0abf38"
              }}
              style={styles.ImageBackground_55_105}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3234/e2aa/97f17ac487446554e7e4c25b895be690"
              }}
              style={styles.ImageBackground_55_106}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edaa/6f5e/2c1afc7b7f750bb71e77396bb85b5400"
              }}
              style={styles.ImageBackground_55_107}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eac6/e379/f4a154ba6daaed6beb43af47ebc530b4"
              }}
              style={styles.ImageBackground_55_108}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1ba/e6bc/0b09bebb9c8d6c7075efdcc03c22f6d2"
              }}
              style={styles.ImageBackground_55_109}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1081/6a1d/01aa3445d61a1cab0fd676a3a4127ff6"
              }}
              style={styles.ImageBackground_55_110}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1081/6a1d/01aa3445d61a1cab0fd676a3a4127ff6"
              }}
              style={styles.ImageBackground_55_111}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d591/2ab1/9ac27a33d312b8d892c5944e7961450d"
              }}
              style={styles.ImageBackground_55_112}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7c6/f749/19a1521c7705efcedc768b11cf421cb8"
              }}
              style={styles.ImageBackground_55_113}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3650/c080/6cb371831e6fc3ab3d815215645e6a99"
              }}
              style={styles.ImageBackground_55_114}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3094/b0ec/3a047c226d75c797dd59ae146a21a413"
              }}
              style={styles.ImageBackground_55_115}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a50/0d6b/d83e0628a3777c3a6a658b2adcda2c29"
              }}
              style={styles.ImageBackground_55_116}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3405/388f/0bbf8f1c4e2bddde067d5b676852bf45"
              }}
              style={styles.ImageBackground_55_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_55_118}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0553/95ed/14d2b82b04067bee760b23313850ab1c"
              }}
              style={styles.ImageBackground_55_119}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a66/e536/f194a1fbd67e6a53ce134b40cc474b2c"
              }}
              style={styles.ImageBackground_55_120}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_55_121}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a66/e536/f194a1fbd67e6a53ce134b40cc474b2c"
              }}
              style={styles.ImageBackground_55_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
              }}
              style={styles.ImageBackground_55_123}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_55_124}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c170/4095/248a91f7fb44f00ac94d28b80b43f4bf"
              }}
              style={styles.ImageBackground_55_126}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b20b/0e85/b736269e0cec71b018703275e8920c74"
              }}
              style={styles.ImageBackground_55_127}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c574/64ef/4544bd4e2bab918f0f56d0a3ea7bdbe1"
              }}
              style={styles.ImageBackground_55_128}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_55_129}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/098c/ed9a/6e7eb97118b8c7be7e295f130da405bd"
              }}
              style={styles.ImageBackground_55_130}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4241/28cf/8f63d261fa62a8a6548ad2b6c44032e7"
              }}
              style={styles.ImageBackground_55_131}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5305/a61d/1cab9c4e1f06cf18a2f42dce41351bb0"
              }}
              style={styles.ImageBackground_55_132}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/911c/d455/9a937c3ea1c1bfe760b00d8ca4895d6b"
              }}
              style={styles.ImageBackground_55_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29ee/0cd1/b1e5033008973fa64aecb9fafa471f5d"
              }}
              style={styles.ImageBackground_55_135}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9827/536b/51bba03c03b103f83755dd253a0b0bfd"
              }}
              style={styles.ImageBackground_55_136}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a1c/c7fd/91ab13adf86dcee4a545fd4cf593887a"
              }}
              style={styles.ImageBackground_55_137}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_55_138}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_55_139}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e55/51d2/9aa399971613da2cc503a027b90cd20e"
              }}
              style={styles.ImageBackground_55_140}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddb3/6a57/f18d33a1c83a0286eb2e9c568d54a6d3"
              }}
              style={styles.ImageBackground_55_141}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_55_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_55_143}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c6/374e/8a1cd45a0b84c2675bce62bb88cff035"
              }}
              style={styles.ImageBackground_55_144}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c6/374e/8a1cd45a0b84c2675bce62bb88cff035"
              }}
              style={styles.ImageBackground_55_145}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c6/374e/8a1cd45a0b84c2675bce62bb88cff035"
              }}
              style={styles.ImageBackground_55_146}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c6/374e/8a1cd45a0b84c2675bce62bb88cff035"
              }}
              style={styles.ImageBackground_55_147}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94ca/71c4/a3e1877a93cde42b5d798e7437971fa2"
              }}
              style={styles.ImageBackground_55_148}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3234/e2aa/97f17ac487446554e7e4c25b895be690"
              }}
              style={styles.ImageBackground_55_149}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edaa/6f5e/2c1afc7b7f750bb71e77396bb85b5400"
              }}
              style={styles.ImageBackground_55_150}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d72b/11e4/a7d4041466b0964f9ff7a114125a720b"
              }}
              style={styles.ImageBackground_55_151}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d72b/11e4/a7d4041466b0964f9ff7a114125a720b"
              }}
              style={styles.ImageBackground_55_152}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8fe/3fc9/bca2124343b0e6a5da72f947246e8293"
              }}
              style={styles.ImageBackground_55_153}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1913/a8c5/a9b2d3351b96e4148ec7c92518cb59b2"
              }}
              style={styles.ImageBackground_55_154}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc8a/bbfb/f7459e98a4704fe008eae78e7116e193"
              }}
              style={styles.ImageBackground_55_155}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a0a/f544/ccc3c3b088cba652533e59942550bfae"
              }}
              style={styles.ImageBackground_55_156}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/205a/e83a/87cdf76d6f414d953494e25cb5befd6d"
              }}
              style={styles.ImageBackground_55_157}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1789/b5b4/894bbd24d0dcf3a096ef451577ec1716"
              }}
              style={styles.ImageBackground_55_158}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc8a/bbfb/f7459e98a4704fe008eae78e7116e193"
              }}
              style={styles.ImageBackground_55_159}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2f6/eb6c/933fbb622d8e183b40eb07a9d7432d6b"
              }}
              style={styles.ImageBackground_55_160}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9e0/9b9f/54ce78e4bdebef7ad56614ebaa0d21a0"
              }}
              style={styles.ImageBackground_55_161}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bde/ebb6/93ed0432dc36c4de3bd5a6b19e3a721c"
              }}
              style={styles.ImageBackground_55_162}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7e5/9a25/185b87bc5db9e9e87a38c1c20b5868b1"
              }}
              style={styles.ImageBackground_55_163}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7e5/9a25/185b87bc5db9e9e87a38c1c20b5868b1"
              }}
              style={styles.ImageBackground_55_164}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7e5/9a25/185b87bc5db9e9e87a38c1c20b5868b1"
              }}
              style={styles.ImageBackground_55_165}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e35/9cee/bbf04cdc7232716c8a9421d9508f1444"
              }}
              style={styles.ImageBackground_55_166}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4da8/b391/d7a552f605c6be0b07f263eb9c17f7ea"
              }}
              style={styles.ImageBackground_55_167}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d831/7297/0d34e23211bc083e63bfb2b466b45535"
              }}
              style={styles.ImageBackground_55_168}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac74/cf3e/75a463e606c6333023f0051c60db3216"
              }}
              style={styles.ImageBackground_55_169}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7205/40d1/c755e78bef932a3d366ae368f24a8d53"
              }}
              style={styles.ImageBackground_55_170}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98bc/fe67/0bddbcd7d6bd10f7922d1b522f4a3bec"
              }}
              style={styles.ImageBackground_55_171}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae30/dee9/778f24aa0a66b2c95a22816cc2fd1c39"
              }}
              style={styles.ImageBackground_55_172}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52f5/801b/773f3207c858e2d363943d9f6202713b"
              }}
              style={styles.ImageBackground_55_173}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7429/0a49/358d8ea579c6ce13b75c93c46a2ef4c5"
              }}
              style={styles.ImageBackground_55_174}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd09/956b/32fbe310b3be0640cebd545d2a8d94bb"
              }}
              style={styles.ImageBackground_55_175}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcec/6e87/1bade7bf9a73dd8a67ac5f54f11ec4a0"
              }}
              style={styles.ImageBackground_55_176}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c9e/17b2/e000bc2c845eecf67ac2a6020a43d11e"
              }}
              style={styles.ImageBackground_55_177}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c27/1b72/985b3f95f3f6c49dd612eb5cc77937a4"
              }}
              style={styles.ImageBackground_55_178}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a260/1b25/b9a2f3b340a74f36e2cbce9cf9c8294b"
              }}
              style={styles.ImageBackground_55_179}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2254/1f95/e8f9f38e4ce6f36e7a1029937bba0875"
              }}
              style={styles.ImageBackground_55_180}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b71/d930/7ad194e5710d019dd235444961a1bd64"
              }}
              style={styles.ImageBackground_55_181}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15c6/58e2/b9d061b50de3f493b49f74ff16a6424d"
              }}
              style={styles.ImageBackground_55_182}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/269a/e8c0/7a4bbe472365ce457d021faed3a35236"
              }}
              style={styles.ImageBackground_55_183}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9348/944a/643b790f7f8bf7e12f6c092b536fdf94"
              }}
              style={styles.ImageBackground_55_185}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16c3/a841/8ddca589e181cc5e5100da20202dd638"
              }}
              style={styles.ImageBackground_55_187}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6458/6389/eace1290d741d9b326f17f83c392bc5b"
              }}
              style={styles.ImageBackground_55_188}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15c6/58e2/b9d061b50de3f493b49f74ff16a6424d"
              }}
              style={styles.ImageBackground_55_189}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f5/1ce2/ad7a7f9c4354c6263ed15f12f5a8d751"
              }}
              style={styles.ImageBackground_55_190}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6ca/015a/bc07497307123b76f6e131cdf98ae59a"
              }}
              style={styles.ImageBackground_55_191}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12ac/5e5c/2c3a01682173203c6f724c8a3676c712"
              }}
              style={styles.ImageBackground_55_192}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bf4/b306/ab9162a974a2aae0ed14be77acd73bd1"
              }}
              style={styles.ImageBackground_55_193}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac2c/7c18/1d0559e3be775ea7548c71c2da743314"
              }}
              style={styles.ImageBackground_55_194}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a08/55db/be0333a6f07b99d09a1f917b12735dbd"
              }}
              style={styles.ImageBackground_55_195}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef76/4850/fdea92ee347fd44d90d1303625fe9e1e"
              }}
              style={styles.ImageBackground_55_196}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33bb/ee69/828d337b7c6dc8cf1ec623410bf8def9"
              }}
              style={styles.ImageBackground_55_197}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9ce/008c/6e6ebf46e335da46b7178fae4f24bcb1"
              }}
              style={styles.ImageBackground_55_198}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6262/78fb/b8bd7f59056c0e684c453db326631616"
              }}
              style={styles.ImageBackground_55_199}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ba1/9f95/1786de1f6342fce00d104a6eff2f68e3"
              }}
              style={styles.ImageBackground_55_200}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a13d/3e88/e707650ec3fa66a04d73033f054ce4a2"
              }}
              style={styles.ImageBackground_55_202}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1959/bd67/647a54a0005ab815a8f1e9fa0a0d9368"
              }}
              style={styles.ImageBackground_55_203}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/706b/a44b/6937c4930285de28a65f51e28318a1c3"
              }}
              style={styles.ImageBackground_55_204}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d178/0a29/2f16445f5310d70fb9e7159941f5e55d"
              }}
              style={styles.ImageBackground_55_205}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6000/f903/cf64c4a46a81d71bba22d1a3ced16daf"
              }}
              style={styles.ImageBackground_55_206}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d017/9bbd/3c77055703a66d751f728a1ef3a17ca4"
              }}
              style={styles.ImageBackground_55_207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64b5/8d34/0dd08d031a11785b4213100ec2cb689c"
              }}
              style={styles.ImageBackground_55_208}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bdc/a296/6927d784f5868a9f37e0478ce1739e1c"
              }}
              style={styles.ImageBackground_55_209}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0699/94c2/de2c6a3f142df346c9013a171d13465e"
              }}
              style={styles.ImageBackground_55_210}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/658a/93f2/ece790ac1375bb3b031b5b9a0ac2b9e4"
              }}
              style={styles.ImageBackground_55_211}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/478c/d24a/89a1b94f13325d8857d6d0a65d5211ca"
              }}
              style={styles.ImageBackground_55_212}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e73a/987d/68487c7735c445a18a5bc3fe15262834"
              }}
              style={styles.ImageBackground_55_213}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_55_214}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_55_215}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
              }}
              style={styles.ImageBackground_55_216}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3322/26e0/4a7347578739ba06947f31efd3977fa7"
              }}
              style={styles.ImageBackground_55_217}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22ba/5c1c/4793a09cc6d98c12216fc230702310c5"
              }}
              style={styles.ImageBackground_55_218}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b7a/c623/8613630104d72bfca26914069b457020"
              }}
              style={styles.ImageBackground_55_219}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0565/6753/fd78445460d0a7c529a96da781b380ed"
              }}
              style={styles.ImageBackground_55_220}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_221}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a54c/404c/61d80d22687474b0de38145ebbe80d8f"
              }}
              style={styles.ImageBackground_55_222}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_223}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_224}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6629/9d98/3c648d748e1db5c59680aa9377a9e8f9"
              }}
              style={styles.ImageBackground_55_225}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dad7/2062/c6b5c61ca6898cdcf2aa8ae99f5ff3df"
              }}
              style={styles.ImageBackground_55_226}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ea9/80c9/505d5f2b816a298d5aabcf9262b35848"
              }}
              style={styles.ImageBackground_55_227}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ea9/80c9/505d5f2b816a298d5aabcf9262b35848"
              }}
              style={styles.ImageBackground_55_228}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc63/eb64/556e5d4f0a11e4bb0cc875b2ab86a96c"
              }}
              style={styles.ImageBackground_55_229}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e73a/987d/68487c7735c445a18a5bc3fe15262834"
              }}
              style={styles.ImageBackground_55_230}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a54c/404c/61d80d22687474b0de38145ebbe80d8f"
              }}
              style={styles.ImageBackground_55_231}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e73a/987d/68487c7735c445a18a5bc3fe15262834"
              }}
              style={styles.ImageBackground_55_232}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_233}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27e2/2770/616ef1a7a8334241e105a178d46437d4"
              }}
              style={styles.ImageBackground_55_234}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1912/fd5c/d48a2e5879a034f21f813f441c55fd30"
              }}
              style={styles.ImageBackground_55_235}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3322/26e0/4a7347578739ba06947f31efd3977fa7"
              }}
              style={styles.ImageBackground_55_237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0565/6753/fd78445460d0a7c529a96da781b380ed"
              }}
              style={styles.ImageBackground_55_238}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dad7/2062/c6b5c61ca6898cdcf2aa8ae99f5ff3df"
              }}
              style={styles.ImageBackground_55_239}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ea9/80c9/505d5f2b816a298d5aabcf9262b35848"
              }}
              style={styles.ImageBackground_55_240}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ea9/80c9/505d5f2b816a298d5aabcf9262b35848"
              }}
              style={styles.ImageBackground_55_241}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc63/eb64/556e5d4f0a11e4bb0cc875b2ab86a96c"
              }}
              style={styles.ImageBackground_55_242}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0db8/c990/92fc5d797c7034f82a01037e9b1aedbc"
              }}
              style={styles.ImageBackground_55_243}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_244}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_245}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_246}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_247}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6629/9d98/3c648d748e1db5c59680aa9377a9e8f9"
              }}
              style={styles.ImageBackground_55_248}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3322/26e0/4a7347578739ba06947f31efd3977fa7"
              }}
              style={styles.ImageBackground_55_249}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0565/6753/fd78445460d0a7c529a96da781b380ed"
              }}
              style={styles.ImageBackground_55_250}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dad7/2062/c6b5c61ca6898cdcf2aa8ae99f5ff3df"
              }}
              style={styles.ImageBackground_55_251}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ea9/80c9/505d5f2b816a298d5aabcf9262b35848"
              }}
              style={styles.ImageBackground_55_252}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ea9/80c9/505d5f2b816a298d5aabcf9262b35848"
              }}
              style={styles.ImageBackground_55_253}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc63/eb64/556e5d4f0a11e4bb0cc875b2ab86a96c"
              }}
              style={styles.ImageBackground_55_254}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e76/dbfd/2f755b0638211b3adc575420dfa6d654"
              }}
              style={styles.ImageBackground_55_255}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a54a/55c1/741932d44a0fe327e64ae9cb7ea37dea"
              }}
              style={styles.ImageBackground_55_256}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_257}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_258}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_259}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e26/73a2/3b300de098117ce0d4a706e61513e7ef"
              }}
              style={styles.ImageBackground_55_260}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a54c/404c/61d80d22687474b0de38145ebbe80d8f"
              }}
              style={styles.ImageBackground_55_261}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0236/9f13/5859954ea1076e71282c722db1ba1aa3"
              }}
              style={styles.ImageBackground_55_262}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/354c/4ca6/4508597569102b777664fe504a1c9834"
              }}
              style={styles.ImageBackground_55_263}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/912e/6c7d/3fe3e6f6e5280f0f049e638adc4bb914"
              }}
              style={styles.ImageBackground_55_264}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07ea/a13f/c1ad6bc5f0c115d048fabfb77da38521"
              }}
              style={styles.ImageBackground_55_265}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a86b/fa14/ec85d25a3bb619deb84d11e3de0df3f3"
              }}
              style={styles.ImageBackground_55_266}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eeb1/33e0/1556f6cd54d2ab27714dc26787f9be36"
              }}
              style={styles.ImageBackground_55_267}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93d7/cba6/c29bf0a3177f92bbd1741ec6b4309815"
              }}
              style={styles.ImageBackground_55_268}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ae0/c19f/939ca0a57fc33c011deff5991f6a250f"
              }}
              style={styles.ImageBackground_55_269}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/522f/d087/a019b72810be8829511ed17d5d1922a8"
              }}
              style={styles.ImageBackground_55_270}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddb3/6a57/f18d33a1c83a0286eb2e9c568d54a6d3"
              }}
              style={styles.ImageBackground_55_271}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddb3/6a57/f18d33a1c83a0286eb2e9c568d54a6d3"
              }}
              style={styles.ImageBackground_55_272}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddb3/6a57/f18d33a1c83a0286eb2e9c568d54a6d3"
              }}
              style={styles.ImageBackground_55_273}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f44e/adc7/0830d52e351689378021c87e91547dfa"
              }}
              style={styles.ImageBackground_55_274}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3130/3996/4f64bc9616b7ed9ac4b6ca54e6b63be7"
              }}
              style={styles.ImageBackground_55_275}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d51d/e473/17df0fe8d2acf6b1e91891a051033367"
              }}
              style={styles.ImageBackground_55_276}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/377e/14a0/b437933b7ce9465fa7bd7f7d3adb27aa"
              }}
              style={styles.ImageBackground_55_277}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53f0/15aa/79d5d8b0742de804bc1af1f57a0dbf0e"
              }}
              style={styles.ImageBackground_55_278}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c262/a789/5c4d08d419fd52a4fab8a1b31a6798c4"
              }}
              style={styles.ImageBackground_55_279}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b79/f141/eac221194738b4fe03ebcec7877e1c0a"
              }}
              style={styles.ImageBackground_55_280}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44d3/ee98/ffe320e540adda5a9a1ebddfec072ea3"
              }}
              style={styles.ImageBackground_55_281}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66eb/bd3a/28620344afc71016782065bf1c585b18"
              }}
              style={styles.ImageBackground_55_282}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2c6/dc88/1bdb26ff9199c6bb9a82e30035a78512"
              }}
              style={styles.ImageBackground_55_283}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8ab/963e/9b9ab4cf201805f7fd87a10335272de9"
              }}
              style={styles.ImageBackground_55_284}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d7e/66cb/056d687f9bcc335bd26c5a4a038692ac"
              }}
              style={styles.ImageBackground_55_285}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d7f/f03e/2e8f613ea85e778b07c3d7b6d3d6e705"
              }}
              style={styles.ImageBackground_55_286}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0028/3e0c/11b3db18f323837f0b4c43208bbcc3c9"
              }}
              style={styles.ImageBackground_55_287}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a1c/c7fd/91ab13adf86dcee4a545fd4cf593887a"
              }}
              style={styles.ImageBackground_55_288}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a22a/9748/5a5cc94bb45e81690c96ea287f007bb2"
              }}
              style={styles.ImageBackground_55_289}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b63b/4f68/20d72f4daa53aa918f709c6cca88a3df"
              }}
              style={styles.ImageBackground_55_290}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14e5/80f9/27c4a1583bae122900785e93b7edba36"
              }}
              style={styles.ImageBackground_55_291}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af9e/fd52/907255dca3a4145f39006c12146a2ec6"
              }}
              style={styles.ImageBackground_55_292}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adfb/0fba/81749d9666a1fb8edd3c41c16cdecbfc"
              }}
              style={styles.ImageBackground_55_293}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b3c/a859/0ab421acea83c67331d00b80b8c509cd"
              }}
              style={styles.ImageBackground_55_294}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d4c/b439/e0c38ff89b1c354c590e947a54637b50"
              }}
              style={styles.ImageBackground_55_295}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a46/4219/7d3bf0c6ddc8d5a952855688b149d5d1"
              }}
              style={styles.ImageBackground_55_296}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86d1/4e20/3c7fb18e8011115fc41e8aab06e70c92"
              }}
              style={styles.ImageBackground_55_297}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1869/fa4c/214735dc74118243986b59565fb8a190"
              }}
              style={styles.ImageBackground_55_298}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2492/8faa/58e9044f6db87b71b62272d91810ecba"
              }}
              style={styles.ImageBackground_55_299}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaf3/ef6b/76fc0dd4b2d14115825637759b18411d"
              }}
              style={styles.ImageBackground_55_300}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a706/9ce0/9c8b185db483786c771e77c288cac8df"
              }}
              style={styles.ImageBackground_55_301}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21de/eec0/b3abdd32875c50abc30fd4367620d4a2"
              }}
              style={styles.ImageBackground_55_302}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8586/23fc/5606787bbb71a7930c5f7df7fb428fa8"
              }}
              style={styles.ImageBackground_55_303}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e7b/799d/1bd528cd9c3d97f0a66e1ae9f3b9c2da"
              }}
              style={styles.ImageBackground_55_304}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ac2/221a/372c19f5270c43fb1c5d7b25616f7152"
              }}
              style={styles.ImageBackground_55_305}
            />
          </View>
          <View style={styles.View_55_994}>
            <Text style={styles.Text_55_994}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f3f/f7fd/23cda6977e71e99692a69a369363eab2"
            }}
            style={styles.ImageBackground_47_830}
          />
        </View>
        <View style={styles.View_16_42}>
          <View style={styles.View_16_40} />
          <View style={styles.View_16_41}>
            <Text style={styles.Text_16_41}>You’ve got new Order !</Text>
          </View>
          <View style={styles.View_16_43}>
            <Text style={styles.Text_16_43}>Check Now &gt;&gt;</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125f/2591/b96bb0e06e7074a66d5cd4c73826c0f8"
            }}
            style={styles.ImageBackground_16_44}
          />
        </View>
      </View>
      <View style={styles.View_47_834}>
        <Text style={styles.Text_47_834}>Recent Activity</Text>
      </View>
      <View style={styles.View_15_264}>
        <View style={styles.View_15_263} />
        <View style={styles.View_15_265}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046c/059c/9541d9159f8c6f69cfb7b2236d130b14"
            }}
            style={styles.ImageBackground_16_3}
          />
          <View style={styles.View_15_279}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf39/fc2c/e5c31b774f6bc26423bcfb7b50efebc9"
              }}
              style={styles.ImageBackground_15_269}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b580/5d51/7aff626a6634a6ae5a3bcc494e9c2105"
              }}
              style={styles.ImageBackground_15_278}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f74a/31c9/c62f940257c89b9b595980f1c170775a"
            }}
            style={styles.ImageBackground_16_2}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97bf/cc1c/0748205e22266d0d07972451054e01c1"
            }}
            style={styles.ImageBackground_16_4}
          />
          <View style={styles.View_15_272}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1103/e1ec/71812e15609825ae35c52f7c0ef956b3"
              }}
              style={styles.ImageBackground_15_273}
            />
            <View style={styles.View_15_274}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/856e/e583/12321cb6c7ce8d9493474eed2a3bd518"
                }}
                style={styles.ImageBackground_15_275}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/5224/c100cf6f9e057cd72950e27f9fc411ae"
                }}
                style={styles.ImageBackground_15_276}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_16_16}>
        <View style={styles.View_16_17}>
          <View style={styles.View_16_18}>
            <View style={styles.View_16_19}>
              <Text style={styles.Text_16_19}>Hello,</Text>
            </View>
          </View>
          <View style={styles.View_16_20}>
            <View style={styles.View_16_21}>
              <Text style={styles.Text_16_21}>Agent Number One</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_16_22}>
          <View style={styles.View_16_23}>
            <View style={styles.View_16_24} />
            <View style={styles.View_16_31} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28e8/469f/66492e5ceeb1a73ba2047de3f7b2c1e9"
              }}
              style={styles.ImageBackground_16_25}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31f6/a06e/809fa1ee608238e2f47dc43df67ba281"
          }}
          style={styles.ImageBackground_17_361}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_15_10: {
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
  ImageBackground_15_11: {
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
  View_15_12: {
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
  View_15_13: {
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
  View_15_14: {
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
  ImageBackground_15_15: {
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
  ImageBackground_15_16: {
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
  ImageBackground_15_19: {
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
  ImageBackground_15_22: {
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
  ImageBackground_15_25: {
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
  ImageBackground_15_26: {
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
  ImageBackground_15_32: {
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
  View_15_39: {
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
  View_15_40: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_15_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_36: {
    width: wp("121.64401041666666%"),
    minWidth: wp("121.64401041666666%"),
    height: hp("96.40179910044976%"),
    minHeight: hp("96.40179910044976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-21.64400634765625%"),
    top: hp("3.598200899550225%")
  },
  View_15_262: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96.40179910044976%"),
    minHeight: hp("96.40179910044976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.64400634765625%"),
    top: hp("0%")
  },
  ImageBackground_29_225: {
    width: wp("41.73666178385417%"),
    minWidth: wp("41.73666178385417%"),
    height: hp("22.038980509745127%"),
    minHeight: hp("22.038980509745127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.64400634765625%"),
    top: hp("74.36281859070465%")
  },
  ImageBackground_29_226: {
    width: wp("24.70128987630208%"),
    minWidth: wp("24.70128987630208%"),
    height: hp("13.043478260869565%"),
    minHeight: hp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.64400634765625%"),
    top: hp("83.35832083958022%")
  },
  View_16_35: {
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
  View_16_132: {
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
  ImageBackground_16_133: {
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
  View_16_134: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("4.647676161919037%")
  },
  Text_16_134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_135: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.33333333333333%"),
    top: hp("2.2488755622188847%")
  },
  Text_16_135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_136: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("1.199400299850069%")
  },
  Text_16_136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_16_137: {
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
  View_16_138: {
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
  ImageBackground_16_139: {
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
  View_16_140: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("4.647676161919023%")
  },
  Text_16_140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_141: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.33333333333333%"),
    top: hp("2.2488755622188847%")
  },
  Text_16_141: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_142: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("1.199400299850069%")
  },
  Text_16_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_16_143: {
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
  View_55_1888: {
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
  View_55_1889: {
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
  View_213_439: {
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
  ImageBackground_213_443: {
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
  View_213_444: {
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
  View_213_445: {
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
  ImageBackground_213_446: {
    flexGrow: 1,
    width: wp("13.77762451171875%"),
    height: hp("3.5567036275563386%"),
    minHeight: hp("3.5567036275563386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.48903605143229%"),
    top: hp("0.7911327539355355%")
  },
  ImageBackground_213_447: {
    width: wp("8.391234334309896%"),
    height: hp("4.2193202600665005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_213_449: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9999999999999996%"),
    top: hp("5.2473763118440715%")
  },
  Text_213_449: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_1890: {
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
  View_55_1892: {
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
  View_55_1893: {
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
  View_55_1895: {
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
  View_47_835: {
    width: wp("92.53333333333333%"),
    minWidth: wp("92.53333333333333%"),
    height: hp("23.238380809595203%"),
    minHeight: hp("23.238380809595203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.84407796101949%")
  },
  View_16_5: {
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
  View_55_0: {
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
  ImageBackground_55_1: {
    width: wp("46.56539306640625%"),
    height: hp("17.425111601913887%"),
    top: hp("2.8978156185579067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.423588053385416%")
  },
  ImageBackground_55_2: {
    width: wp("23.993194580078125%"),
    height: hp("7.935916037037634%"),
    top: hp("4.004354634206329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.7844482421875%")
  },
  ImageBackground_55_3: {
    width: wp("23.993194580078125%"),
    height: hp("7.935916037037634%"),
    top: hp("4.004354634206329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.7844482421875%")
  },
  ImageBackground_55_4: {
    width: wp("23.993196614583333%"),
    height: hp("7.935904026746392%"),
    top: hp("4.004354634206329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.501550292968744%")
  },
  ImageBackground_55_5: {
    width: wp("23.993196614583333%"),
    height: hp("7.935904026746392%"),
    top: hp("4.004354634206329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.501550292968744%")
  },
  ImageBackground_55_6: {
    width: wp("0.46740315755208334%"),
    height: hp("0.22076488077372447%"),
    top: hp("4.269669974583017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.157548014322913%")
  },
  ImageBackground_55_7: {
    width: wp("0.467401123046875%"),
    height: hp("0.22076488077372447%"),
    top: hp("4.269669974583017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.99394938151041%")
  },
  ImageBackground_55_8: {
    width: wp("0.467401123046875%"),
    height: hp("0.22076488077372447%"),
    top: hp("4.269669974583017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.82624918619792%")
  },
  ImageBackground_55_9: {
    width: wp("13.275903320312498%"),
    height: hp("0.511279813889442%"),
    top: hp("5.183705754544604%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.672448730468744%")
  },
  ImageBackground_55_10: {
    width: wp("0.4752034505208333%"),
    height: hp("0.22709744981025112%"),
    top: hp("5.340045431385867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.08355712890625%")
  },
  ImageBackground_55_11: {
    width: wp("0.29444580078125%"),
    height: hp("0.13741431743844876%"),
    top: hp("5.368769472685528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.138875325520836%")
  },
  ImageBackground_55_12: {
    width: wp("0.6067952473958333%"),
    height: hp("0.029047747244541795%"),
    top: hp("5.356059153040668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.25615234375%")
  },
  ImageBackground_55_13: {
    width: wp("0.6067952473958333%"),
    height: hp("0.029047747244541795%"),
    top: hp("5.456753434806032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.25615234375%")
  },
  ImageBackground_55_14: {
    width: wp("0.6067952473958333%"),
    height: hp("0.029047747244541795%"),
    top: hp("5.557466017967577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.25615234375%")
  },
  ImageBackground_55_15: {
    width: wp("6.355008951822917%"),
    height: hp("4.9633272048058%"),
    top: hp("6.241050617269487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.133349609374996%")
  },
  ImageBackground_55_16: {
    width: wp("3.6571960449218754%"),
    height: hp("1.7273864288558847%"),
    top: hp("6.65160583770615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.4781494140625%")
  },
  ImageBackground_55_17: {
    width: wp("3.6580383300781247%"),
    height: hp("1.7273629801920327%"),
    top: hp("6.65006852042729%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.478051757812494%")
  },
  ImageBackground_55_18: {
    width: wp("1.4690327962239582%"),
    height: hp("0.5557973881711488%"),
    top: hp("7.823206316763496%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.48060709635416%")
  },
  ImageBackground_55_19: {
    width: wp("0.9272135416666667%"),
    height: hp("0.8016629197608227%"),
    top: hp("7.212140999812597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.76554768880208%")
  },
  ImageBackground_55_20: {
    width: wp("0.5575968424479166%"),
    height: hp("0.2633679574397372%"),
    top: hp("7.062142756746624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.47895100911458%")
  },
  ImageBackground_55_21: {
    width: wp("1.010443115234375%"),
    height: hp("0.6276440942126593%"),
    top: hp("7.089265425880811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.835262044270834%")
  },
  ImageBackground_55_22: {
    width: wp("1.37325439453125%"),
    height: hp("0.5391659943953804%"),
    top: hp("6.830886314655174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.557316080729166%")
  },
  ImageBackground_55_23: {
    width: wp("0.09020792643229167%"),
    height: hp("0.06390561585662247%"),
    top: hp("7.44751525604385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81065266927084%")
  },
  ImageBackground_55_24: {
    width: wp("0.3002217610677083%"),
    height: hp("0.19093331904604338%"),
    top: hp("7.268509300037479%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.60519205729167%")
  },
  ImageBackground_55_25: {
    width: wp("0.153594970703125%"),
    height: hp("0.08196451853418994%"),
    top: hp("7.303583925810528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.67345377604167%")
  },
  ImageBackground_55_26: {
    width: wp("0.19526367187500002%"),
    height: hp("0.03804574305864646%"),
    top: hp("7.111629732008993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66754964192708%")
  },
  ImageBackground_55_27: {
    width: wp("0.6348042805989583%"),
    height: hp("0.11883954415614459%"),
    top: hp("7.647311598107201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.0450439453125%")
  },
  ImageBackground_55_28: {
    width: wp("0.10702311197916667%"),
    height: hp("0.019365164829694526%"),
    top: hp("7.5811429002295725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.39283854166666%")
  },
  ImageBackground_55_29: {
    width: wp("0.30305582682291665%"),
    height: hp("0.05513124022705444%"),
    top: hp("7.508303343445469%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.2919677734375%")
  },
  ImageBackground_55_30: {
    width: wp("0.09840087890625%"),
    height: hp("0.046476395591266866%"),
    top: hp("7.344871875585646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.27803955078125%")
  },
  ImageBackground_55_31: {
    width: wp("0.024759928385416668%"),
    height: hp("0.011619670816447245%"),
    top: hp("7.354553314163233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.33544921875%")
  },
  ImageBackground_55_32: {
    width: wp("0.09840087890625%"),
    height: hp("0.046476395591266866%"),
    top: hp("7.344871875585646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.675740559895836%")
  },
  ImageBackground_55_33: {
    width: wp("0.024759928385416668%"),
    height: hp("0.011619670816447245%"),
    top: hp("7.354553314163233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.733150227864584%")
  },
  ImageBackground_55_34: {
    width: wp("0.13625081380208334%"),
    height: hp("0.058241333739868346%"),
    top: hp("7.447368844874433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.470751953125%")
  },
  ImageBackground_55_35: {
    width: wp("0.8346577962239584%"),
    height: hp("0.15499280846637228%"),
    top: hp("7.306072915690592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.1058349609375%")
  },
  ImageBackground_55_36: {
    width: wp("0.12790934244791666%"),
    height: hp("0.5079523912970273%"),
    top: hp("7.8384971332693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.75816243489583%")
  },
  ImageBackground_55_37: {
    width: wp("1.8244974772135416%"),
    height: hp("0.39118376450202635%"),
    top: hp("7.987809073978639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.326847330729166%")
  },
  ImageBackground_55_41: {
    width: wp("1.2706034342447916%"),
    height: hp("0.5338980518895826%"),
    top: hp("7.831917781343698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.70610758463542%")
  },
  ImageBackground_55_42: {
    width: wp("1.0012247721354168%"),
    height: hp("0.5017550810166206%"),
    top: hp("7.838689297929157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.75405680338542%")
  },
  ImageBackground_55_43: {
    width: wp("1.8778320312499999%"),
    height: hp("0.27888125029282235%"),
    top: hp("10.57888414191342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.97506103515625%")
  },
  ImageBackground_55_44: {
    width: wp("0.9184000651041666%"),
    height: hp("0.05809663832634464%"),
    top: hp("10.69119981025112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.45474853515625%")
  },
  ImageBackground_55_45: {
    width: wp("0.3711039225260417%"),
    height: hp("0.16805257039449026%"),
    top: hp("10.631171230790855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.767024739583334%")
  },
  ImageBackground_55_46: {
    width: wp("0.37110595703125%"),
    height: hp("0.16805257039449026%"),
    top: hp("10.631171230790855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.246728515625%")
  },
  ImageBackground_55_47: {
    width: wp("0.3710856119791667%"),
    height: hp("0.16805257039449026%"),
    top: hp("10.631171230790855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.72643229166667%")
  },
  ImageBackground_55_48: {
    width: wp("0.37109781901041666%"),
    height: hp("0.16805257039449026%"),
    top: hp("10.631171230790855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.2061279296875%")
  },
  ImageBackground_55_49: {
    width: wp("0.37109578450520836%"),
    height: hp("0.16805257039449026%"),
    top: hp("10.631171230790855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.685839843749996%")
  },
  ImageBackground_55_50: {
    width: wp("3.9236979166666663%"),
    height: hp("0.1336207811621533%"),
    top: hp("8.98744963455772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32235107421875%")
  },
  ImageBackground_55_51: {
    width: wp("4.452608235677084%"),
    height: hp("0.06971573722416136%"),
    top: hp("9.403412917564651%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.080448404947916%")
  },
  ImageBackground_55_52: {
    width: wp("4.452608235677084%"),
    height: hp("0.06971802489868346%"),
    top: hp("9.724876941412106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.080448404947916%")
  },
  ImageBackground_55_53: {
    width: wp("2.513291422526042%"),
    height: hp("0.06973518245759933%"),
    top: hp("10.04634096525956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05419921875%")
  },
  ImageBackground_55_54: {
    width: wp("0.5084004720052083%"),
    height: hp("0.24012975964410374%"),
    top: hp("8.603614452539354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.206746419270836%")
  },
  ImageBackground_55_55: {
    width: wp("0.16810302734375002%"),
    height: hp("0.11812807737976713%"),
    top: hp("8.66365218269771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.362548828125%")
  },
  ImageBackground_55_56: {
    width: wp("0.5084065755208333%"),
    height: hp("0.24012975964410374%"),
    top: hp("8.603614452539354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.32215169270833%")
  },
  ImageBackground_55_57: {
    width: wp("0.16809895833333333%"),
    height: hp("0.11812807737976713%"),
    top: hp("8.66365218269771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.506648763020834%")
  },
  ImageBackground_55_58: {
    width: wp("3.3210001627604164%"),
    height: hp("0.3582584089425014%"),
    top: hp("5.2611664138633785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.133349609374996%")
  },
  ImageBackground_55_59: {
    width: wp("23.136297607421874%"),
    height: hp("0.027111230761572336%"),
    top: hp("4.678276096326833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.927945963541667%")
  },
  ImageBackground_55_61: {
    width: wp("6.355000813802084%"),
    height: hp("4.9633272048058%"),
    top: hp("6.241050617269487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.32065022786458%")
  },
  ImageBackground_55_62: {
    width: wp("3.9237019856770834%"),
    height: hp("0.13362707226708911%"),
    top: hp("8.98744963455772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.511698404947914%")
  },
  ImageBackground_55_63: {
    width: wp("4.452815755208333%"),
    height: hp("0.06980209693737116%"),
    top: hp("9.403412917564651%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.267740885416664%")
  },
  ImageBackground_55_64: {
    width: wp("4.452815755208333%"),
    height: hp("0.06980610036778485%"),
    top: hp("9.724876941412106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.267740885416664%")
  },
  ImageBackground_55_65: {
    width: wp("2.5133626302083334%"),
    height: hp("0.06974433315568779%"),
    top: hp("10.04634096525956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.241512044270834%")
  },
  ImageBackground_55_66: {
    width: wp("3.659232584635417%"),
    height: hp("1.7277741896873828%"),
    top: hp("6.651477727932907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.667521158854164%")
  },
  ImageBackground_55_67: {
    width: wp("2.1709472656249997%"),
    height: hp("0.4527393667058072%"),
    top: hp("7.926224875843332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.04879964192708%")
  },
  ImageBackground_55_68: {
    width: wp("1.2379109700520834%"),
    height: hp("0.5695005585586113%"),
    top: hp("7.366787797507499%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.49825846354167%")
  },
  ImageBackground_55_69: {
    width: wp("0.6970743815104167%"),
    height: hp("0.32921123361659016%"),
    top: hp("6.738208044415288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.18899739583333%")
  },
  ImageBackground_55_70: {
    width: wp("0.6642008463541667%"),
    height: hp("0.15919069121445137%"),
    top: hp("6.90891431725543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.198848470052084%")
  },
  ImageBackground_55_71: {
    width: wp("0.7781534830729167%"),
    height: hp("0.6393718576502765%"),
    top: hp("7.294524734702961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.811328125%")
  },
  ImageBackground_55_72: {
    width: wp("1.1192952473958333%"),
    height: hp("0.5993587145026119%"),
    top: hp("7.443644510752435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.00615234375%")
  },
  ImageBackground_55_73: {
    width: wp("0.96759033203125%"),
    height: hp("0.6042286016415621%"),
    top: hp("7.180662598388302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.07585856119791%")
  },
  ImageBackground_55_74: {
    width: wp("0.96759033203125%"),
    height: hp("0.6042286016415621%"),
    top: hp("7.180662598388302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.07585856119791%")
  },
  ImageBackground_55_75: {
    width: wp("0.09840087890625%"),
    height: hp("0.046476395591266866%"),
    top: hp("7.430083176185342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.31365152994791%")
  },
  ImageBackground_55_76: {
    width: wp("0.024763997395833334%"),
    height: hp("0.011619670816447245%"),
    top: hp("7.439764614762929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.33004964192708%")
  },
  ImageBackground_55_77: {
    width: wp("0.0984619140625%"),
    height: hp("0.046498128499226944%"),
    top: hp("7.430074025487258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.70716145833333%")
  },
  ImageBackground_55_78: {
    width: wp("0.024763997395833334%"),
    height: hp("0.011619670816447245%"),
    top: hp("7.439764614762929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.71955159505208%")
  },
  ImageBackground_55_79: {
    width: wp("0.12711181640625%"),
    height: hp("0.06003315480931409%"),
    top: hp("7.52690671265929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.502237955729164%")
  },
  ImageBackground_55_81: {
    width: wp("1.5252034505208334%"),
    height: hp("0.5510922135977909%"),
    top: hp("6.939029264664541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.74784749348959%")
  },
  ImageBackground_55_82: {
    width: wp("0.1970458984375%"),
    height: hp("0.14428534786561797%"),
    top: hp("7.3923182451742875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.96553955078125%")
  },
  ImageBackground_55_83: {
    width: wp("0.09600830078125%"),
    height: hp("0.051618515998348484%"),
    top: hp("7.411415752084892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.01680094401042%")
  },
  ImageBackground_55_84: {
    width: wp("0.04921875%"),
    height: hp("0.030988267157924944%"),
    top: hp("7.488986219780735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.01145833333333%")
  },
  ImageBackground_55_85: {
    width: wp("0.03690592447916667%"),
    height: hp("0.0271627034383199%"),
    top: hp("7.490120906343698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.022945149739584%")
  },
  ImageBackground_55_86: {
    width: wp("0.19703776041666665%"),
    height: hp("0.14428534786561797%"),
    top: hp("7.3923182451742875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.9403076171875%")
  },
  ImageBackground_55_87: {
    width: wp("0.10009765624999999%"),
    height: hp("0.05169172158305613%"),
    top: hp("7.411342546500187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.99624837239583%")
  },
  ImageBackground_55_88: {
    width: wp("0.04921875%"),
    height: hp("0.03097454111079226%"),
    top: hp("7.484429172132685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.04631754557292%")
  },
  ImageBackground_55_89: {
    width: wp("0.03690185546875%"),
    height: hp("0.0271627034383199%"),
    top: hp("7.490120906343698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.049198404947916%")
  },
  ImageBackground_55_90: {
    width: wp("0.2656168619791667%"),
    height: hp("0.04453644759651424%"),
    top: hp("7.623739399831329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.40634358723958%")
  },
  ImageBackground_55_91: {
    width: wp("0.8763305664062501%"),
    height: hp("0.19365679556462004%"),
    top: hp("7.381328256770054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.117919921875%")
  },
  ImageBackground_55_92: {
    width: wp("0.5164469401041667%"),
    height: hp("0.09233283138704086%"),
    top: hp("7.719016468328334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.367106119791664%")
  },
  ImageBackground_55_93: {
    width: wp("0.8126139322916667%"),
    height: hp("0.3911797610716126%"),
    top: hp("7.943263475684034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.077893066406254%")
  },
  ImageBackground_55_94: {
    width: wp("1.3078857421874999%"),
    height: hp("0.14582094938858695%"),
    top: hp("7.932996392428784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.911861165364584%")
  },
  ImageBackground_55_95: {
    width: wp("1.3078857421874999%"),
    height: hp("0.14582094938858695%"),
    top: hp("7.932996392428784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.911861165364584%")
  },
  ImageBackground_55_96: {
    width: wp("0.06560465494791667%"),
    height: hp("0.030984263727511247%"),
    top: hp("7.968446196823464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.18694661458333%")
  },
  ImageBackground_55_97: {
    width: wp("0.06560465494791667%"),
    height: hp("0.030980832215728074%"),
    top: hp("8.206638868065966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.79334309895833%")
  },
  ImageBackground_55_98: {
    width: wp("0.06559651692708333%"),
    height: hp("0.03098483564614177%"),
    top: hp("8.080752714463081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.00615234375%")
  },
  ImageBackground_55_99: {
    width: wp("0.0656005859375%"),
    height: hp("0.030984263727511247%"),
    top: hp("8.016853389711393%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.34193929036458%")
  },
  ImageBackground_55_100: {
    width: wp("0.24623209635416665%"),
    height: hp("0.16997192931854385%"),
    top: hp("10.629231282796106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.96925048828125%")
  },
  ImageBackground_55_101: {
    width: wp("0.37109781901041666%"),
    height: hp("0.16788099480533172%"),
    top: hp("10.631326792658356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.929736328125%")
  },
  ImageBackground_55_102: {
    width: wp("0.37109375%"),
    height: hp("0.16788099480533172%"),
    top: hp("10.631326792658356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.409427897135416%")
  },
  ImageBackground_55_103: {
    width: wp("0.37109375%"),
    height: hp("0.16788099480533172%"),
    top: hp("10.631326792658356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.88912760416667%")
  },
  ImageBackground_55_104: {
    width: wp("0.3711018880208333%"),
    height: hp("0.16788099480533172%"),
    top: hp("10.631326792658356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.36882731119792%")
  },
  ImageBackground_55_105: {
    width: wp("0.18632812499999998%"),
    height: hp("0.16971227826028393%"),
    top: hp("10.63155556011057%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.84852701822917%")
  },
  ImageBackground_55_106: {
    width: wp("1.8778035481770834%"),
    height: hp("0.27885951738486225%"),
    top: hp("10.57888414191342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.166446940104166%")
  },
  ImageBackground_55_107: {
    width: wp("0.9184000651041666%"),
    height: hp("0.05810235751264992%"),
    top: hp("10.69119981025112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.644099934895834%")
  },
  ImageBackground_55_108: {
    width: wp("6.355000813802084%"),
    height: hp("4.9633272048058%"),
    top: hp("6.241050617269487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.50794677734375%")
  },
  ImageBackground_55_109: {
    width: wp("3.9237019856770834%"),
    height: hp("0.1336207811621533%"),
    top: hp("8.98744963455772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.696948242187496%")
  },
  ImageBackground_55_110: {
    width: wp("4.452604166666667%"),
    height: hp("0.06971573722416136%"),
    top: hp("9.403412917564651%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.46119791666666%")
  },
  ImageBackground_55_111: {
    width: wp("4.452604166666667%"),
    height: hp("0.06971802489868346%"),
    top: hp("9.724876941412106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.46119791666666%")
  },
  ImageBackground_55_112: {
    width: wp("2.5133097330729166%"),
    height: hp("0.06971573722416136%"),
    top: hp("10.04634096525956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.43084309895833%")
  },
  ImageBackground_55_113: {
    width: wp("3.657149251302083%"),
    height: hp("1.7274058740893223%"),
    top: hp("6.651578385611877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.85695393880208%")
  },
  ImageBackground_55_114: {
    width: wp("0.3211954752604167%"),
    height: hp("0.2504568943555566%"),
    top: hp("7.055700665292356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.90504557291667%")
  },
  ImageBackground_55_115: {
    width: wp("1.0331949869791668%"),
    height: hp("0.9873872039200127%"),
    top: hp("7.186464140976383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.2488037109375%")
  },
  ImageBackground_55_116: {
    width: wp("1.1437215169270833%"),
    height: hp("0.8033935455368019%"),
    top: hp("6.893669254240066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.13212076822917%")
  },
  ImageBackground_55_117: {
    width: wp("0.8486979166666667%"),
    height: hp("0.4649240931292166%"),
    top: hp("6.878177122376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.371801757812506%")
  },
  ImageBackground_55_118: {
    width: wp("0.07790120442708333%"),
    height: hp("0.07165168178850029%"),
    top: hp("7.36812379942841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.15284830729166%")
  },
  ImageBackground_55_119: {
    width: wp("0.6012980143229166%"),
    height: hp("0.11733825775100731%"),
    top: hp("7.626859787879496%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.37384847005208%")
  },
  ImageBackground_55_120: {
    width: wp("0.11480305989583334%"),
    height: hp("0.054223033441775204%"),
    top: hp("7.275161857547786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.656750488281254%")
  },
  ImageBackground_55_121: {
    width: wp("0.024759928385416668%"),
    height: hp("0.011619670816447245%"),
    top: hp("7.286774093422039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.67725423177084%")
  },
  ImageBackground_55_122: {
    width: wp("0.11479899088541667%"),
    height: hp("0.054221889604514156%"),
    top: hp("7.279032602839202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.246752929687496%")
  },
  ImageBackground_55_123: {
    width: wp("0.024759928385416668%"),
    height: hp("0.011619098897816716%"),
    top: hp("7.290653989411545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.26724853515625%")
  },
  ImageBackground_55_124: {
    width: wp("0.15990397135416667%"),
    height: hp("0.06390561585662247%"),
    top: hp("7.379736035302656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.3861328125%")
  },
  ImageBackground_55_126: {
    width: wp("3.2754923502604165%"),
    height: hp("0.5924293483751288%"),
    top: hp("7.786603524409671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.041349283854174%")
  },
  ImageBackground_55_127: {
    width: wp("1.5626383463541667%"),
    height: hp("0.4687914069088503%"),
    top: hp("6.812218890554725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.8742919921875%")
  },
  ImageBackground_55_128: {
    width: wp("1.5645548502604165%"),
    height: hp("0.3427462599266773%"),
    top: hp("6.8100501751077545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.87127278645833%")
  },
  ImageBackground_55_129: {
    width: wp("0.2349283854166667%"),
    height: hp("0.023834137008644115%"),
    top: hp("7.1486900592672455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.08561604817708%")
  },
  ImageBackground_55_130: {
    width: wp("0.5699015299479167%"),
    height: hp("0.12564766353395568%"),
    top: hp("7.981998380692467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.447652180989586%")
  },
  ImageBackground_55_131: {
    width: wp("0.6149983723958333%"),
    height: hp("0.31371795791557344%"),
    top: hp("7.714752243019113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.734651692708326%")
  },
  ImageBackground_55_132: {
    width: wp("0.43050537109375003%"),
    height: hp("0.2807977496237233%"),
    top: hp("7.737995016163794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.304150390625%")
  },
  ImageBackground_55_133: {
    width: wp("0.7585042317708333%"),
    height: hp("0.04841291207423632%"),
    top: hp("7.981998380692467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.345149739583334%")
  },
  ImageBackground_55_135: {
    width: wp("0.4633015950520833%"),
    height: hp("0.23647634343228777%"),
    top: hp("7.1066883550412285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.97245279947917%")
  },
  ImageBackground_55_136: {
    width: wp("0.26748453776041664%"),
    height: hp("0.18586097271188626%"),
    top: hp("7.2143737701461745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.1822509765625%")
  },
  ImageBackground_55_137: {
    width: wp("0.14007161458333334%"),
    height: hp("0.08058505079735523%"),
    top: hp("7.246867899058287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.25469563802083%")
  },
  ImageBackground_55_138: {
    width: wp("0.13529866536458332%"),
    height: hp("0.0174332236957693%"),
    top: hp("7.127982029493062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.98474934895833%")
  },
  ImageBackground_55_139: {
    width: wp("0.11643473307291667%"),
    height: hp("0.0168670242515461%"),
    top: hp("7.165554795844265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.088069661458334%")
  },
  ImageBackground_55_140: {
    width: wp("0.5009236653645833%"),
    height: hp("0.25773627468492316%"),
    top: hp("7.445492951766305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.31211751302084%")
  },
  ImageBackground_55_141: {
    width: wp("0.2501017252604167%"),
    height: hp("0.04745723604262322%"),
    top: hp("7.495931599629877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.42715250651042%")
  },
  ImageBackground_55_142: {
    width: wp("0.17220458984374998%"),
    height: hp("0.023238197795633433%"),
    top: hp("7.24030684852886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.652644856770834%")
  },
  ImageBackground_55_143: {
    width: wp("0.1721923828125%"),
    height: hp("0.025175286197233415%"),
    top: hp("7.244177593820275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.201656087239584%")
  },
  ImageBackground_55_144: {
    width: wp("0.3710734049479167%"),
    height: hp("0.16805257039449026%"),
    top: hp("10.631171230790855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.09652506510417%")
  },
  ImageBackground_55_145: {
    width: wp("0.3710693359375%"),
    height: hp("0.16805257039449026%"),
    top: hp("10.631171230790855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.57827962239583%")
  },
  ImageBackground_55_146: {
    width: wp("0.3709716796875%"),
    height: hp("0.16805257039449026%"),
    top: hp("10.631171230790855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.0559326171875%")
  },
  ImageBackground_55_147: {
    width: wp("0.3709798177083333%"),
    height: hp("0.16805257039449026%"),
    top: hp("10.631171230790855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.53562825520833%")
  },
  ImageBackground_55_148: {
    width: wp("0.3709716796875%"),
    height: hp("0.16805257039449026%"),
    top: hp("10.631171230790855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.01532796223958%")
  },
  ImageBackground_55_149: {
    width: wp("1.8777954101562502%"),
    height: hp("0.27885951738486225%"),
    top: hp("10.57888414191342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.35375162760417%")
  },
  ImageBackground_55_150: {
    width: wp("0.918408203125%"),
    height: hp("0.05809663832634464%"),
    top: hp("10.69119981025112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.83549397786459%")
  },
  ImageBackground_55_151: {
    width: wp("21.676698811848958%"),
    height: hp("0.24402738511115538%"),
    top: hp("14.083976688413607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.86814778645833%")
  },
  ImageBackground_55_152: {
    width: wp("21.676698811848958%"),
    height: hp("0.24402738511115538%"),
    top: hp("14.083976688413607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.86814778645833%")
  },
  ImageBackground_55_153: {
    width: wp("19.7497314453125%"),
    height: hp("0.24402509743663325%"),
    top: hp("14.083994989809781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.81812337239583%")
  },
  ImageBackground_55_154: {
    width: wp("4.2229980468749995%"),
    height: hp("6.016802466076532%"),
    top: hp("14.328007505036545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.604349772135414%")
  },
  ImageBackground_55_155: {
    width: wp("0.5001871744791666%"),
    height: hp("6.016802466076532%"),
    top: hp("14.328007505036545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.10416259765625%")
  },
  ImageBackground_55_156: {
    width: wp("0.50020751953125%"),
    height: hp("1.6634710903825431%"),
    top: hp("18.681342312242315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.659350585937496%")
  },
  ImageBackground_55_157: {
    width: wp("5.440702311197917%"),
    height: hp("5.379675960969711%"),
    top: hp("14.328007505036545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66754964192708%")
  },
  ImageBackground_55_158: {
    width: wp("4.817496744791667%"),
    height: hp("6.016805897588315%"),
    top: hp("14.334788172320089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.19411214192708%")
  },
  ImageBackground_55_159: {
    width: wp("0.5002014160156251%"),
    height: hp("6.016802466076532%"),
    top: hp("14.328007505036545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.703751627604166%")
  },
  ImageBackground_55_160: {
    width: wp("17.404512532552083%"),
    height: hp("0.5557939566593656%"),
    top: hp("14.328007505036545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.699650065104166%")
  },
  ImageBackground_55_161: {
    width: wp("17.90060017903646%"),
    height: hp("5.379675960969711%"),
    top: hp("14.328007505036545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.703751627604166%")
  },
  ImageBackground_55_162: {
    width: wp("3.924532063802083%"),
    height: hp("4.241779790646668%"),
    top: hp("15.108827422226383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46663004557291%")
  },
  ImageBackground_55_163: {
    width: wp("3.7597127278645837%"),
    height: hp("1.357508349096936%"),
    top: hp("15.145219748524177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.5490478515625%")
  },
  ImageBackground_55_164: {
    width: wp("3.7556030273437497%"),
    height: hp("1.3575094929341969%"),
    top: hp("17.95900450653579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.5490478515625%")
  },
  ImageBackground_55_165: {
    width: wp("3.7597127278645837%"),
    height: hp("1.357508349096936%"),
    top: hp("16.55308210152736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.5490478515625%")
  },
  ImageBackground_55_166: {
    width: wp("4.538700358072917%"),
    height: hp("2.7285728854932882%"),
    top: hp("6.490864675084332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.56195068359375%")
  },
  ImageBackground_55_167: {
    width: wp("3.329205322265625%"),
    height: hp("2.18053471738252%"),
    top: hp("6.765852303340516%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.164650472005206%")
  },
  ImageBackground_55_168: {
    width: wp("0.13119710286458333%"),
    height: hp("2.7285728854932882%"),
    top: hp("6.490864675084332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.100651041666666%")
  },
  ImageBackground_55_169: {
    width: wp("1.4431925455729167%"),
    height: hp("0.6816589492729221%"),
    top: hp("7.4726888264851965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.558256022135417%")
  },
  ImageBackground_55_170: {
    width: wp("1.5006001790364583%"),
    height: hp("0.5538477175596772%"),
    top: hp("8.15435177918853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.579150390625%")
  },
  ImageBackground_55_171: {
    width: wp("1.5580037434895833%"),
    height: hp("0.7358819827146973%"),
    top: hp("7.002114177286359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.44795125325521%")
  },
  ImageBackground_55_172: {
    width: wp("1.44320068359375%"),
    height: hp("1.0011881723932956%"),
    top: hp("13.083210591969639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.20584716796875%")
  },
  ImageBackground_55_173: {
    width: wp("1.5211140950520834%"),
    height: hp("0.17633623983906485%"),
    top: hp("12.904662170867695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.17303466796875%")
  },
  ImageBackground_55_174: {
    width: wp("1.32225341796875%"),
    height: hp("0.17633623983906485%"),
    top: hp("12.904662170867695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.3677978515625%")
  },
  ImageBackground_55_175: {
    width: wp("1.4431966145833335%"),
    height: hp("1.0011870285560345%"),
    top: hp("13.082817111951833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.20790201822916%")
  },
  ImageBackground_55_176: {
    width: wp("0.8199788411458334%"),
    height: hp("0.19365279213420633%"),
    top: hp("13.313268292611511%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.54001057942708%")
  },
  ImageBackground_55_177: {
    width: wp("1.2997111002604167%"),
    height: hp("0.18784324268529798%"),
    top: hp("13.582445227581516%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.28784993489583%")
  },
  ImageBackground_55_178: {
    width: wp("3.7678955078125%"),
    height: hp("2.629809972943216%"),
    top: hp("16.661536175271742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.48825276692708%")
  },
  ImageBackground_55_179: {
    width: wp("1.0577962239583334%"),
    height: hp("1.4620813830145474%"),
    top: hp("17.83119670633433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.68505452473958%")
  },
  ImageBackground_55_180: {
    width: wp("2.0664021809895834%"),
    height: hp("0.9663365948861506%"),
    top: hp("19.376539147418477%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.939249674479164%")
  },
  ImageBackground_55_181: {
    width: wp("2.574808756510417%"),
    height: hp("1.2161403581656438%"),
    top: hp("15.44733004591454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.94334309895834%")
  },
  ImageBackground_55_182: {
    width: wp("1.8367960611979168%"),
    height: hp("0.8675582405330537%"),
    top: hp("17.025605849419037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.15615234375%")
  },
  ImageBackground_55_183: {
    width: wp("1.8367960611979168%"),
    height: hp("0.8675582405330537%"),
    top: hp("17.025605849419037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.15615234375%")
  },
  ImageBackground_55_185: {
    width: wp("2.574808756510417%"),
    height: hp("1.2161403581656438%"),
    top: hp("15.44733004591454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.94334309895834%")
  },
  ImageBackground_55_187: {
    width: wp("1.0987996419270833%"),
    height: hp("0.5189909927848576%"),
    top: hp("16.390419292306966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.7092529296875%")
  },
  ImageBackground_55_188: {
    width: wp("1.3038045247395833%"),
    height: hp("0.6158168169333302%"),
    top: hp("18.02485292998032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.59034830729166%")
  },
  ImageBackground_55_189: {
    width: wp("1.6646036783854166%"),
    height: hp("0.7862325551091641%"),
    top: hp("17.393546268857754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.89904785156251%")
  },
  ImageBackground_55_190: {
    width: wp("2.3780029296875003%"),
    height: hp("0.10457189008035045%"),
    top: hp("19.27391406835644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.78755289713542%")
  },
  ImageBackground_55_191: {
    width: wp("1.28740234375%"),
    height: hp("1.2161426458401658%"),
    top: hp("15.44733004591454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.94334309895834%")
  },
  ImageBackground_55_192: {
    width: wp("1.0554606119791667%"),
    height: hp("0.8606448881272254%"),
    top: hp("17.033338189303784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.154398600260414%")
  },
  ImageBackground_55_193: {
    width: wp("0.9384928385416667%"),
    height: hp("0.44393811090060437%"),
    top: hp("16.465940003630998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.70555013020833%")
  },
  ImageBackground_55_194: {
    width: wp("1.1252807617187501%"),
    height: hp("0.5168623116420306%"),
    top: hp("18.121676466454275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.5966796875%")
  },
  ImageBackground_55_195: {
    width: wp("2.2222005208333333%"),
    height: hp("1.0708924712448462%"),
    top: hp("19.27198327105978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.78755289713542%")
  },
  ImageBackground_55_196: {
    width: wp("1.3915079752604167%"),
    height: hp("0.6819065900399409%"),
    top: hp("17.492300602628376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.1614501953125%")
  },
  ImageBackground_55_197: {
    width: wp("2.8747741699218747%"),
    height: hp("0.07172545929183846%"),
    top: hp("14.008401072901052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.56835123697916%")
  },
  ImageBackground_55_198: {
    width: wp("2.8747741699218747%"),
    height: hp("0.07172545929183846%"),
    top: hp("14.008401072901052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.56835123697916%")
  },
  ImageBackground_55_199: {
    width: wp("4.948704020182292%"),
    height: hp("0.07164310300904235%"),
    top: hp("14.008492579881931%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.617997233072913%")
  },
  ImageBackground_55_200: {
    width: wp("4.979762776692708%"),
    height: hp("0.011647694829343141%"),
    top: hp("14.010395925084332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.374853515625%")
  },
  ImageBackground_55_202: {
    width: wp("1.58309326171875%"),
    height: hp("1.6363712979935812%"),
    top: hp("12.372118994213835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.60972493489584%")
  },
  ImageBackground_55_203: {
    width: wp("1.58309326171875%"),
    height: hp("1.6363712979935812%"),
    top: hp("12.372118994213835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.60972493489584%")
  },
  ImageBackground_55_204: {
    width: wp("5.5585571289062505%"),
    height: hp("1.6364033254368908%"),
    top: hp("12.372118994213835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.515368652343746%")
  },
  ImageBackground_55_205: {
    width: wp("5.313606770833333%"),
    height: hp("1.52792408727277%"),
    top: hp("12.42634603108602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.63725179036458%")
  },
  ImageBackground_55_206: {
    width: wp("5.327950032552083%"),
    height: hp("1.52792408727277%"),
    top: hp("12.42634603108602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.64134928385417%")
  },
  ImageBackground_55_207: {
    width: wp("5.327950032552083%"),
    height: hp("1.52792408727277%"),
    top: hp("12.42634603108602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.64134928385417%")
  },
  ImageBackground_55_208: {
    width: wp("0.09133504231770834%"),
    height: hp("0.04240662261642616%"),
    top: hp("12.477379474325332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.341471354166664%")
  },
  ImageBackground_55_209: {
    width: wp("0.09134114583333333%"),
    height: hp("0.04241577331451462%"),
    top: hp("12.47743437851387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.504992675781253%")
  },
  ImageBackground_55_210: {
    width: wp("0.091357421875%"),
    height: hp("0.04242378017534201%"),
    top: hp("12.477416077117695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.664823404947917%")
  },
  ImageBackground_55_211: {
    width: wp("2.5854919433593753%"),
    height: hp("0.10070686397523894%"),
    top: hp("12.652926466454275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.501521809895834%")
  },
  ImageBackground_55_212: {
    width: wp("0.080029296875%"),
    height: hp("0.04426993351468796%"),
    top: hp("12.684166949728258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.90420328776042%")
  },
  ImageBackground_55_213: {
    width: wp("0.05841878255208333%"),
    height: hp("0.0280400266175506%"),
    top: hp("12.689236436469265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.913745117187496%")
  },
  ImageBackground_55_214: {
    width: wp("0.11887613932291667%"),
    height: hp("0.005818700146996814%"),
    top: hp("12.68777232477511%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.327661132812494%")
  },
  ImageBackground_55_215: {
    width: wp("0.11890869140624999%"),
    height: hp("0.00580154258808096%"),
    top: hp("12.707144352628376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.31944986979167%")
  },
  ImageBackground_55_216: {
    width: wp("0.11890055338541668%"),
    height: hp("0.00580154258808096%"),
    top: hp("12.726507229783543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.31125081380208%")
  },
  ImageBackground_55_217: {
    width: wp("1.5926493326822917%"),
    height: hp("0.9547209275001172%"),
    top: hp("12.860107421875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.00941569010417%")
  },
  ImageBackground_55_218: {
    width: wp("0.7144510904947917%"),
    height: hp("0.3315835520960223%"),
    top: hp("12.937019039308467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.5420166015625%")
  },
  ImageBackground_55_219: {
    width: wp("0.7144510904947917%"),
    height: hp("0.3315835520960223%"),
    top: hp("12.937019039308467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.5420166015625%")
  },
  ImageBackground_55_220: {
    width: wp("0.3730997721354167%"),
    height: hp("0.054223605360405734%"),
    top: hp("13.692820947924474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.77294921875%")
  },
  ImageBackground_55_221: {
    width: wp("0.06867472330729167%"),
    height: hp("0.032456382282491564%"),
    top: hp("13.702996524198838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.166149902343747%")
  },
  ImageBackground_55_222: {
    width: wp("0.06662394205729166%"),
    height: hp("0.032456382282491564%"),
    top: hp("13.702996524198838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.2583984375%")
  },
  ImageBackground_55_223: {
    width: wp("0.06867268880208333%"),
    height: hp("0.032456382282491564%"),
    top: hp("13.702996524198838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.350651041666666%")
  },
  ImageBackground_55_224: {
    width: wp("0.068670654296875%"),
    height: hp("0.032456382282491564%"),
    top: hp("13.702996524198838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.440852864583334%")
  },
  ImageBackground_55_225: {
    width: wp("0.06866658528645833%"),
    height: hp("0.032456382282491564%"),
    top: hp("13.702996524198838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.535152180989584%")
  },
  ImageBackground_55_226: {
    width: wp("0.7625996907552083%"),
    height: hp("0.023246204656460833%"),
    top: hp("13.388789003935528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.397802734375%")
  },
  ImageBackground_55_227: {
    width: wp("0.8568990071614583%"),
    height: hp("0.015492131863755624%"),
    top: hp("13.4662588139524%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.321948242187503%")
  },
  ImageBackground_55_228: {
    width: wp("0.8589477539062499%"),
    height: hp("0.015512720934454646%"),
    top: hp("13.526287393412666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.297351074218746%")
  },
  ImageBackground_55_229: {
    width: wp("0.48385416666666664%"),
    height: hp("0.015513864771715704%"),
    top: hp("13.58827422226387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.457255045572914%")
  },
  ImageBackground_55_230: {
    width: wp("0.09952392578125001%"),
    height: hp("0.04627164872153767%"),
    top: hp("13.311987194879123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.01337483723958%")
  },
  ImageBackground_55_231: {
    width: wp("0.03301595052083334%"),
    height: hp("0.023238197795633433%"),
    top: hp("13.324880528485757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.04724934895833%")
  },
  ImageBackground_55_232: {
    width: wp("0.09951171874999999%"),
    height: hp("0.04627050488427661%"),
    top: hp("13.311923139992501%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.27265625%")
  },
  ImageBackground_55_233: {
    width: wp("0.0327880859375%"),
    height: hp("0.023238197795633433%"),
    top: hp("13.324880528485757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.30716145833333%")
  },
  ImageBackground_55_234: {
    width: wp("0.6575276692708333%"),
    height: hp("0.06789817981634183%"),
    top: hp("12.670294491426162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.4400634765625%")
  },
  ImageBackground_55_235: {
    width: wp("4.456689453125%"),
    height: hp("0.0038741768031999627%"),
    top: hp("12.55801542588081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.27274983723958%")
  },
  ImageBackground_55_237: {
    width: wp("1.592633056640625%"),
    height: hp("0.9547209275001172%"),
    top: hp("12.860107421875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.7769287109375%")
  },
  ImageBackground_55_238: {
    width: wp("0.37310791015625%"),
    height: hp("0.054223605360405734%"),
    top: hp("13.692820947924474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.54044189453125%")
  },
  ImageBackground_55_239: {
    width: wp("0.7626180013020833%"),
    height: hp("0.023246204656460833%"),
    top: hp("13.388789003935528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.16324055989583%")
  },
  ImageBackground_55_240: {
    width: wp("0.856890869140625%"),
    height: hp("0.015492131863755624%"),
    top: hp("13.4662588139524%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.09151204427083%")
  },
  ImageBackground_55_241: {
    width: wp("0.85692138671875%"),
    height: hp("0.015533310005153672%"),
    top: hp("13.526287393412666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.064860026041664%")
  },
  ImageBackground_55_242: {
    width: wp("0.48387044270833335%"),
    height: hp("0.015513864771715704%"),
    top: hp("13.58827422226387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.22474772135416%")
  },
  ImageBackground_55_243: {
    width: wp("0.7144368489583333%"),
    height: hp("0.3315858397705444%"),
    top: hp("12.936808573252435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.30916341145833%")
  },
  ImageBackground_55_244: {
    width: wp("0.06867268880208333%"),
    height: hp("0.032456382282491564%"),
    top: hp("13.702996524198838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.92544759114583%")
  },
  ImageBackground_55_245: {
    width: wp("0.06867879231770833%"),
    height: hp("0.032456382282491564%"),
    top: hp("13.702996524198838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.015649414062494%")
  },
  ImageBackground_55_246: {
    width: wp("0.06867268880208333%"),
    height: hp("0.03099455826286076%"),
    top: hp("13.704451485194902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.11199951171875%")
  },
  ImageBackground_55_247: {
    width: wp("0.06868082682291667%"),
    height: hp("0.032456382282491564%"),
    top: hp("13.702996524198838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.20015055338541%")
  },
  ImageBackground_55_248: {
    width: wp("0.06868082682291667%"),
    height: hp("0.032456382282491564%"),
    top: hp("13.702996524198838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.29444986979166%")
  },
  ImageBackground_55_249: {
    width: wp("1.592645263671875%"),
    height: hp("0.9547209275001172%"),
    top: hp("12.860107421875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.39316813151042%")
  },
  ImageBackground_55_250: {
    width: wp("0.3730794270833333%"),
    height: hp("0.054223605360405734%"),
    top: hp("13.692820947924474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.15876057942708%")
  },
  ImageBackground_55_251: {
    width: wp("0.76259765625%"),
    height: hp("0.023246204656460833%"),
    top: hp("13.388789003935528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.77744954427083%")
  },
  ImageBackground_55_252: {
    width: wp("0.8568990071614583%"),
    height: hp("0.015501282561844078%"),
    top: hp("13.4662588139524%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.705700683593754%")
  },
  ImageBackground_55_253: {
    width: wp("0.8569417317708333%"),
    height: hp("0.015533310005153672%"),
    top: hp("13.526287393412666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.679052734375%")
  },
  ImageBackground_55_254: {
    width: wp("0.4837992350260416%"),
    height: hp("0.015484125002928223%"),
    top: hp("13.58827422226387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.84305013020833%")
  },
  ImageBackground_55_255: {
    width: wp("0.7144673665364584%"),
    height: hp("0.3315846959332834%"),
    top: hp("12.936845176044784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.92415364583333%")
  },
  ImageBackground_55_256: {
    width: wp("0.05635782877604167%"),
    height: hp("0.03099455826286076%"),
    top: hp("13.704451485194902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.933251953124994%")
  },
  ImageBackground_55_257: {
    width: wp("0.06867472330729167%"),
    height: hp("0.032456382282491564%"),
    top: hp("13.702996524198838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.543749999999996%")
  },
  ImageBackground_55_258: {
    width: wp("0.06867268880208333%"),
    height: hp("0.032456382282491564%"),
    top: hp("13.702996524198838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.638049316406246%")
  },
  ImageBackground_55_259: {
    width: wp("0.06866861979166668%"),
    height: hp("0.032456382282491564%"),
    top: hp("13.702996524198838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.72825520833333%")
  },
  ImageBackground_55_260: {
    width: wp("0.06867268880208333%"),
    height: hp("0.032456382282491564%"),
    top: hp("13.702996524198838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.822550455729164%")
  },
  ImageBackground_55_261: {
    width: wp("0.03689168294270833%"),
    height: hp("0.03099455826286076%"),
    top: hp("13.704451485194902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.916845703125%")
  },
  ImageBackground_55_262: {
    width: wp("6.640769449869792%"),
    height: hp("7.4190359959180565%"),
    top: hp("12.579318251030735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.101440429687496%")
  },
  ImageBackground_55_263: {
    width: wp("1.7359395345052084%"),
    height: hp("2.0229002167617365%"),
    top: hp("17.818806661122558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.956258138020832%")
  },
  ImageBackground_55_264: {
    width: wp("1.7236409505208334%"),
    height: hp("0.8477229585890648%"),
    top: hp("19.49057514699681%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.786555989583334%")
  },
  ImageBackground_55_265: {
    width: wp("1.7213521321614584%"),
    height: hp("0.11935255516772864%"),
    top: hp("20.218165453406108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.786555989583334%")
  },
  ImageBackground_55_266: {
    width: wp("5.422658284505209%"),
    height: hp("6.938205701836582%"),
    top: hp("12.57990389570839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.203938802083336%")
  },
  ImageBackground_55_267: {
    width: wp("1.9774271647135417%"),
    height: hp("5.748199737411568%"),
    top: hp("13.77008944258339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.971459960937498%")
  },
  ImageBackground_55_268: {
    width: wp("0.7380045572916666%"),
    height: hp("6.832685570666815%"),
    top: hp("12.663742591594826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.889005533854167%")
  },
  ImageBackground_55_269: {
    width: wp("3.434981282552083%"),
    height: hp("0.7285511297085833%"),
    top: hp("19.599999194738565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.272371419270833%")
  },
  ImageBackground_55_270: {
    width: wp("3.4313680013020833%"),
    height: hp("0.10437743774597077%"),
    top: hp("20.223390502014624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.276468912760414%")
  },
  ImageBackground_55_271: {
    width: wp("0.24316813151041666%"),
    height: hp("0.12083954360710271%"),
    top: hp("19.672445271504877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.75476888020833%")
  },
  ImageBackground_55_272: {
    width: wp("0.24320882161458332%"),
    height: hp("0.12083954360710271%"),
    top: hp("19.726287979057354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.900724283854167%")
  },
  ImageBackground_55_273: {
    width: wp("0.24337361653645834%"),
    height: hp("0.12109805082810157%"),
    top: hp("19.779938521949965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.046484375%")
  },
  ImageBackground_55_274: {
    width: wp("10.3698974609375%"),
    height: hp("3.9456797861445256%"),
    top: hp("8.718053082833585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.311995442708334%")
  },
  ImageBackground_55_275: {
    width: wp("4.375809733072917%"),
    height: hp("2.9712208028676095%"),
    top: hp("8.88364411544228%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.36563720703125%")
  },
  ImageBackground_55_276: {
    width: wp("1.7966247558593749%"),
    height: hp("1.1246848499578335%"),
    top: hp("11.511340277127061%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.264628092447914%")
  },
  ImageBackground_55_277: {
    width: wp("0.8515645345052083%"),
    height: hp("0.4467576697491098%"),
    top: hp("11.567488960597828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.459749348958336%")
  },
  ImageBackground_55_278: {
    width: wp("0.435491943359375%"),
    height: hp("0.19611890526904519%"),
    top: hp("11.511349427825152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.01784261067708%")
  },
  ImageBackground_55_279: {
    width: wp("0.31014404296875%"),
    height: hp("0.27953380945025535%"),
    top: hp("7.714752243019113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.682621256510412%")
  },
  ImageBackground_55_280: {
    width: wp("0.31014404296875%"),
    height: hp("0.14126790517094967%"),
    top: hp("7.853019291135681%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.682621256510412%")
  },
  ImageBackground_55_281: {
    width: wp("1.9263387044270834%"),
    height: hp("1.3757125191066577%"),
    top: hp("7.468991944457457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.94853515625%")
  },
  ImageBackground_55_282: {
    width: wp("0.26691080729166666%"),
    height: hp("0.2041103242934197%"),
    top: hp("7.966112768810909%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.763199869791663%")
  },
  ImageBackground_55_283: {
    width: wp("0.20233154296875%"),
    height: hp("0.29911973487133386%"),
    top: hp("7.565147479970953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.781827799479167%")
  },
  ImageBackground_55_284: {
    width: wp("0.8763773600260417%"),
    height: hp("0.12552641678428364%"),
    top: hp("7.681736524315966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.00702718098958%")
  },
  ImageBackground_55_285: {
    width: wp("0.5074707031250001%"),
    height: hp("0.22929361735148052%"),
    top: hp("8.489358836206897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.964624023437498%")
  },
  ImageBackground_55_286: {
    width: wp("1.5649291992187502%"),
    height: hp("0.6777819128765695%"),
    top: hp("7.610571545282049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.441357421874997%")
  },
  ImageBackground_55_287: {
    width: wp("0.4869771321614583%"),
    height: hp("0.29290126360159763%"),
    top: hp("7.726666451930285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.638293457031246%")
  },
  ImageBackground_55_288: {
    width: wp("0.254681396484375%"),
    height: hp("0.12298709806473715%"),
    top: hp("7.7841419866238795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.738606770833332%")
  },
  ImageBackground_55_289: {
    width: wp("2.892962646484375%"),
    height: hp("1.1080626068801538%"),
    top: hp("6.885479379450899%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.975146484375%")
  },
  ImageBackground_55_290: {
    width: wp("3.2066080729166666%"),
    height: hp("1.685363563640543%"),
    top: hp("8.88364411544228%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.534830729166664%")
  },
  ImageBackground_55_291: {
    width: wp("6.95804443359375%"),
    height: hp("3.9547927376033667%"),
    top: hp("8.71012857828898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.1527587890625%")
  },
  ImageBackground_55_292: {
    width: wp("1.2439453125%"),
    height: hp("2.636396187892382%"),
    top: hp("10.02813107606353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.886547851562497%")
  },
  ImageBackground_55_293: {
    width: wp("2.5538309733072917%"),
    height: hp("1.120880447227558%"),
    top: hp("8.379166129825713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.319482421875%")
  },
  ImageBackground_55_294: {
    width: wp("6.272745768229167%"),
    height: hp("2.0168338758477207%"),
    top: hp("8.89661980533171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.60199788411458%")
  },
  ImageBackground_55_295: {
    width: wp("1.6051493326822917%"),
    height: hp("2.0318089932694785%"),
    top: hp("8.982023270591263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.707849121093748%")
  },
  ImageBackground_55_296: {
    width: wp("9.40539754231771%"),
    height: hp("4.897490219733883%"),
    top: hp("15.449260843211206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.012601725260417%")
  },
  ImageBackground_55_297: {
    width: wp("9.40950419108073%"),
    height: hp("4.894898284500328%"),
    top: hp("15.449910542775484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.363151041666665%")
  },
  ImageBackground_55_298: {
    width: wp("9.880999755859374%"),
    height: hp("0.34472281071378374%"),
    top: hp("17.01204451485195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.584100341796873%")
  },
  ImageBackground_55_299: {
    width: wp("5.910155232747396%"),
    height: hp("0.34472281071378374%"),
    top: hp("17.01204451485195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.715751139322915%")
  },
  ImageBackground_55_300: {
    width: wp("8.07562967936198%"),
    height: hp("3.8595093780014293%"),
    top: hp("13.152527129989693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.28251953125%")
  },
  ImageBackground_55_301: {
    width: wp("8.07763671875%"),
    height: hp("3.8595093780014293%"),
    top: hp("13.152527129989693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.495357259114584%")
  },
  ImageBackground_55_302: {
    width: wp("5.653904215494792%"),
    height: hp("0.03485615285618909%"),
    top: hp("16.975240407140177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.334851074218747%")
  },
  ImageBackground_55_303: {
    width: wp("9.405398559570312%"),
    height: hp("4.893614899093422%"),
    top: hp("15.449260843211206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.13145345052083%")
  },
  ImageBackground_55_304: {
    width: wp("9.409496053059897%"),
    height: hp("4.894917729733765%"),
    top: hp("15.450285721397108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.486104329427082%")
  },
  ImageBackground_55_305: {
    width: wp("46.77279459635417%"),
    height: hp("0.030984263727511247%"),
    top: hp("20.331258931081337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.415645345052083%")
  },
  View_55_994: {
    width: wp("33.6%"),
    top: hp("5.847076461769113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.8%")
  },
  Text_55_994: {
    color: "rgba(52, 52, 52, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_830: {
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
  View_16_42: {
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
  View_16_40: {
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
  View_16_41: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999999%"),
    top: hp("2.8485757121439335%")
  },
  Text_16_41: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_43: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.33333333333333%"),
    top: hp("2.9985007496251903%")
  },
  Text_16_43: {
    color: "rgba(44, 73, 105, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_16_44: {
    width: wp("6.323326619466147%"),
    height: hp("3.555093676611401%"),
    top: hp("1.9149848903673181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.88185221354166%")
  },
  View_47_834: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("65.96701649175412%")
  },
  Text_47_834: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_264: {
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
  View_15_263: {
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
  View_15_265: {
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
  ImageBackground_16_3: {
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
  View_15_279: {
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
  ImageBackground_15_269: {
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
  ImageBackground_15_278: {
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
  ImageBackground_16_2: {
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
  ImageBackground_16_4: {
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
  View_15_272: {
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
  ImageBackground_15_273: {
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
  View_15_274: {
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
  ImageBackground_15_275: {
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
  ImageBackground_15_276: {
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
  View_16_16: {
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
  View_16_17: {
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
  View_16_18: {
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
  View_16_19: {
    width: wp("20.66624552408854%"),
    minWidth: wp("20.66624552408854%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_16_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_20: {
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
  View_16_21: {
    width: wp("44.20280354817708%"),
    minWidth: wp("44.20280354817708%"),
    minHeight: hp("3.1484257871064467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_16_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_22: {
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
  View_16_23: {
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
  View_16_24: {
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
  View_16_31: {
    width: wp("8.055391947428385%"),
    minWidth: wp("8.055391947428385%"),
    height: hp("4.497751124437781%"),
    minHeight: hp("4.497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.53701985677084%"),
    top: hp("0.29985007496251903%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_16_25: {
    width: wp("4.603081766764323%"),
    minWidth: wp("4.603081766764323%"),
    height: hp("3.212679415449746%"),
    minHeight: hp("3.212679415449746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.26318359375%"),
    top: hp("0.9423846426396185%")
  },
  ImageBackground_17_361: {
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
