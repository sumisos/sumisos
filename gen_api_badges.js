(() => {
  const genText = (style) => {
    const uptime = [
      "https://img.shields.io/uptimerobot/ratio/m788160174-4ee51ed2bf7fedf4d806a0ae?label=Uptime",
      "https://stats.uptimerobot.com/kDgGlcnE2O/",
    ];
    const api = [
      {
        name: "Safound",
        url: "https://api.osrp.run/",
        logo: { main: "icloud", lang: "go", frame: null },
        lang_url: "https://github.com/golang/go/",
        frame_url: "https://github.com/beego/beego/",
      },
      {
        name: "Rakuyo",
        url: "https://api2.osrp.run/",
        logo: { main: "icloud", lang: "php", frame: "laravel" },
        lang_url: "https://github.com/php/php-src/",
        frame_url: "https://github.com/laravel/laravel/",
      },
      {
        name: "Golenil",
        url: "https://api3.osrp.run/",
        logo: { main: "icloud", lang: null, frame: null },
        lang_url: "https://github.com/nodejs/node/",
        frame_url: "https://github.com/nestjs/nest/",
      },
      {
        name: "Beace",
        url: "https://api4.osrp.run/",
        logo: { main: "icloud", lang: "python", frame: "fastapi" },
        lang_url: "https://github.com/python/cpython/",
        frame_url: "https://github.com/tiangolo/fastapi/",
      },
    ];
    const game = [
      {
        name: "DST",
        url: "",
      },
      {
        name: "L4D2",
        url: "",
      },
    ];
    let text = "";
    if (["github", "markdown", "md"].indexOf(style.toLowerCase()) > -1) {
      for (let i = 0; i < api.length; i++) {
        const index = i + 1;
        text += "<!-- API " + index + " " + api[i].name + " -->\n";
        text +=
          "[![](https://img.shields.io/website?up_color=brightgreen&up_message=Online&down_color=lightgrey&down_message=Offline&label=" +
          api[i].name +
          "&url=" +
          encodeURIComponent(api[i].url + "v1/version");
        if (api[i].logo.main) {
          text += "&logo=" + api[i].logo.main + "&logoColor=fff";
        }
        text += ' "API ' + index + ' Status")](' + api[i].url + ")\n";
        text += "[![](" + uptime[0] + ' "API ' + index + ' Uptime Status")](' + uptime[1] + ")\n";
        text +=
          "![](https://img.shields.io/endpoint?url=" + encodeURIComponent(api[i].url + "v1/lang");
        if (api[i].logo.lang) {
          text += "&logo=" + api[i].logo.lang + "&logoColor=fff)\n";
        } else {
          text += ")\n";
        }
        text +=
          "![](https://img.shields.io/endpoint?url=" + encodeURIComponent(api[i].url + "v1/frame");
        if (api[i].logo.frame) {
          text += "&logo=" + api[i].logo.frame + "&logoColor=fff)\n";
        } else {
          text += ")\n";
        }
        text += "\n";
      }
    } else {
      for (let i = 0; i < api.length; i++) {
        let index = i + 1;
        text += "  -\n    type: server\n    title: API " + index + " - " + api[i].name + "\n";
        text += "    links:\n      -\n        href: " + api[i].url + "\n";
        text += "        src: https://img.shields.io/endpoint?url=";
        text += encodeURIComponent(api[i].url + "v1/version");
        // if (api[i].logo.main) {
        //   text += "&logo=" + api[i].logo.main + "&logoColor=fff";
        // }
        text += "\n        comment: API " + index + " " + api[i].name + "\n";
        text += "      -\n        href: " + uptime[1] + "\n";
        text += "        src: " + uptime[0] + "\n";
        text += "      -\n        href: " + api[i].lang_url + "\n";
        text += "        src: https://img.shields.io/endpoint?url=";
        text += encodeURIComponent(api[i].url + "v1/lang");
        if (api[i].logo.lang) {
          text += "&logo=" + api[i].logo.lang + "&logoColor=fff";
        }
        text += "\n      -\n        href: " + api[i].frame_url + "\n";
        text += "        src: https://img.shields.io/endpoint?url=";
        text += encodeURIComponent(api[i].url + "v1/frame");
        if (api[i].logo.frame) {
          text += "&logo=" + api[i].logo.frame + "&logoColor=fff";
        }
        text += "\n";
      }
    }
    return text.trimEnd();
  };
  console.log(genText("md"));
})();
