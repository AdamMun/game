//寄售相关名词解释
$('.tab1').click(function() {
        consultConsign();
    })
    //买家帮助
$('.tab2').click(function() {
        buy()
    })
    //卖家帮助
$('.tab3').click(function() {
        sales()
    })
    //安全保障服务
$('.tab4').click(function() {
        secure()
    })
    //收费标准
$('.tab5').click(function() {
        chargeStandrad()
    })
    //寄售协议
$('.tab6').click(function() {
        agreementOfConsignment();
    })
    //游戏注意事项
$('.tab7').click(function() {
        cautious();
    })
    //担保名词相关解释
$('.tab8').click(function() {
    guarantee();
})
$('.tab9').click(function() {
    guaranteeBuyer()
})
$(".tab10").click(function() {
        sellerhelp()
    })
    //担保安全保障
$(".tab11").click(function() {
        sellerSecure()
    })
    //收费标准
$(".tab12").click(function() {
        feeScare()
    })
    //担保新手帮助
$('.tab13').click(function() {
        guaranteeHelp()
    })
    //担保协议
$('.tab14').click(function() {
        guaranteeAgreement()
    })
    //账号名词相关解释
$(".tab15").click(function() {
    accountAccount()
})
$(".tab16").click(function() {
    accountBuyer()
})
$(".tab17").click(function() {
    accountSeller()
})
$(".tab18").click(function() {
    accountChargeStandrad()
})
$(".tab19").click(function() {
    accountPublic()
})
$(".tab20").click(function() {
    accountAgreement()
})
$(".tab21").click(function() {
    accountChange()
})
$(".tab22").click(function() {
    accountRent()
})
$(".tab23").click(function() {
    accountOnline()
})
$(".tab24").click(function() {
    accountJuren()
})
$(".tab25").click(function() {
    accountShengd()
})
$(".tab26").click(function() {
    accountWanmei()
})
$(".tab27").click(function() {
    diankaRelation()
})
$(".tab28").click(function() {
    diankabuyer()
})
$(".tab29").click(function() {
    diankaseller()
})
$(".tab30").click(function() {
    diankaChargeStandrad()
})
$(".tab31").click(function() {
    diankaPublicStandrad()
})
$(".tab32").click(function() {
    diankacommonProblem()
})
$(".tab33").click(function() {
    diankaAgreement()
})
$('.tab35').click(function() {
    aas_accountSignUp()
})
$('.tab36').click(function() {
    aas_securitySingnIn()
})
$('.tab37').click(function() {
    aas_certification()
})
$('.tab38').click(function() {
    aas_identity()
})
$('.tab39').click(function() {
    aas_cashfid()
})
$('.tab40').click(function() {
    aas_mobilephone()
})
$('.tab41').click(function() {
    aas_password()
})
$('.tab42').click(function() {
    aas_7x4x()
})
$('.tab43').click(function() {
    aas_integration()
})
$('.tab44').click(function() {
    aas_commodityfound()
})
$('.tab45').click(function() {
    aas_cashUnlock()
})
$('.tab46').click(function() {
    aas_perfectInformation()
})
$('.tab47').click(function() {
        aas_userCenter()
    })
    //寄售相关名词解释
function consultConsign() {
    window.location.hash = '?=tab1';
    $.ajax({
        type: "get",
        url: "../consult/consult-consign.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".whyconsign").on("click", function() {
                whyconsign();
            })
            $(".whyservise").on("click", function() {
                whyservise();
            })
        }
    });
}
//什么是寄售交易
function whyconsign() {
    window.location.hash = '?=tab1-1';
    $.ajax({
        type: "get",
        url: "../consult/consult-whyconsign.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
        }
    });
}

//什么是客服代售
function whyservise() {
    window.location.hash = '?=tab1-2';
    $.ajax({
        type: "get",
        url: "../consult/consult-whyservice.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
        }
    });
}
//买家帮助
function buy() {
    window.location.hash = '?=tab2';
    $.ajax({
        type: "get",
        url: "../consult/consult-buy.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $('.number').find('a').each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = '?=tab2-1-1';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-shuihuQzhuan.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = '?=tab2-1-2';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-menghuanzhuxian.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = '?=tab2-1-3';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-tianlongbabu.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = '?=tab2-1-4';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-2061.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = '?=tab2-1-5';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-wendao.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 6:
                            window.location.hash = '?=tab2-1-6';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-xianglongzhijian.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 7:
                            window.location.hash = '?=tab2-1-7';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-chuangshixiyou.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 8:
                            window.location.hash = '?=tab2-1-8';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-datanghaoxia.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 9:
                            window.location.hash = '?=tab2-1-9';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-dahuaxiyouzhizhange.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 10:
                            window.location.hash = '?=tab2-1-10';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-dahuaxiyou3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 11:
                            window.location.hash = '?=tab2-1-11';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-dahuaxiyou2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 12:
                            window.location.hash = '?=tab2-1-12';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-QQhuanxiangshijie.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 13:
                            window.location.hash = '?=tab2-1-13';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-QQhuaxia.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 14:
                            window.location.hash = '?=tab2-1-14';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-QQyingxiongdao.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $(".other").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = '?=tab2-2-1';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-DNF.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = '?=tab2-2-2';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-search.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = '?=tab2-2-3';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-payfor.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = '?=tab2-2-4';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-charge.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = '?=tab2-2-5';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-loqi.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 6:
                            window.location.hash = '?=tab2-2-6';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-mail.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 7:
                            window.location.hash = '?=tab2-2-7';
                            $.ajax({
                                type: "get",
                                url: "../consult/buy/buy-mailprice.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}
// 寄售卖家帮助

function sales() {
    window.location.hash = "?=tab3";
    $.ajax({
        type: "get",
        url: "../consult/consult-sales.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".public").find('a').each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab3-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-salesprice.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab3-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-salenumber.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab3-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-saleWithdrawCash.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab3-1-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-howsales.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab3-1-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-howtitle.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 6:
                            window.location.hash = "?=tab3-1-6";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-securityCard.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 7:
                            window.location.hash = "?=tab3-1-7";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-salesmasseage.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 8:
                            window.location.hash = "?=tab3-1-8";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-download.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $(".alter").find('a').each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab3-2-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-alter.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab3-2-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-undercarriage.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab3-2-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-reshelf.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $(".schedule").find('a').each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab3-3-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-progress.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $(".rank").find('a').each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab3-4-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-speeder.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $(".rank").find('a').each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab3-4-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-speeder.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $(".cash").find('a').each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab3-5-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/sales/sales-time.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

//安全保障服务

function secure() {
    window.location.hash = "?=tab4";
    $.ajax({
        type: "get",
        url: "../consult/consult-secure.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $('.outtime').find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab4-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/secure/outtime.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $('.indemnity').find('a').each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab4-2-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/secure/indemnityToSeller.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab4-2-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/secure/howIndemnity.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab4-2-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/secure/indemnityToBuyer.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $('.greenGoods').find('a').each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab4-3-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/secure/howGreenGoods.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab4-3-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/secure/greenGoodsToSeller.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab4-3-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/secure/greenGoodsToBuyer.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $('.promise').find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab4-4-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/secure/promise.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $('.verification').find('a').each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab4-5-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/secure/verification.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}
//收费标准
function chargeStandrad() {
    window.location.hash = "?=tab5";
    $.ajax({
        type: "get",
        url: "../consult/chargeStandrad/chargeStandrad.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
        }
    });
}
//寄售协议
function agreementOfConsignment() {
    window.location.hash = "?=tab6";
    $.ajax({
        type: "get",
        url: "../consult/consult-agreementOfConsignment.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $('.agreementOfConsignment').find('a').each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab6-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/agreementOfConsignment/consignmentTransactionAgreement.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab6-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/agreementOfConsignment/consignmentPurchaseAgreement.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab6-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/agreementOfConsignment/consignmentTransactionAgreement.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab6-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/agreementOfConsignment/consignmentTransactionAgreement.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

//游戏注意事项

function cautious() {
    window.location.hash = "?=tab7";
    $.ajax({
        type: "get",
        url: "../consult/consult-cautious.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $('.cautious').find('a').each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab7-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/cautious/dnf.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab7-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/cautious/needForSpeedOL.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab7-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/cautious/crossout.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab7-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/cautious/fairyTale2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab7-1-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/cautious/tianYaMingYueDao.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 6:
                            window.location.hash = "?=tab7-1-6";
                            $.ajax({
                                type: "get",
                                url: "../consult/cautious/QQsecurity.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 7:
                            window.location.hash = "?=tab7-1-7";
                            $.ajax({
                                type: "get",
                                url: "../consult/cautious/auctionHouse.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 8:
                            window.location.hash = "?=tab7-1-8";
                            $.ajax({
                                type: "get",
                                url: "../consult/cautious/EquivalentTransaction.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 9:
                            window.location.hash = "?=tab7-1-9";
                            $.ajax({
                                type: "get",
                                url: "../consult/cautious/dn.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 10:
                            window.location.hash = "?=tab7-1-10";
                            $.ajax({
                                type: "get",
                                url: "../consult/cautious/jfzz.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 11:
                            window.location.hash = "?=tab7-1-11";
                            $.ajax({
                                type: "get",
                                url: "../consult/cautious/DNmoney.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function guarantee() {
    window.location.hash = "?=tab8";
    $.ajax({
        type: "get",
        url: "../consult/guarantee.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $('.guarantee').find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab8-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/guarantee/guarantee-superiority.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab8-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/guarantee/guarantee-wow.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab8-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/guarantee/guarantee-gameTransaction.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab8-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/guarantee/guarantee-teamnateRecruitment.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab8-1-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/guarantee/guarantee-gameTransaction.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                    }
                })
            })
        }
    });
}

//寄售买家帮助

function guaranteeBuyer() {
    window.location.hash = "?=tab9";
    $.ajax({
        type: "get",
        url: "../consult/guarantee-buyer.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".search").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab9-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/guaranteeSearchComodityRank.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab9-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/guaranteeSearchSpeed.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab9-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/howGuarantee.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $(".commodityDetail").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab9-2-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/disonline.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab9-2-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/howSellerInformation.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $(".chargeAndPay").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab9-3-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/what.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab9-3-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/disreceive.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab9-3-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/contine.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab9-3-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/state.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $(".chargeAndPay").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab9-3-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/what.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab9-3-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/disreceive.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab9-3-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/contine.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab9-3-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/state.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $(".contactCustomerService").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab9-4-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/CustomerService.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab9-4-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/disCustomerService.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
            $(".pickUp").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab9-5-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/careFor.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab9-5-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/watchCustomerService.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab9-5-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/longtime.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab9-5-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeBuyer/howreceive.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function sellerhelp() {
    window.location.hash = "?=tab10";
    $.ajax({
        type: "get",
        url: "../consult/guarantee-seller.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".howseller").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab10-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/howFillIn.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab10-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/rightFillIn.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab10-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/fillInTheTitle.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab10-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/tradingTime.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab10-1-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/howSellCommodity.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })

            $(".editcommodity").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab10-2-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/goback.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                        case 2:
                            window.location.hash = "?=tab10-2-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/undercarraige.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                        case 3:
                            window.location.hash = "?=tab10-2-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/editInformation.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                        default:
                            break;
                    }
                })
            })

            $(".watchPrograss").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab10-3-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/viewProgress.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                        case 2:
                            window.location.hash = "?=tab10-3-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/contactCustomerService.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                        default:
                            break;
                    }
                })
            })

            $(".fundtoaccount").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab10-4-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/fundsToAccount.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                        case 2:
                            window.location.hash = "?=tab10-4-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/whyfundsToAccount.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });

                    }
                })
            })

            $(".specification").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab10-5-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/tradingSpcification.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                        case 2:
                            window.location.hash = "?=tab10-5-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/sellerCannelSpecification.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                        case 3:
                            window.location.hash = "?=tab10-5-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/publicSellerSpecification.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                        default:
                            break;
                    }
                })
            })

            $(".secure").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab10-6-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/careFor.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                        case 2:
                            window.location.hash = "?=tab10-6-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerhelp/abanden.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                        default:
                            break;
                    }
                })

            })
        }
    });
}
//寄售安全
function sellerSecure() {
    window.location.hash = "?=tab11";
    $.ajax({
        type: "get",
        url: "../consult/consult-sellerSecure.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".secure").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab11-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/sellerSecure/distinguish.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                        case 2:
                            window.location.hash = "?=tab11-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/secure/verification.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                    }
                })
            })
        }
    });

}

function feeScare() {
    window.location.hash = "?=tab12";
    $.ajax({
        type: "get",
        url: "../consult/guarantee-feeScare.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab12-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/feeScare/guarantee-feescare.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                    }
                })
            })
        }
    });
}

function guaranteeHelp() {
    window.location.hash = "?=tab13";
    $.ajax({
        type: "get",
        url: "../consult/guaranteeHelp.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab13-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeHelp/guaranteeHelp-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab13-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeHelp/guaranteeHelp-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab13-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeHelp/guaranteeHelp-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab13-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeHelp/guaranteeHelp-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab13-1-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeHelp/guaranteeHelp-5.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 6:
                            window.location.hash = "?=tab13-1-6";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeHelp/guaranteeHelp-6.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 7:
                            window.location.hash = "?=tab13-1-7";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeHelp/guaranteeHelp-7.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 8:
                            window.location.hash = "?=tab13-1-8";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeHelp/guaranteeHelp-8.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function guaranteeAgreement() {
    window.location.hash = "?=tab14";
    $.ajax({
        type: "get",
        url: "../consult/guaranteeAgreement.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab14-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeAgreement/guaranteeAgreement-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab14-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeAgreement/guaranteeAgreement-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab14-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeAgreement/guaranteeAgreement-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab14-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeAgreement/guaranteeAgreement-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab14-1-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeAgreement/guaranteeAgreement-5.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 6:
                            window.location.hash = "?=tab14-1-6";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeAgreement/guaranteeAgreement-6.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 7:
                            window.location.hash = "?=tab14-1-7";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeAgreement/guaranteeAgreement-7.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 8:
                            window.location.hash = "?=tab14-1-8";
                            $.ajax({
                                type: "get",
                                url: "../consult/guaranteeAgreement/guaranteeAgreement-8.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function accountAccount() {
    window.location.hash = "?=tab15";
    $.ajax({
        type: "get",
        url: "../consult/account/A-Account/Account.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab15-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/A-Account/Account-change.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab15-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/A-Account/Account-trading.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab15-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/A-Account/Account-rent.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function accountBuyer() {
    window.location.hash = "?=tab16";
    $.ajax({
        type: "get",
        url: "../consult/account/B-buyer/buyer.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab16-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-01.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab16-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-02.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab16-2-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-03.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab16-2-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-04.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab16-2-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-05.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 6:
                            window.location.hash = "?=tab16-2-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-06.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 7:
                            window.location.hash = "?=tab16-2-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-07.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 8:
                            window.location.hash = "?=tab16-3-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-08.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 9:
                            window.location.hash = "?=tab16-3-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-09.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 10:
                            window.location.hash = "?=tab16-4-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-10.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 11:
                            window.location.hash = "?=tab16-4-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-11.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 12:
                            window.location.hash = "?=tab16-4-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-12.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 13:
                            window.location.hash = "?=tab16-4-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-13.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 14:
                            window.location.hash = "?=tab16-5-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-14.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 15:
                            window.location.hash = "?=tab16-6-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-15.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 16:
                            window.location.hash = "?=tab16-6-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-16.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 17:
                            window.location.hash = "?=tab16-6-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-17.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 18:
                            window.location.hash = "?=tab16-6-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-18.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 19:
                            window.location.hash = "?=tab16-7-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-19.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 20:
                            window.location.hash = "?=tab16-7-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-20.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 21:
                            window.location.hash = "?=tab16-7-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-21.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 22:
                            window.location.hash = "?=tab16-7-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-22.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 23:
                            window.location.hash = "?=tab16-7-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-23.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 24:
                            window.location.hash = "?=tab16-7-6";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/B-buyer/buyer-24.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function accountSeller() {
    window.location.hash = "?=tab17";
    $.ajax({
        type: "get",
        url: "../consult/account/C-seller/seller.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab17-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab17-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab17-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab17-2-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab17-2-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-5.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 6:
                            window.location.hash = "?=tab17-2-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-6.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 7:
                            window.location.hash = "?=tab17-3-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-7.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 8:
                            window.location.hash = "?=tab17-3-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-8.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 9:
                            window.location.hash = "?=tab17-3-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-9.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 10:
                            window.location.hash = "?=tab17-4-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-10.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 11:
                            window.location.hash = "?=tab17-5-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-11.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 12:
                            window.location.hash = "?=tab17-6-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-12.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 13:
                            window.location.hash = "?=tab17-6-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-13.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 14:
                            window.location.hash = "?=tab17-6-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-14.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 15:
                            window.location.hash = "?=tab17-7-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-15.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 16:
                            window.location.hash = "?=tab17-8-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-16.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 17:
                            window.location.hash = "?=tab17-8-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-17.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 18:
                            window.location.hash = "?=tab17-8-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-18.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 19:
                            window.location.hash = "?=tab17-8-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-19.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 20:
                            window.location.hash = "?=tab17-8-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-20.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 21:
                            window.location.hash = "?=tab17-8-6";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/C-seller/seller-21.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}


function accountChargeStandrad() {
    window.location.hash = "?=tab18";
    $.ajax({
        type: "get",
        url: "../consult/account/D-chargeStandrad/chargeStandrad.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab18-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/D-chargeStandrad/chargeStandrad-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab18-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/D-chargeStandrad/chargeStandrad-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function accountPublic() {
    window.location.hash = "?=tab19";
    $.ajax({
        type: "get",
        url: "../consult/account/E-AccountPublic/AccountPublic.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab19-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/E-AccountPublic/AccountPublic-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab19-2-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/E-AccountPublic/AccountPublic-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab19-3-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/E-AccountPublic/AccountPublic-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab19-4-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/E-AccountPublic/AccountPublic-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab19-5-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/E-AccountPublic/AccountPublic-5.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function accountAgreement() {
    window.location.hash = "?=tab20";
    $.ajax({
        type: "get",
        url: "../consult/account/F-AccountAgreement/AccountAgreement.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab20-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/F-AccountAgreement/AccountAgreement-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab20-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/F-AccountAgreement/AccountAgreement-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab20-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/F-AccountAgreement/AccountAgreement-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function accountChange() {
    window.location.hash = "?=tab21";
    $.ajax({
        type: "get",
        url: "../consult/account/H-AccountChange/AccountChange.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab21-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/H-AccountChange/AccountChange-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab21-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/H-AccountChange/AccountChange-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab21-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/H-AccountChange/AccountChange-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab21-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/H-AccountChange/AccountChange-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function accountRent() {
    window.location.hash = "?=tab22";
    $.ajax({
        type: "get",
        url: "../consult/account/I-AccountRent/AccountRent.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab22-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/I-AccountRent/AccountRent-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab22-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/I-AccountRent/AccountRent-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab22-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/I-AccountRent/AccountRent-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab22-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/I-AccountRent/AccountRent-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function accountOnline() {
    window.location.hash = "?=tab23";
    $.ajax({
        type: "get",
        url: "../consult/account/J-AccountOnline/AccountOnline.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab23-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/J-AccountOnline/AccountOnline-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function accountJuren() {
    window.location.hash = "?=tab24";
    $.ajax({
        type: "get",
        url: "../consult/account/K-juren/juren.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab24-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/K-juren/juren-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function accountShengd() {
    window.location.hash = "?=tab25";
    $.ajax({
        type: "get",
        url: "../consult/account/L-shengd/shengd-1.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab25-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/L-shengd/shengd-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function accountWanmei() {
    window.location.hash = "?=tab26";
    $.ajax({
        type: "get",
        url: "../consult/account/M-wanmei/wanmei.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab26-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/account/M-wanmei/wanmei-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function diankaRelation() {
    window.location.hash = "?=tab27";
    $.ajax({
        type: "get",
        url: "../consult/dianka/A-relation/relation.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab27-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/A-relation/relation-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab27-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/A-relation/relation-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab27-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/A-relation/relation-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab27-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/A-relation/relation-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function diankabuyer() {
    window.location.hash = "?=tab28";
    $.ajax({
        type: "get",
        url: "../consult/dianka/B-buyer/buyer-1.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab28-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/B-buyer/buyer-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab28-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/B-buyer/buyer-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab28-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/B-buyer/buyer-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab28-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/B-buyer/buyer-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab28-1-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/B-buyer/buyer-5.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 6:
                            window.location.hash = "?=tab28-1-6";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/B-buyer/buyer-6.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 7:
                            window.location.hash = "?=tab28-1-7";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/B-buyer/buyer-7.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 8:
                            window.location.hash = "?=tab28-1-8";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/B-buyer/buyer-8.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 9:
                            window.location.hash = "?=tab28-1-9";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/B-buyer/buyer-9.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function diankaseller() {
    window.location.hash = "?=tab29";
    $.ajax({
        type: "get",
        url: "../consult/dianka/C-seller/seller.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab29-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/C-seller/seller-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab29-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/C-seller/seller-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab29-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/C-seller/seller-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab29-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/C-seller/seller-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function diankaChargeStandrad() {
    window.location.hash = "?=tab30";
    $.ajax({
        type: "get",
        url: "../consult/dianka/D-chargeStandrad/chargeStandrad.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab30-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/D-chargeStandrad/chargeStandrad-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab30-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/D-chargeStandrad/chargeStandrad-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function diankaPublicStandrad() {
    window.location.hash = "?=tab31";
    $.ajax({
        type: "get",
        url: "../consult/dianka/E-publicStandrad/publicStandrad.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab31-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/E-publicStandrad/publicStandrad-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab31-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/E-publicStandrad/publicStandrad-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab31-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/E-publicStandrad/publicStandrad-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab31-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/E-publicStandrad/publicStandrad-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function diankacommonProblem() {
    window.location.hash = "?=tab32";
    $.ajax({
        type: "get",
        url: "../consult/dianka/F-commonProblem/commonProblem.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab32-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab32-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab32-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab32-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab32-1-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-5.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 6:
                            window.location.hash = "?=tab32-1-6";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-6.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 6:
                            window.location.hash = "?=tab32-1-6";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-6.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 7:
                            window.location.hash = "?=tab32-1-7";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-7.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 8:
                            window.location.hash = "?=tab32-1-8";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-8.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 9:
                            window.location.hash = "?=tab32-1-9";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-9.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 10:
                            window.location.hash = "?=tab32-1-10";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-10.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 11:
                            window.location.hash = "?=tab32-1-11";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-11.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 12:
                            window.location.hash = "?=tab32-1-12";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-12.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 13:
                            window.location.hash = "?=tab32-1-13";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-13.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 14:
                            window.location.hash = "?=tab32-1-14";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-14.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 15:
                            window.location.hash = "?=tab32-1-15";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-15.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 16:
                            window.location.hash = "?=tab32-1-16";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-16.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 17:
                            window.location.hash = "?=tab32-1-17";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-17.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 18:
                            window.location.hash = "?=tab32-1-18";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-18.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 19:
                            window.location.hash = "?=tab32-1-19";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-19.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 20:
                            window.location.hash = "?=tab32-1-20";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-20.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 21:
                            window.location.hash = "?=tab32-1-21";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-21.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 22:
                            window.location.hash = "?=tab32-1-22";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-22.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 23:
                            window.location.hash = "?=tab32-1-23";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/F-commonProblem/commonProblem-23.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function diankaAgreement() {
    window.location.hash = "?=tab33";
    $.ajax({
        type: "get",
        url: "../consult/dianka/G-agreement/agreement.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab33-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/G-agreement/agreement-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab33-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/G-agreement/agreement-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab33-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/G-agreement/agreement-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab33-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/G-agreement/agreement-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab33-1-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/dianka/G-agreement/agreement-5.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function aas_accountSignUp() {
    window.location.hash = "?=tab35";
    $.ajax({
        type: "get",
        url: "../consult/accountAndSecurity/A-accountSignUp/accountSignUp.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab35-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/A-accountSignUp/accountSignUp-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function aas_securitySingnIn() {
    window.location.hash = "?=tab36";
    $.ajax({
        type: "get",
        url: "../consult/accountAndSecurity/B-securitySignIn/securitySignIn.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab36-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/B-securitySignIn/securitySignIn-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab36-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/B-securitySignIn/securitySignIn-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab36-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/B-securitySignIn/securitySignIn-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function aas_certification() {
    window.location.hash = "?=tab37";
    $.ajax({
        type: "get",
        url: "../consult/accountAndSecurity/C-certification/certification.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab37-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/C-certification/certification-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab37-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/C-certification/certification-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function aas_identity() {
    window.location.hash = "?=tab38";
    $.ajax({
        type: "get",
        url: "../consult/accountAndSecurity/D-identity/identity.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab38-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/D-identity/identity-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab38-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/D-identity/identity-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function aas_cashfid() {
    window.location.hash = "?=tab39";
    $.ajax({
        type: "get",
        url: "../consult/accountAndSecurity/E-cashfid/cashfid.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab39-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/E-cashfid/cashfid-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab39-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/E-cashfid/cashfid-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab39-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/E-cashfid/cashfid-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab39-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/E-cashfid/cashfid-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab39-1-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/E-cashfid/cashfid-5.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 6:
                            window.location.hash = "?=tab39-1-6";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/E-cashfid/cashfid-6.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 7:
                            window.location.hash = "?=tab39-1-7";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/E-cashfid/cashfid-7.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 8:
                            window.location.hash = "?=tab39-1-8";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/E-cashfid/cashfid-8.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 9:
                            window.location.hash = "?=tab39-1-9";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/E-cashfid/cashfid-9.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 10:
                            window.location.hash = "?=tab39-1-10";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/E-cashfid/cashfid-10.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 11:
                            window.location.hash = "?=tab39-1-11";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/E-cashfid/cashfid-11.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 12:
                            window.location.hash = "?=tab39-1-12";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/E-cashfid/cashfid-12.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function aas_mobilephone() {
    window.location.hash = "?=tab40";
    $.ajax({
        type: "get",
        url: "../consult/accountAndSecurity/F-mobilephone/mobilephone.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab40-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/F-mobilephone/mobliephone-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab40-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/F-mobilephone/mobliephone-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab40-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/F-mobilephone/mobliephone-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab40-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/F-mobilephone/mobliephone-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab40-1-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/F-mobilephone/mobliephone-5.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 6:
                            window.location.hash = "?=tab40-1-6";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/F-mobilephone/mobliephone-6.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}


function aas_password() {
    window.location.hash = "?=tab41";
    $.ajax({
        type: "get",
        url: "../consult/accountAndSecurity/G-password/password.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab41-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/G-password/password-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab41-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/G-password/password-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}


function aas_7x4x() {
    window.location.hash = "?=tab42";
    $.ajax({
        type: "get",
        url: "../consult/accountAndSecurity/H-7x4x/7x4x.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab42-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/H-7x4x/7x4x-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab42-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/H-7x4x/7x4x-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab42-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/H-7x4x/7x4x-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab42-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/H-7x4x/7x4x-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 5:
                            window.location.hash = "?=tab42-1-5";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/H-7x4x/7x4x-5.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 6:
                            window.location.hash = "?=tab42-1-6";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/H-7x4x/7x4x-6.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function aas_integration() {
    window.location.hash = "?=tab43";
    $.ajax({
        type: "get",
        url: "../consult/accountAndSecurity/I-integration/integration.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab43-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/I-integration/integration-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab43-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/I-integration/integration-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 3:
                            window.location.hash = "?=tab43-1-3";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/I-integration/integration-3.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 4:
                            window.location.hash = "?=tab43-1-4";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/I-integration/integration-4.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}


function aas_commodityfound() {
    window.location.hash = "?=tab44";
    $.ajax({
        type: "get",
        url: "../consult/accountAndSecurity/J-commodityfound/commodityfound.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab44-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/J-commodityfound/commodityfound-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function aas_cashUnlock() {
    window.location.hash = "?=tab45";
    $.ajax({
        type: "get",
        url: "../consult/accountAndSecurity/K-cashUnlock/cashUnlock.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab45-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/K-cashUnlock/cashUnlock-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        case 2:
                            window.location.hash = "?=tab45-1-2";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/K-cashUnlock/cashUnlock-2.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function aas_perfectInformation() {
    window.location.hash = "?=tab46";
    $.ajax({
        type: "get",
        url: "../consult/accountAndSecurity/L-perfectInformation/perfectInformation.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab46-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/L-perfectInformation/perfectInformation-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}

function aas_userCenter() {
    window.location.hash = "?=tab47";
    $.ajax({
        type: "get",
        url: "../consult/accountAndSecurity/M-userCenter/userCenter.html",
        dataType: "html",
        success: function(data) {
            $(".pvcontent").html(data);
            $(".pvcont").find("a").each(function() {
                $(this).click(function() {
                    switch ($(this).index()) {
                        case 1:
                            window.location.hash = "?=tab46-1-1";
                            $.ajax({
                                type: "get",
                                url: "../consult/accountAndSecurity/M-userCenter/userCenter-1.html",
                                dataType: "html",
                                success: function(data) {
                                    $(".pvcontent").html(data);
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            })
        }
    });
}