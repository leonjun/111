/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.setOptions({
  java_multiple_files: false,
  java_outer_classname: "TestProto",
  optimize_for: "SPEED"
})
.addJSON({
  com: {
    nested: {
      ccb: {
        nested: {
          cloud: {
            nested: {
              protobuf: {
                nested: {
                  proto: {
                    nested: {
                      iequip: {
                        nested: {
                          AcctRegister: {
                            fields: {
                              veriCode: {
                                type: "string",
                                id: 1
                              },
                              codeSN: {
                                type: "string",
                                id: 2
                              },
                              acct: {
                                type: "Acct",
                                id: 3
                              }
                            }
                          },
                          AcctUpdCredential: {
                            fields: {
                              updTp: {
                                type: "string",
                                id: 1
                              },
                              acctId: {
                                type: "string",
                                id: 2
                              },
                              oldCredential: {
                                type: "string",
                                id: 3
                              },
                              newCredential: {
                                type: "string",
                                id: 4
                              },
                              acctPhone: {
                                type: "string",
                                id: 5
                              },
                              veriCode: {
                                type: "string",
                                id: 6
                              },
                              codeSN: {
                                type: "string",
                                id: 7
                              }
                            }
                          },
                          AcctUpdPhone: {
                            fields: {
                              oldAcctPhone: {
                                type: "string",
                                id: 1
                              },
                              oldVeriCode: {
                                type: "string",
                                id: 2
                              },
                              oldCodeSN: {
                                type: "string",
                                id: 3
                              },
                              newAcctPhone: {
                                type: "string",
                                id: 4
                              },
                              newVeriCode: {
                                type: "string",
                                id: 5
                              },
                              newCodeSN: {
                                type: "string",
                                id: 6
                              },
                              acctId: {
                                type: "string",
                                id: 7
                              }
                            }
                          },
                          Acct: {
                            fields: {
                              acctId: {
                                type: "string",
                                id: 1
                              },
                              acctNm: {
                                type: "string",
                                id: 2
                              },
                              acctPhone: {
                                type: "string",
                                id: 3
                              },
                              acctTp: {
                                type: "string",
                                id: 4
                              },
                              rlnmAuthenSt: {
                                type: "string",
                                id: 5
                              },
                              rlnmAuthenMsg: {
                                type: "string",
                                id: 6
                              },
                              authenPhone: {
                                type: "string",
                                id: 7
                              },
                              sbjNm: {
                                type: "string",
                                id: 8
                              },
                              sbjCrdtTp: {
                                type: "string",
                                id: 9
                              },
                              sbjCrdtNo: {
                                type: "string",
                                id: 10
                              },
                              unnSocCrCd: {
                                type: "string",
                                id: 11
                              },
                              entNm: {
                                type: "string",
                                id: 12
                              },
                              entCrdtTp: {
                                type: "string",
                                id: 13
                              },
                              entCrdtNo: {
                                type: "string",
                                id: 14
                              },
                              rspbpsnNm: {
                                type: "string",
                                id: 15
                              },
                              rspbpsnCrdtTp: {
                                type: "string",
                                id: 16
                              },
                              rspbpsnCrdtNo: {
                                type: "string",
                                id: 17
                              },
                              lclCrtTms: {
                                type: "int64",
                                id: 18
                              },
                              credential: {
                                type: "string",
                                id: 19
                              }
                            }
                          },
                          App: {
                            fields: {
                              appId: {
                                type: "string",
                                id: 1
                              },
                              acctId: {
                                type: "string",
                                id: 2
                              },
                              appSecret: {
                                type: "string",
                                id: 3
                              },
                              appNm: {
                                type: "string",
                                id: 4
                              },
                              appTp: {
                                type: "string",
                                id: 5
                              },
                              appLogoSrc: {
                                type: "string",
                                id: 6
                              },
                              appBrf: {
                                type: "string",
                                id: 7
                              },
                              appSt: {
                                type: "string",
                                id: 8
                              },
                              appStDesc: {
                                type: "string",
                                id: 9
                              },
                              reviTims: {
                                type: "int32",
                                id: 10
                              },
                              isDel: {
                                type: "string",
                                id: 11
                              },
                              lclCrtTms: {
                                type: "int64",
                                id: 12
                              }
                            }
                          },
                          Test: {
                            fields: {
                              uid: {
                                type: "string",
                                id: 1
                              }
                            }
                          }
                        }
                      },
                      ProtoResponse: {
                        fields: {
                          responseHeader: {
                            type: "ResponseHeader",
                            id: 1
                          },
                          responseBody: {
                            type: "ResponseBody",
                            id: 2
                          }
                        }
                      },
                      ResponseHeader: {
                        fields: {
                          SYS_TRACE_ID: {
                            type: "string",
                            id: 1
                          },
                          SYS_TX_STATUS: {
                            type: "string",
                            id: 2
                          },
                          SYS_RESP_DESC: {
                            type: "string",
                            id: 3
                          }
                        }
                      },
                      ResponseBody: {
                        fields: {
                          ENTITY: {
                            type: "google.protobuf.Any",
                            id: 1
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          Any: {
            fields: {
              type_url: {
                type: "string",
                id: 1
              },
              value: {
                type: "bytes",
                id: 2
              }
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
