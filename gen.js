var data = "data:image/png;base64,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";

var dict = {
  0xFFD57917: "鉱山(3x)",
  0xFFD56517: "崩壊した鉱山(3x)",
  0xFFE861F0: "真菌洞窟(7x)",
  0xFF124445: "炭坑(2x)",
  0xFF1775D5: "雪のどん底(2x)",
  0xFF0046FF: "ヒーシの基地(3.5x)",
  0xFFA08400: "地下ジャングル(9x)",
  0xFF808000: "地下ジャングル(9x)",
  0xFF008000: "金庫室(12x)",
  0xFF786C42: "芸術の神殿(15x)",
  0xFF0DA899: "研究所",
  0xFF14EED7: "研究所",
  0xFFE1CD32: "砂の洞窟(10x)",
  0xFF0080A8: "凍った埋葬室(16x)",
  0xFF006C42: "魔法の神殿(16x)",

  0xFFA861FF: "茂った洞窟",
  0xFF77A5BD: "雪の裂け目",
  0xFF4E5267: "発電所",
  0xFF375C00: "ルッキの隠れ家",
  0xFF726186: "魔法使いの棲家",
  0xFF89A04B: "古代研究所",
  0xFFB8A928: "至聖所の壁",
  0xFF50EED7: "至聖所",

  0xFF36D5C9: "雲景(15x)",
  0xFFD3E6F0: "天空の至聖所(50x)",
  0xFF3C0F0A: "地獄の至聖所(50x)",

  0xFF3D3D3D: "岩壁",
  0xFFFFA717: "溶岩",
  0xFFFF6A02: "溶岩",
  0xFF0000FF: "水",
  0xFFFFFF00: "ゴールド",
  0xFF1133F1: "湖",
  0xFF11A3FC: "湖の像",
  0xFF14E1D7: "大木",
  0xFFF0D517: "大木",
  0xFF36D517: "丘",
  0xFF33E311: "丘2",
  0xFFD6D8E3: "冬",
  0xFFCC9944: "砂漠(15x)",
  0xFF48E311: "無",

  0xFFC88F5F: "ピラミッド",
  0xFF968F5F: "ピラミッド",
  0xFF967F5F: "ピラミッド",
  0xFF167F5F: "ピラミッド",
  0xFF967F11: "ピラミッド(7x)",
  0xFF968F96: "ピラミッド",

  0xFF204060: "山",
  0xFF208080: "山",
  0xFF408080: "山",
  0xFF608080: "山",
  0xFFC08080: "山",
  0xFFC08082: "山",
  0xFFE08080: "山",

  0xFF6DCB28: "聖なる山",
  0xFF93CB4C: "聖なる山",
  0xFF93CB4D: "聖なる山",
  0xFF93CB4E: "聖なる山",
  0xFF93CB4F: "聖なる山",
  0xFF5A9628: "聖なる山",

  0xFF57CACE: "オカリナの祭壇",
  0xFF157CB6: "???", // "酒のエッセンス",
  0xFF157CB8: "???", // "空気のエッセンス",
  0xFF2E99D1: "???",
  0xFF9D99D1: "???",
  0xFF157CB0: "???",
  0xFF9E4302: "???",
  0xFF57DACE: "???",
  0xFF157CB5: "???",

  0xFFFFD100: "オーブルーム",
  0xFFFFD101: "オーブルーム",
  0xFFFFD102: "オーブルーム",
  0xFFFFD103: "オーブルーム",
  0xFFFFD104: "オーブルーム",
  0xFFFFD105: "オーブルーム",
  0xFFFFD106: "オーブルーム",
  0xFFFFD107: "オーブルーム",
  0xFFFFD108: "オーブルーム",
  0xFFFFD109: "オーブルーム",
  0xFFFFD110: "オーブルーム",
  0xFFFFD111: "オーブルーム",
}

var colorToHex = (c) => {
  return "0xff" + c.data[0].toString(16) + c.data[1].toString(16) + c.data[2].toString(16)
}

var a = document.getElementById("a");
var b = document.getElementById("b");
var tooltip = document.getElementById("tooltip");

var ctxa = a.getContext("2d");
var ctxb = b.getContext("2d");

var image = new Image();
image.onload = () => {
  ctxa.drawImage(image, 0, 0);
};
image.src = data;

var w = 64
var h = 48

var atob = () => {
  for (var x = 0; x < 64; x++) {
    for (var y = 0; y < 48; y++) {
      var tmpc = ctxa.getImageData(x, y, 1, 1)
      ctxb.fillStyle = `rgb(${tmpc.data[0]}, ${tmpc.data[1]}, ${tmpc.data[2]})`
      ctxb.fillRect(x * 10, y * 10, 10, 10)
    }
  }
}

var Random = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
}

var BiomeMapSetPixel = (x, y, biome_color) => {
  ctxb.fillStyle = `rgb(${(biome_color >> 16) & 0xff}, ${(biome_color >> 8) & 0xff}, ${biome_color & 0xff})`
  ctxb.fillRect(x * 10, y * 10, 10, 10)
}

var clamp = (val, lower, upper) => {
  if (lower > upper) {
    [lower, upper] = [upper, lower]
  }
  return Math.max(lower, Math.min(upper, val))
}

var paint_biome_area = (x, y, w, h, biome_color, buffer) => {
  var extra_width = Random(0, buffer)
  x = x - extra_width
  w = w + extra_width + Random(0, buffer)

  for (iy = y; iy <= y + h - 1; iy++) {
    for (ix = x; ix <= x + w - 1; ix++) {
      BiomeMapSetPixel(ix, iy, biome_color)
    }
  }
}

var paint_biome_area_split = (x, y, w, h, biome_color1, biome_color2, buffer) => {

  var extra_width = Random(0, buffer)
  x = x - extra_width
  w = w + extra_width + Random(0, buffer)

  var cutoff_point = Random(y + 1, y + h - 2)

  for (ix = x; ix <= x + w - 1; ix++) {
    for (iy = y; iy <= y + h - 1; iy++) {
      if (iy < cutoff_point) {
        BiomeMapSetPixel(ix, iy, biome_color1)
      } else {
        BiomeMapSetPixel(ix, iy, biome_color2)
      }
    }

    cutoff_point = cutoff_point + Random(-1, 1)
    cutoff_point = clamp(cutoff_point, y + 1, y + h - 2)
  }
}

var paint_cave = (x, y, dir, biome_color, length) => {

  for (i = 1; i <= length; i++) {

    BiomeMapSetPixel(x, y, biome_color)

    if (i < 5 || Random(0, 100) < 75) {
      x = x + dir
    } else {
      x = x - dir
    }

    if (x < 2) {
      x = 2
    }
    if (x > 62) {
      x = 62
    }

    BiomeMapSetPixel(x, y, biome_color)

    if (y < 17) {
      y = 17
    }
    if (y > 45) {
      y = 45
    }

    if (i > 3) {
      if (Random(0, 100) < 65) {
        y = y + 1
      } else {
        y = y - 1
      }
    }

    if (i > 6) {
      if (Random(0, 100) < 35) {
        BiomeMapSetPixel(x - 1, y, biome_color)
      }
      if (Random(0, 100) < 35) {
        BiomeMapSetPixel(x + 1, y, biome_color)
      }
      if (Random(0, 100) < 35) {
        BiomeMapSetPixel(x, y - 1, biome_color)
      }
      if (Random(0, 100) < 35) {
        BiomeMapSetPixel(x, y + 1, biome_color)
      }
    }

  }

}

var biome_coalmines = 0xFFD57917
var biome_collapsedmines = 0xFFD56517
var biome_fungicave = 0xFFE861F0
var biome_excavationsite = 0xFF124445
var biome_snowcaves = 0xFF1775D5
var biome_hiisibase = 0xFF0046FF
var biome_jungle_1 = 0xFFA08400
var biome_jungle_2 = 0xFF808000
var biome_vault = 0xFF008000
var biome_sandcaves = 0xFFE1CD32
var biomes_snowvault = 0xFF0080A8
var biomes_wandcave = 0xFF006C42

var buff2 = null;
var buff3 = null;
var buff4 = null;
var buff5 = null;
var buff6 = null;

var go1 = () => {
  biome_coalmines = 0xFFD57917
  biome_collapsedmines = 0xFFD56517
  biome_fungicave = 0xFFE861F0
  biome_excavationsite = 0xFF124445
  biome_snowcaves = 0xFF1775D5
  biome_hiisibase = 0xFF0046FF
  biome_jungle_1 = 0xFFA08400
  biome_jungle_2 = 0xFF808000
  biome_vault = 0xFF008000
  biome_sandcaves = 0xFFE1CD32
  biomes_snowvault = 0xFF0080A8
  biomes_wandcave = 0xFF006C42

  if (true) {
    [biome_coalmines, biome_excavationsite] = [biome_excavationsite, biome_coalmines]
  }
  if (Random(0, 100) < 35) {
    [biome_fungicave, biome_excavationsite] = [biome_excavationsite, biome_fungicave]
  }
  if (Random(0, 100) < 35) {
    [biome_snowcaves, biome_hiisibase] = [biome_hiisibase, biome_snowcaves]
  }
  if (Random(0, 100) < 35) {
    [biome_jungle_1, biome_jungle_2] = [biome_jungle_2, biome_jungle_1]
  }
  if (Random(0, 100) < 35) {
    [biome_sandcaves, biome_fungicave] = [biome_fungicave, biome_sandcaves]
  }
  if (Random(0, 100) < 35) {
    [biomes_wandcave, biome_sandcaves] = [biome_sandcaves, biomes_wandcave]
  }

  buff2 = null;
  buff3 = null;
  buff4 = null;
  buff5 = null;
  buff6 = null;
}

var go2 = () => {
  if (buff2 != null) {
    ctxb.putImageData(buff2, 0, 0);
  } else {
    if (Random(0, 100) < 65) {
      paint_cave(27, 15, -1, biome_fungicave, Random(4, 50))
    }
    if (Random(0, 100) < 65) {
      paint_cave(35, 15, 1, biome_fungicave, Random(4, 50))
    }

    if (Random(0, 100) < 65) {
      paint_cave(27, 18, -1, biome_fungicave, Random(4, 50))
    }
    if (Random(0, 100) < 65) {
      paint_cave(35, 18, 1, biome_fungicave, Random(4, 50))
    }

    buff2 = ctxb.getImageData(0, 0, 640, 480)
  }
}


var go3 = () => {
  if (buff3) {
    ctxb.putImageData(buff3, 0, 0);
  } else {
    if (Random(0, 100) < 65) {
      paint_cave(27, 20 + Random(0, 5), -1, biomes_wandcave, Random(5, 50))
    }
    if (Random(0, 100) < 65) {
      paint_cave(35, 20 + Random(0, 5), 1, biomes_wandcave, Random(5, 50))
    }

    buff3 = ctxb.getImageData(0, 0, 640, 480)
  }
}


var go4 = () => {
  if (buff4) {
    ctxb.putImageData(buff4, 0, 0);
  } else {
    if (Random(0, 100) < 65) {
      paint_cave(27, 27 + Random(0, 6), -1, biome_sandcaves, Random(5, 50))
    }
    if (Random(0, 100) < 65) {
      paint_cave(35, 27 + Random(0, 6), 1, biome_sandcaves, Random(5, 50))
    }

    buff4 = ctxb.getImageData(0, 0, 640, 480)
  }
}

var go5 = () => {
  if (buff5) {
    ctxb.putImageData(buff5, 0, 0);
  } else {
    paint_biome_area(32, 14, 3, 2, biome_coalmines, 0)
    paint_biome_area(28, 15, 4, 1, biome_collapsedmines, 1)

    paint_biome_area(28, 17, 4, 4, biome_snowcaves, 2)

    paint_biome_area(28, 22, 7, 4, biome_hiisibase, 3)

    paint_biome_area_split(28, 27, 7, 4, biome_jungle_1, biome_jungle_2, 4)
    paint_biome_area_split(28, 29, 7, 5, biome_jungle_2, biome_vault, 4)

    buff5 = ctxb.getImageData(0, 0, 640, 480)
  }
}

var qol = () => {
  if (buff6) {
    ctxb.putImageData(buff6, 0, 0);
  } else {
    var frozen_vault_orb = 0xFFFFD102
    var snowy_depth_orb = 0xFFFFD109
    var wizard_den_orb = 0xFFFFD110
    var sandcave_orb = 0xFFFFD104
    var color_end_room = 0xFF50EED7
    var color_boss_arena = 0xFF14EED7

    BiomeMapSetPixel(44, 43, color_end_room)

    paint_biome_area(35, 38, 5, 2, color_boss_arena)
    BiomeMapSetPixel(37, 40, color_boss_arena)
    BiomeMapSetPixel(38, 40, color_boss_arena)
    BiomeMapSetPixel(12, 19, frozen_vault_orb)
    BiomeMapSetPixel(14, 42, snowy_depth_orb)
    BiomeMapSetPixel(52, 45, wizard_den_orb)
    BiomeMapSetPixel(51, 19, sandcave_orb)

    buff6 = ctxb.getImageData(0, 0, 640, 480)
  }

}

document.getElementById("go1").addEventListener("click", () => {
  atob()
  go1()
  document.getElementById("go2").disabled = false
  document.getElementById("go3").disabled = true
  document.getElementById("go4").disabled = true
  document.getElementById("go5").disabled = true
  document.getElementById("qol").disabled = true
})

document.getElementById("go2").addEventListener("click", () => {
  go2()
  document.getElementById("go3").disabled = false
})

document.getElementById("go3").addEventListener("click", () => {
  go3()
  document.getElementById("go4").disabled = false
})

document.getElementById("go4").addEventListener("click", () => {
  go4()
  document.getElementById("go5").disabled = false
})

document.getElementById("go5").addEventListener("click", () => {
  go5()
  document.getElementById("qol").disabled = false
})

document.getElementById("qol").addEventListener("click", () => {
  qol()
})


document.getElementById("b").addEventListener("mousemove", (e) => {
  var tmpc = ctxb.getImageData(e.offsetX, e.offsetY, 1, 1)
  //tooltip.value = ( 0xFF000000 ) + ( tmpc.data[0] << 16 ) + ( tmpc.data[1] << 8 ) + ( tmpc.data[2] ) 
  var desc = dict[(0xFF000000) + (tmpc.data[0] << 16) + (tmpc.data[1] << 8) + (tmpc.data[2])];
  if (desc) {
    tooltip.value = desc
  } else {
    tooltip.value = colorToHex(tmpc)
  }
})
