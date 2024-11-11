'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "96513703621b34aa266a368f9329bfb2",
"version.json": "03c530627a594a18ef17ca0945eb6b0e",
"index.html": "8798d2eb86679fcb1f98665f08d6fee5",
"/": "8798d2eb86679fcb1f98665f08d6fee5",
"main.dart.js": "58aba8c8c745127cdb4b5efb329766ab",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0fab440411bd9225bc1a885e545c8046",
".git/config": "d9a683c4ad00218152d9d2ef15d87936",
".git/objects/92/1a4670cc216464bf8145357316231571d3562b": "b25c2fe6a88d8fb33d7a7d62847730cd",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/44a839b23000d89f3208fcb8a79303b668bec8": "1db4fcfcbdcc9a0af75fd6de6d555206",
".git/objects/04/2bcec45c9019011bce8c802d7e2e8fcf1906ea": "533c6e1c84639da3b04cbddf1f04072e",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/ffbf2aa620efa373dfdf99f453770ea3d95706": "fc11bd82ace163ad4008b3e3d8608401",
".git/objects/3c/388bbc9d9c501474a1d99facdb7dff9ffe17fa": "1e948f97e4033081d1c14bde6972b074",
".git/objects/3d/835655f225cc0b70f0375a218ce296977cbdc0": "efa93a7cf58e90e821e0488a4ffde380",
".git/objects/5a/d0c4c35862804f8019d401d3ce31e2f9b4f4c9": "f4de9b6a6655dfda415a5563189ddc90",
".git/objects/a3/49a6af86bb435ece69dedf7bbe7a2c88c06e60": "0b585d6fdd494471fd65e5edccc0b197",
".git/objects/ac/5098aa54910c15e4ec44bfd86b922348d75dd4": "1e4189c42a38aeb864765ec16a6bbd4e",
".git/objects/ad/e09f5f410dd82e3073fed2fed02c76de12ca2f": "b19eec3eec8d62660e3442d4b7761fce",
".git/objects/bb/31abb640eb51855dc6b20277f38645e2c245f2": "fc148c29d93258df22df9075f4c9da02",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/df/ed95d1aa0199300a94b3adb3f59b287f19ed6e": "f938151babf8c6e084a6611eda8edfdc",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/bd/8082d9a5ce644e9fbb88d592686cfba2499c25": "779005221a763693a326d1ec9c2018e3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a775da728a8418c705405b3e8598e0bf91d7c3": "42ad0a8dabb8d060ce422ec98852a63f",
".git/objects/ae/8d6879d86b4d11f3c8d0c16f3b547ac8682308": "3938cf92d53b16a30e9d1e2846a5d259",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d2b76931a14bbc5a0e185613a54a5ad2726a37": "c433ebbfae6219ae6a9e58e00f8acbab",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/acd58622daa8b4e56af48eae003a5f04016e43": "684541cac4b126d26963602ccdca390b",
".git/objects/f2/e48120dee0248d45bc6383ffcbd0c3d0329550": "0df2adb9264456820c882188bd0274f5",
".git/objects/e3/6a67be0faa3c9d6b85a8f85b9e72a425fbbfe9": "01755b3fd80d4c60c385000df3207e08",
".git/objects/ca/c5774409dbae50049850a88b14ba013a05f505": "394eda7a3219c6b2433df8127bef71fd",
".git/objects/ca/656c837bb1244d1b1e26cd249157efa57fe02e": "2911526b34773498d97846fad10819e0",
".git/objects/ca/0c9e897f49baf5a625c50d07f11e9a3656dad4": "548b22c2be8e1cd776536351091af69f",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c6/13a2120cd50678445c02befdf59c0fe2a1c7af": "0f4b4c97f5fc88b7e5a0e0bbd85815fa",
".git/objects/ec/0c2144931dc46d9bdee95af7689732377461c7": "e6e0c2ffb311772eee82d1def7136572",
".git/objects/ec/2c31489f58089daa6f110c7c2ae5346f97feb7": "2148baaf26e8cddb0ffb2d0ae7d31303",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "79a65cb195cf9a2a57cfed8e9c8db7f8",
".git/objects/45/1572c4e5444bf0385834a93f7720b086d4353a": "2b251ac92d60eaa75717a2f6143e42ae",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/852d612d3cc7445740a0cc1d9470249cf2b8f4": "d8e2ecb6325e740146773abcd3c912a4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/d2038454f1a11930bf7a3b7020c80009ac4c37": "5e8343af900846c6ee192e3a4a3a8ef2",
".git/objects/21/c6a4aec9a4ea9176d457ee3f3956c07e56c0bd": "3e918db2a94fa3df875e1d13fdd1e4f4",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2f/788852474dc36ac99dab3f8481a6129e0094a0": "d587218abc3892b293ee9851bbf3c0dd",
".git/objects/43/1f678b686ab4f6823677ac5b3a8abc4f267d29": "944b678bca13d48c7351e0985e2958a6",
".git/objects/43/adc4b109a7b8520ebeba2be0a8daba5b77a401": "a996de45bd5e0e4d74d99c3af2a2db99",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/e1c2c86dd878e7cdc95d409cbd8c9dc5648ec3": "fcf4dfb725c13b6705fca46e6505294d",
".git/objects/91/7793c7d9013d11bf457ad477dcd935de08f8e0": "ddd637370e7b2ecd2953b690b091148d",
".git/objects/62/a76d1ea8137d5f28107cb877b1c81c00002dbd": "8a15e026457d45874dea0ece72ad636d",
".git/objects/96/2e6f47f6d1a186383f78bc07be4c9e477dfca5": "a4a1202433ab46413debcf073d60480a",
".git/objects/3a/0c437d4e5ebf42ee3dd1f56b7b8bbdf9b2d54e": "1dc9ba11360c6667c1e8d6af23f851e3",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/a32383ef9fb4d9e3b24c3b13cf29971b61cde9": "607e157dc49202f4916aeaa12b786ac7",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/4d31030a560162279d06fd832103128f2dbc31": "3d6a0fe5991a02ea1b7cfdaa73bba7dc",
".git/objects/52/2a76df5b8e595e48ac9ac0d99584da1d05cc2b": "b1fdd50664307e38322a94f029967cb7",
".git/objects/0a/ec5cc98322db647d867f008c645ba7e7d63338": "8cd4922e39ffea4560bf5d058f3ef4a7",
".git/objects/64/0f2694b1d18ab0c27887d7c60095ceda9f8e41": "8154db3b34ef6267d3aa2f59fd520d08",
".git/objects/90/d57be04dfff4eb91a9c968b86cd595fc4fee95": "9b809d24fc4c989de36300a5ab0c4a48",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/9ef135c53332ab7008182939c554b06196d4d0": "777d027812bfa76a8b3026ce51679d87",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ec2993948a784a83063ea35eb803895d4dfc53": "75cd77c0d72bfabf0aa1616439408bce",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/3080525ef042c1deb016bb7b4c2c0e7e313d27": "f0a5944cc0e0680af5208fe81d04c3db",
".git/objects/b6/4277f1379c3dd5c6888b6b8cd35485fe9868a4": "d79def95a1b2e6b728cc9b4f290d466b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/749328c5f56ababcfb78e4d5577fb50a08ad11": "8f2de682ef86712b12267e40af37c682",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/1a97c7be12e2521d447b0541d82417fb4eed5d": "4810461a99f6a5ce8f61c1033db6cbb9",
".git/objects/e9/49402ec9967ea9bd35f60a098ee5e19c3711fc": "10518d26c8da3b10e1efca33d4b976d6",
".git/objects/e7/2b31b35ea6d08c502e145e2d54b8c5c597fb7a": "1684928c43c5d235b6db4b7b9ca489c9",
".git/objects/f8/6998c5494d326543bab26bbdd125001ba39684": "6e15b334de088b5ae889f76b5a2d123a",
".git/objects/41/665a2f88951611267dd6c5accab42d02791e05": "7133ecbf7b93894f79d81a640b79f8c9",
".git/objects/41/4ba542db7b22c495839aba04b0a6c89fd06fbc": "ad2bef08aa8d0c87f8084c04e917cefc",
".git/objects/41/1d76bfdf1a71550f973143fcd65b7e34ce5a98": "b8d53bb76bcec30d0dc325f23a25f71f",
".git/objects/83/f615f29190d778823662edfaf395092e1c6b78": "25e58544247fbfef9b4cd0aad3aaa6e6",
".git/objects/48/5506740fd456cfe8a93003edf94a7388aabf39": "7c7590368d2c26ca3ee45e9105fa2c2f",
".git/objects/70/ab02b370c3900cdc17f2e9d552e196fb462883": "ffe9c617930884b261120e87c2867c51",
".git/objects/84/7b1cd875fb82678c20f5a31e97c2dbd53fc0e1": "093fe9d2b133a8d908b824ab1ceb62c9",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/10ec6bd2605616a9e5cfbcddfb5be5fe671968": "e65925cd4fba9b4f36907909549da7fa",
".git/objects/8d/bff95ef874da9cecf51e9b0e26e2307ac2d94d": "c6e5c326151a917c775ce540276ad1f0",
".git/objects/12/23c726808b9985e3c373c5b522990e10c6a6c9": "d97b0bb8d248f42dc4ce44d0d8ef2b61",
".git/objects/12/ae7e39a2fd58f77c8f0622734a9c37a0f9dc14": "cae405006b10853ee12e30495361b1cb",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/5eda06086218679bfeee5a6af0cd60d4e6e8d5": "53a94c3a51aaecfd731bb7308a7a787d",
".git/objects/82/1534b11352a1a2a2610a89bf70004a2c26a9a2": "ec79095b6b11e67d1dec3aa5101bf892",
".git/objects/40/06a5b6a516c032086c3d56dd81edf8a1e9160d": "e487446663f22f7d42725670cc14f98b",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/78/c7c279303df986f2ede35d3d259692bfc1ac40": "528f6e52d5291df42a56db960331ff58",
".git/objects/8b/322a7ebab823e2c3215e743066beabf86928ac": "6abecec0c32fb460bf6f51a97365a1a2",
".git/objects/7f/c8d15bc54472548fe674d959ec993df590fd0c": "32704216948ddf49148bdee385304301",
".git/objects/7a/9ec3f2907fd59c8b7814583b51aa31be874674": "7254a6b4f1cbd73be84f0a3195fe5cd8",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "31dd7325044118b13a94aa2c51378ddc",
".git/logs/refs/heads/master": "31dd7325044118b13a94aa2c51378ddc",
".git/logs/refs/remotes/demoo/master": "d0a2e044d67994f78580994b54d5e706",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "bc1cb10be71aef1fccadb7bd4d4d9032",
".git/refs/remotes/demoo/master": "bc1cb10be71aef1fccadb7bd4d4d9032",
".git/index": "75551b9b057984b60b9e9273408a4a56",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "7ebe1f0bbbe72e23479edb1ffb920d64",
"assets/NOTICES": "201d3d9e0943893cf0edf3b94ebbb6c9",
"assets/FontManifest.json": "efe3b547e68976ebc326f9b0c5443242",
"assets/AssetManifest.bin.json": "eea6205355460349cf6ec4ed0a90aaff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8e606fafa62eec0aa58174206d601271",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/againlose.png": "c6843dcd635381529da458b5878ac881",
"assets/assets/images/lvl1_back.png": "4ba95de4584021d1760865498a541703",
"assets/assets/images/lvl2_back2.png": "18a75ab5f5f277106ef3f93dfa010b16",
"assets/assets/images/buy.png": "851bce2ef9e4392f8e4347f57538ec62",
"assets/assets/images/blueEn.png": "9efc0c00d80f062f3592f2fad6cfcdd6",
"assets/assets/images/los_back.png": "72189f2ee93dac4b17689be85b17dce2",
"assets/assets/images/zombie3_1.png": "a6332cb23dfeb8d4662c57bd6472f393",
"assets/assets/images/zombie1_2.png": "d856852aeafc29cc77db476d1940581d",
"assets/assets/images/splatfd.png": "33c2a68ed1cfddd002300794c4eaf9f4",
"assets/assets/images/zombie3_2.png": "96fae6296e1d86df6879b4417730b8dc",
"assets/assets/images/nextwin.png": "8623948375bf31055f85d26f0ac391bd",
"assets/assets/images/zombie1_1.png": "9dfb5a07a98e7756f7fc0b0da52ad1c7",
"assets/assets/images/lvl3_back3.png": "1e5ac5213585e77f03f9cd3cbfbadb5d",
"assets/assets/images/guns.png": "07f21f7133e650f52b99e93f1791687f",
"assets/assets/images/zombie2_2.png": "b9fb44da0f76aed57e81669b521b62b8",
"assets/assets/images/shp_back.png": "cf53923e9a2fbc7a34809441fe99047a",
"assets/assets/images/redEn.png": "4169dc1eff921e97eb0c92e8d34bb95e",
"assets/assets/images/leftred.png": "548a6bc3e9fa10c3e8c497c20e22605d",
"assets/assets/images/def_back.png": "8b8fdc91c70ba4465d0f7df26770b1ae",
"assets/assets/images/zombie2_1.png": "543a85412f8530c48f967cf6ccac5177",
"assets/assets/images/korobhit.png": "2d39d51c07346bc40599431921abe03a",
"assets/assets/images/set.png": "c646307042978a543a662ee4eb9052cd",
"assets/assets/images/win_back.png": "3832ce479d51cea7ed389b1d089bef62",
"assets/assets/images/left.png": "3dcbaac742121f6b09f05d5b48756c12",
"assets/assets/images/redDis.png": "1c8e5cf3641e9d2b52e6b383462e6e2e",
"assets/assets/images/cat.png": "d3d69bb2990d85c9356332a9e6d3c948",
"assets/assets/images/bull.png": "5036587dd7db49c9f0928517946bd63a",
"assets/assets/images/backlose.png": "61382057dd228b7dd11ef9682970c48d",
"assets/assets/images/lvl3_back.png": "db0bdcafca918863b0c9a49438549fbe",
"assets/assets/images/lvl2_back.png": "28da0c97ba98e9dee8715d8bbf61c675",
"assets/assets/images/korob.png": "9791cf4912ddb39ac4afcd6ac466c841",
"assets/assets/images/rightred.png": "2c32aa67a5879f58a81ed73324be3f9a",
"assets/assets/images/mai1n_back.png": "dad290e6e535a3837f6d4b417d26d414",
"assets/assets/images/lvl1_back1.png": "8b8fdc91c70ba4465d0f7df26770b1ae",
"assets/assets/images/first_back.png": "224f1919f312a643aca21dd204ebf67b",
"assets/assets/images/right.png": "e9bdcac5722c9e7b75a6c23909da23b8",
"assets/assets/images/blueDis.png": "1b37a82484c4bf9c692839b46a3c81fb",
"assets/assets/images/backwin.png": "f06f7559401a6e689772057d4b14f75c",
"assets/assets/audio/shrt.mp3": "e75f4e245cc53a56aa77089687596ceb",
"assets/assets/audio/dlin.mp3": "3935281b4086484f70765a038663e9e3",
"assets/assets/icons/gun4.png": "54dc9024c913521ab57f3d3af1144af4",
"assets/assets/icons/bul1.png": "1be09a89658605dd6db1cae3bc422296",
"assets/assets/icons/bul3.png": "d9ae73700558e375dadc56f74735d74a",
"assets/assets/icons/bul2.png": "012de13dae55f83f6670f2e5087afd34",
"assets/assets/icons/gun2.png": "eb188a8aecd2d7e0a2025b8c76e05e5c",
"assets/assets/icons/gun3.png": "b77368ca2ae2438a5fbe48158a034c6e",
"assets/assets/icons/gun1.png": "23d96fbd3399315c5e96044dd7de8a86",
"assets/assets/icons/bul4.png": "b8a042c60dc59e73a129cce627f3fc91",
"assets/assets/icons/coin.png": "ac306da77a17e2d31d94c339f3049ebe",
"assets/assets/icons/back.png": "4156495873b94871fb1be04387549d8f",
"assets/assets/fonts/JejuHallasan-Regular.ttf": "5aa5149c2f1ec6f29bf2d383cf642f88",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
