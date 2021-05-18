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
      <View style={styles.View_29_265}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
          }}
          style={styles.ImageBackground_29_266}
        />
        <View style={styles.View_29_267}>
          <View source={{ uri: "null" }} style={styles.View_29_268} />
          <View style={styles.View_29_269}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
              }}
              style={styles.ImageBackground_29_270}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
              }}
              style={styles.ImageBackground_29_271}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
              }}
              style={styles.ImageBackground_29_274}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
              }}
              style={styles.ImageBackground_29_277}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
              }}
              style={styles.ImageBackground_29_280}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
            }}
            style={styles.ImageBackground_29_281}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
            }}
            style={styles.ImageBackground_29_287}
          />
          <View style={styles.View_29_294}>
            <View style={styles.View_29_295}>
              <Text style={styles.Text_29_295}>12:30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_29_296}>
        <View style={styles.View_29_297} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f4e/9be8/38d244db5d2f5137e75bf8fbfb48c459"
          }}
          style={styles.ImageBackground_29_298}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63d6/9941/106f53ab3243538fb94e4c94e93f7cf5"
          }}
          style={styles.ImageBackground_29_299}
        />
      </View>
      <View style={styles.View_29_300}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
          }}
          style={styles.ImageBackground_29_301}
        />
        <View style={styles.View_29_302}>
          <Text style={styles.Text_29_302}>Can’t wait to see you!</Text>
        </View>
        <View style={styles.View_29_303}>
          <Text style={styles.Text_29_303}>5:09 PM</Text>
        </View>
        <View style={styles.View_29_304}>
          <Text style={styles.Text_29_304}>Sandra Adams</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac0/d7ee/e1f428e1d6a7e8ff14e726136be94bee"
          }}
          style={styles.ImageBackground_29_305}
        />
        <View style={styles.View_29_306}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b820/b35f/feabf0879132577ff5b8d74a7ca223d0"
            }}
            style={styles.ImageBackground_29_307}
          />
          <View source={{ uri: "null" }} style={styles.View_29_311} />
        </View>
      </View>
      <View style={styles.View_29_312}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
          }}
          style={styles.ImageBackground_29_313}
        />
        <View style={styles.View_29_314}>
          <Text style={styles.Text_29_314}>Can’t wait to see you!</Text>
        </View>
        <View style={styles.View_29_315}>
          <Text style={styles.Text_29_315}>5:09 PM</Text>
        </View>
        <View style={styles.View_29_316}>
          <Text style={styles.Text_29_316}>Sandra Adams</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac0/d7ee/e1f428e1d6a7e8ff14e726136be94bee"
          }}
          style={styles.ImageBackground_29_317}
        />
        <View style={styles.View_29_318}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b820/b35f/feabf0879132577ff5b8d74a7ca223d0"
            }}
            style={styles.ImageBackground_29_319}
          />
          <View source={{ uri: "null" }} style={styles.View_29_323} />
        </View>
      </View>
      <View style={styles.View_29_324}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
          }}
          style={styles.ImageBackground_29_325}
        />
        <View style={styles.View_29_326}>
          <Text style={styles.Text_29_326}>Can’t wait to see you!</Text>
        </View>
        <View style={styles.View_29_327}>
          <Text style={styles.Text_29_327}>5:09 PM</Text>
        </View>
        <View style={styles.View_29_328}>
          <Text style={styles.Text_29_328}>Sandra Adams</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac0/d7ee/e1f428e1d6a7e8ff14e726136be94bee"
          }}
          style={styles.ImageBackground_29_329}
        />
        <View style={styles.View_29_330}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b820/b35f/feabf0879132577ff5b8d74a7ca223d0"
            }}
            style={styles.ImageBackground_29_331}
          />
          <View source={{ uri: "null" }} style={styles.View_29_335} />
        </View>
      </View>
      <View style={styles.View_29_336}>
        <View style={styles.View_29_337}>
          <View style={styles.View_29_338} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c44/8661/7eb85926384edf3bc7be2518a1bb32c3"
            }}
            style={styles.ImageBackground_29_339}
          />
          <View style={styles.View_29_342}>
            <Text style={styles.Text_29_342}>Delete</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
          }}
          style={styles.ImageBackground_29_343}
        />
        <View style={styles.View_29_344}>
          <Text style={styles.Text_29_344}>Can’t wait to see you!</Text>
        </View>
        <View style={styles.View_29_345}>
          <Text style={styles.Text_29_345}>5:09 PM</Text>
        </View>
        <View style={styles.View_29_346}>
          <Text style={styles.Text_29_346}>Sandra Adams</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef13/00d7/c609e5d4a51d57f75e1f40f5feaed437"
          }}
          style={styles.ImageBackground_29_347}
        />
        <View style={styles.View_29_348}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b820/b35f/feabf0879132577ff5b8d74a7ca223d0"
            }}
            style={styles.ImageBackground_29_349}
          />
          <View source={{ uri: "null" }} style={styles.View_29_353} />
        </View>
      </View>
      <View style={styles.View_29_354}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
          }}
          style={styles.ImageBackground_29_355}
        />
        <View style={styles.View_29_356}>
          <Text style={styles.Text_29_356}>Can’t wait to see you!</Text>
        </View>
        <View style={styles.View_29_357}>
          <Text style={styles.Text_29_357}>5:09 PM</Text>
        </View>
        <View style={styles.View_29_358}>
          <Text style={styles.Text_29_358}>Sandra Adams</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef13/00d7/c609e5d4a51d57f75e1f40f5feaed437"
          }}
          style={styles.ImageBackground_29_359}
        />
        <View style={styles.View_29_360}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b820/b35f/feabf0879132577ff5b8d74a7ca223d0"
            }}
            style={styles.ImageBackground_29_361}
          />
          <View source={{ uri: "null" }} style={styles.View_29_365} />
        </View>
      </View>
      <View style={styles.View_29_366}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b44/814e/2f6f85f6a1838c0cf97f6255fa888b49"
          }}
          style={styles.ImageBackground_29_367}
        />
        <View style={styles.View_29_368}>
          <Text style={styles.Text_29_368}>Can’t wait to see you!</Text>
        </View>
        <View style={styles.View_29_369}>
          <Text style={styles.Text_29_369}>5:09 PM</Text>
        </View>
        <View style={styles.View_29_370}>
          <Text style={styles.Text_29_370}>Sandra Adams</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef13/00d7/c609e5d4a51d57f75e1f40f5feaed437"
          }}
          style={styles.ImageBackground_29_371}
        />
        <View style={styles.View_29_372}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b820/b35f/feabf0879132577ff5b8d74a7ca223d0"
            }}
            style={styles.ImageBackground_29_373}
          />
          <View source={{ uri: "null" }} style={styles.View_29_377} />
        </View>
      </View>
      <View style={styles.View_29_382}>
        <View style={styles.View_29_384}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7e/f10e/5cae510b6e96372b6d5b598b5ce972d2"
            }}
            style={styles.ImageBackground_29_385}
          />
          <View style={styles.View_29_386}>
            <View source={{ uri: "null" }} style={styles.View_29_387} />
            <View style={styles.View_29_388}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3287/ff5a/fd4fbb92d16681cad17307231c12c655"
                }}
                style={styles.ImageBackground_29_389}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d597/e16e/502e0c35c1ce97b47ffe7d1778960b8a"
                }}
                style={styles.ImageBackground_29_390}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa99/5e9e/86e819dd5c18a7487dc3a0915c5e9afa"
                }}
                style={styles.ImageBackground_29_393}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3593/84c7/d9e2475182e9a4ac29763cdfcb77d06d"
                }}
                style={styles.ImageBackground_29_396}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d5/5f71/4519210bfbb596fe9408e69d820579e7"
                }}
                style={styles.ImageBackground_29_399}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e01/5aed/edc8974621fd8a822e6347381d34ac98"
              }}
              style={styles.ImageBackground_29_400}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78fe/2113/af18f6845885dc29b570cac4169e88b7"
              }}
              style={styles.ImageBackground_29_406}
            />
            <View style={styles.View_29_413}>
              <View style={styles.View_29_414}>
                <Text style={styles.Text_29_414}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b35/e9f5/27521ed94985a2f0be968d0f03f348f6"
          }}
          style={styles.ImageBackground_29_415}
        />
        <View style={styles.View_29_416}>
          <View style={styles.View_29_417}>
            <Text style={styles.Text_29_417}>Inbox</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c93/fc33/7fc531d11cc81295adb55d30823af894"
            }}
            style={styles.ImageBackground_29_418}
          />
        </View>
      </View>
      <View style={styles.View_29_420}>
        <View style={styles.View_29_421} />
        <View style={styles.View_29_422}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2b9/1620/8912a5446171a52d6b1382440d45a48a"
            }}
            style={styles.ImageBackground_29_423}
          />
          <View style={styles.View_29_425}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a943/fc90/15a0f1ae72df4133f12686374a490df4"
              }}
              style={styles.ImageBackground_29_426}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b580/5d51/7aff626a6634a6ae5a3bcc494e9c2105"
              }}
              style={styles.ImageBackground_29_427}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f74a/31c9/c62f940257c89b9b595980f1c170775a"
            }}
            style={styles.ImageBackground_29_428}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97bf/cc1c/0748205e22266d0d07972451054e01c1"
            }}
            style={styles.ImageBackground_29_430}
          />
          <View style={styles.View_29_432}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1103/e1ec/71812e15609825ae35c52f7c0ef956b3"
              }}
              style={styles.ImageBackground_29_433}
            />
            <View style={styles.View_29_434}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/856e/e583/12321cb6c7ce8d9493474eed2a3bd518"
                }}
                style={styles.ImageBackground_29_435}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/5224/c100cf6f9e057cd72950e27f9fc411ae"
                }}
                style={styles.ImageBackground_29_436}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_29_437}>
        <View style={styles.View_29_454} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de4a/329a/b25fba959d9638e51735465687ccff41"
          }}
          style={styles.ImageBackground_29_438}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1b8/22b1/f2de0337e147ea3d5e0938c68a70615a"
          }}
          style={styles.ImageBackground_29_439}
        />
        <View style={styles.View_29_440}>
          <Text style={styles.Text_29_440}>Need Confirmation</Text>
        </View>
        <View style={styles.View_29_441}>
          <Text style={styles.Text_29_441}>
            Are you sure you want to delete it?
          </Text>
        </View>
        <View style={styles.View_29_442}>
          <View style={styles.View_29_443}>
            <Text style={styles.Text_29_443}>CANCEL</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a967/4401/320926ccc48aaad192621c477aa8e65d"
            }}
            style={styles.ImageBackground_29_444}
          />
        </View>
        <View style={styles.View_29_447}>
          <View style={styles.View_29_448}>
            <Text style={styles.Text_29_448}>YES</Text>
          </View>
          <View style={styles.View_29_449}>
            <View source={{ uri: "null" }} style={styles.View_29_450} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fcc/ebd6/0089cf09dfbf5726ad7b1ecca887234f"
              }}
              style={styles.ImageBackground_29_457}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd63/fa2b/cf0262b1ba067a61fb422cd3e1eab98c"
          }}
          style={styles.ImageBackground_29_452}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_29_265: {
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
  ImageBackground_29_266: {
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
  View_29_267: {
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
  View_29_268: {
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
  View_29_269: {
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
  ImageBackground_29_270: {
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
  ImageBackground_29_271: {
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
  ImageBackground_29_274: {
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
  ImageBackground_29_277: {
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
  ImageBackground_29_280: {
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
  ImageBackground_29_281: {
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
  ImageBackground_29_287: {
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
  View_29_294: {
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
  View_29_295: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_29_295: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_296: {
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
  View_29_297: {
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
  ImageBackground_29_298: {
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
  ImageBackground_29_299: {
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
  View_29_300: {
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
  ImageBackground_29_301: {
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
  View_29_302: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("4.6476761619190405%")
  },
  Text_29_302: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_303: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.4%"),
    top: hp("2.248875562218892%")
  },
  Text_29_303: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_304: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("1.1994002998500761%")
  },
  Text_29_304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_305: {
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
  View_29_306: {
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
  ImageBackground_29_307: {
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
  View_29_311: {
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
  View_29_312: {
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
  ImageBackground_29_313: {
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
  View_29_314: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("4.647676161919044%")
  },
  Text_29_314: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_315: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.4%"),
    top: hp("2.2488755622188883%")
  },
  Text_29_315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_316: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("1.1994002998500726%")
  },
  Text_29_316: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_317: {
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
  View_29_318: {
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
  ImageBackground_29_319: {
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
  View_29_323: {
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
  View_29_324: {
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
  ImageBackground_29_325: {
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
  View_29_326: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("4.647676161919044%")
  },
  Text_29_326: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_327: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.4%"),
    top: hp("2.248875562218899%")
  },
  Text_29_327: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_328: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("1.1994002998500832%")
  },
  Text_29_328: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_329: {
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
  View_29_330: {
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
  ImageBackground_29_331: {
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
  View_29_335: {
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
  View_29_336: {
    width: wp("106.66666666666667%"),
    minWidth: wp("106.66666666666667%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.666666666666668%"),
    top: hp("52.023988005997005%")
  },
  View_29_337: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.73333333333333%"),
    top: hp("0%")
  },
  View_29_338: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 123, 21, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_29_339: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("2.698800517343867%"),
    minHeight: hp("2.698800517343867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666663%"),
    top: hp("2.548579226011988%")
  },
  View_29_342: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666669%"),
    top: hp("5.9970014992503735%")
  },
  Text_29_342: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_343: {
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
  View_29_344: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("4.647676161919044%")
  },
  Text_29_344: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_345: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.4%"),
    top: hp("2.2488755622188847%")
  },
  Text_29_345: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_346: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("1.199400299850069%")
  },
  Text_29_346: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_347: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.7991004497751106%")
  },
  View_29_348: {
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
  ImageBackground_29_349: {
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
  View_29_353: {
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
  View_29_354: {
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
  ImageBackground_29_355: {
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
  View_29_356: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("4.647676161919051%")
  },
  Text_29_356: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_357: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.4%"),
    top: hp("2.248875562218899%")
  },
  Text_29_357: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_358: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("1.199400299850069%")
  },
  Text_29_358: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_359: {
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
  View_29_360: {
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
  ImageBackground_29_361: {
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
  View_29_365: {
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
  View_29_366: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("75.11244377811094%")
  },
  ImageBackground_29_367: {
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
  View_29_368: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("4.647676161919037%")
  },
  Text_29_368: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_369: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.4%"),
    top: hp("2.248875562218899%")
  },
  Text_29_369: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_370: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("1.1994002998500832%")
  },
  Text_29_370: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_371: {
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
  View_29_372: {
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
  ImageBackground_29_373: {
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
  View_29_377: {
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
  View_29_382: {
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
  View_29_384: {
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
  ImageBackground_29_385: {
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
  View_29_386: {
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
  View_29_387: {
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
  View_29_388: {
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
  ImageBackground_29_389: {
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
  ImageBackground_29_390: {
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
  ImageBackground_29_393: {
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
  ImageBackground_29_396: {
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
  ImageBackground_29_399: {
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
  ImageBackground_29_400: {
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
  ImageBackground_29_406: {
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
  View_29_413: {
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
  View_29_414: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_29_414: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_415: {
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
  View_29_416: {
    width: wp("46.177775065104164%"),
    minWidth: wp("46.177775065104164%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.5555664062500005%"),
    top: hp("6.146926536731634%")
  },
  View_29_417: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.377766927083333%"),
    top: hp("0%")
  },
  Text_29_417: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_29_418: {
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
  View_29_420: {
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
  View_29_421: {
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
  View_29_422: {
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
  ImageBackground_29_423: {
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
  View_29_425: {
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
  ImageBackground_29_426: {
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
  ImageBackground_29_427: {
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
  ImageBackground_29_428: {
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
  ImageBackground_29_430: {
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
  View_29_432: {
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
  ImageBackground_29_433: {
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
  View_29_434: {
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
  ImageBackground_29_435: {
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
  ImageBackground_29_436: {
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
  View_29_437: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96.55172413793103%"),
    minHeight: hp("96.55172413793103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.4482758620689653%")
  },
  View_29_454: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96.55172413793103%"),
    minHeight: hp("96.55172413793103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.699999988079071
  },
  ImageBackground_29_438: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("23.988005997001498%"),
    minHeight: hp("23.988005997001498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("36.28185907046477%")
  },
  ImageBackground_29_439: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("0.4497751124437781%"),
    minHeight: hp("0.4497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("50.449775112443774%")
  },
  View_29_440: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("39.13043478260869%")
  },
  Text_29_440: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_441: {
    width: wp("77.06666666666668%"),
    minWidth: wp("77.06666666666668%"),
    minHeight: hp("4.7976011994003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("42.578710644677656%")
  },
  Text_29_441: {
    color: "rgba(52, 52, 52, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_442: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333333%"),
    top: hp("53.673163418290855%")
  },
  View_29_443: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    top: hp("0.5997001499250416%")
  },
  Text_29_443: {
    color: "rgba(234, 123, 21, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.5000000166893006,
    textTransform: "none"
  },
  ImageBackground_29_444: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_447: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("53.673163418290855%")
  },
  View_29_448: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333337%"),
    top: hp("0.5997001499250416%")
  },
  Text_29_448: {
    color: "rgba(37, 206, 217, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.5000000166893006,
    textTransform: "none"
  },
  View_29_449: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_450: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_29_457: {
    width: wp("6.4%"),
    height: hp("3.598200899550225%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_29_452: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("8.395802098950526%"),
    minHeight: hp("8.395802098950526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("38.680659670164914%")
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
