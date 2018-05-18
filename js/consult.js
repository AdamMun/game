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