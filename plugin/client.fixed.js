// Browser half of @dsh-user/gamepad-cursor.
// Classic-script bundle: registers a factory with the client module system;
// the factory returns the Cordis plugin exports ({ apply }).
window.__ModuleLoader__.load({
  id: "@dsh-user/gamepad-cursor",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

    var PLUGIN_ID = "@dsh-user/gamepad-cursor";
    var STYLE_KEY = "dsh.gamepad-cursor.style";
    var POS_KEY = "dsh.gamepad-cursor.pos";
    var SENS_KEY = "dsh.gamepad-cursor.sensitivity";
    var WHEEL_KEY = "dsh.gamepad-cursor.wheelSensitivity";
    var SNAP_KEY = "dsh.gamepad-cursor.snapStrength";
    var SENS_MIN = 0.4;
    var SENS_MAX = 2.5;
    var SENS_STEP = 0.1;
    var WHEEL_MIN = 0.2;
    var WHEEL_MAX = 3.0;
    var WHEEL_STEP = 0.1;
    var SNAP_MIN = 0;
    var SNAP_MAX = 1;
    var SNAP_STEP = 0.05;

    // Filled by the build script with base64 sprite frames from assets/cursors.
    var STYLES = {"default":{"label":"默认圆点","size":28,"frames":null},"priest1":{"label":"牧师 1","size":48,"frames":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVQ4jWNgoBAwoguoCkv9x6bw9ttnGGoxDFAVlvrfsW4rw+ML5zEUTm2qwWoICzbNU5tqcDoZ5kKYYUzIksg2d6zbikHDNCOzUQxgYGBgkDUwxGk7NoBhAC7bkYHQ+jq4F+CBAnNSdl0LXCEsLLLrWuDsFHdthjk7r6IaANMspCLL8O7OYxRDkA1CBvAYURWW+j9h4rz/aw+e/68qLPXf3Nz8v7m5+X9VYSkUsbUHz//vjHL9v7/A9z9yWsEaBjBXPL5wHsX/c3ZexVDLqCos9R/mL5g3YIZ0rNvKUBHkDfcaNi8wIZsspCLL0GEpxtBhKYaiGJmf4q6N6gJYOMBsRvcKsvi7O48ZZsUaM6QtPos9JaJrTnHXxnD6qVc/cGkhDwAAIiOaX/aBSXsAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSElEQVQ4jaVSrW7DMBg8VwXDiTQQKaxBIa0m7Q2mgLHBSWNRSV6goAqoArIHKNhUVmllGQroE0ybVLWkyCmyZFDJAUUbSsFmz07Sgu2I7e/n7rtPBv4JUg94tlO1FVLBG7UNAs92qjTLwTbrRuF0Mm4l6bY1Tyfjs2PLKangpKMndOU0yxunbk++DQIAcPuDs+p1NAhOqddhvcagghMCmJuP4kQVyV1EcaLuVHDyeH9TzZbbbwLPdqooTuD2Bxjd3TZIJFGa5SovQQUnXdRg9VwsXp5QFkw1WT1X5cPAx/XlBYbz1e8Ovt4XBntZMERxArZZK/8yP1tuDUGi+w8DHwCUgpzg+eEKw/kKVHCjngpOOlRwIn9Ytjsg2x0wetsbKvW3FAJ+vrJnO5XuU7eix8uCGdOoHbShLBjCwEdZMCP+sf881fI3HAFHHJ9CDEsJrwAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSUlEQVQ4jaVSIU/DQBT+2qARvQRxSRU7NbOlouEHkAqCmSSpazAYJGJBNIjiQMwsCwaBoq5iiiAhIZ2Z2lyTCZJNg3oIeJe7roMlfElz9767932v752DGpSQVOcAYLZcOE28RSohKcsLVJNy7eIg7TeK7DQlD9J+k1kjXDMwnbO8WFv595SQxHtLAAD8TncrZxZcE9jk/ie4rJvbO/2ZnDkdJSQ9nR8T8DMFPvRaPlbzCmeXV5a42dTZcuFcnxzSaDz9ngo7PD6XpISkMAwpDENSQmquvv+1iQB0FdWkRJYX8Fq+PkuiNoZxoGMXAD5fHnDRO9Kk1/IxSPvwO13N8zoaTy0z1ySTqI3e/i6ygz3rEsf8Ek/v3/SZfppKSDJLXc0rXQ3Hs+XCUUJSErXBTXSbkhnDOLCElJA0jAOdvLGJjNf3j624f+ELHoavR2UiAyMAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSUlEQVQ4jaVRIWvDQBh9F6YnclBxELWcqmmp6g8YFWOmchBXZmImJ0pEiLi5TdSUMjMxFxdRNb3BaE1V4gIRg0Rv6qbuuEtSVtiDI3eP773vy/sIWuCUyTYHAHldkT7eIjllUqQZyv2uU7iKl70mZ33iVbzsa9YLx3yYnUWadb7q9zhlUt0tAwDwRuOTOivDjsGx7n9CjfX49KyPyZnb4ZTJt7trCRhb4JRJ1/fQFCXCKLHM2xt4uLmUm+0BeV0RosQA4PqeFjVFCZFmuJ9fHZ06ryvicMpkGCUQaYamKLU4jBKU+x1EmsH1PZ3DYjbEOphok94QXd/DKl7CG407E2y2B+vtAMDP+6sunF+cQ0wHVpGYDiyj25dPfSdmuu0MTK4pSuR1RThlcjEbQoXoqHRNscI6mFhGnDK5DiZafDQDhY+v75O4f+EXbieipdJDS5IAAAAASUVORK5CYII="]},"priest2":{"label":"牧师 2","size":48,"frames":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBElEQVQ4jWNgoBAw4pJQFZb6j0389ttnKHqwGqAqLPW/Y91WhscXzmPITW2qQTGEBZ/mqU01eBwPAUzYBJFt7li3FYNG9h5WAxgYGBhkDQwJ2o7XAFy2owOMQIQ5L7uuBS4GC4vsuhaMQGTEpllIRZbh3Z3HKIYgG8TAgBmdDKrCUv8nTJz3f+3B8/9VhaX+m5ub/zc3N/+vKiyFIgZjExUGMFc8vnAew/8wQ1AM+HlyOUNFkDecL6QiyzC1qYZB1sAQLl4R5M2Q4q4NV4NiwJydV+EaOyzFGDosxVBshfFh6hgYsASikIosVq8gi7+78xgeiHjDAKY4xV2b4d2dx4SUkgcA7eh7ReIoHLAAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPklEQVQ4jaVSMWuDQBh9thk6R9rBYqdIoFkSCv0LGdzcu0mG+AccRKgI8Q84tGsgoYubW/fSISS7ZjoqUtDBDqWTHcodd9UYaN9yd9+9733vu++Af0I6dKHJSt0WT4pMyGkV0GSlDqIYZLdt3IWeI4j0upJDz+kw/4OTtiBfOYjixsq31yoAAOp4crR6p8Ch6r9xyh+otf1bgqvzS1R5jirPsZibeH5aYTi8xmJuAgDKz497gJuCJiu15fpQxxPYhg4AsFxfqBZ6DoIohm3obBKNKVD0ByrWqweUKWFJ/YEquE2KTBLe4Ot1zaoDQJkSWK4Pstuy/m1DhzkdMY7QAt1Twu3FGWbLDXPweHeD2XLDkpMik3r8gQpF+woAQFcK++Vd4AoOaDLfJ98KHy9TwkQ6/wElm9MRypQco/4N38WHibQafK0IAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVQ4jWNkwAFUhaX+YxO//fYZIzKfEZsiVWGp/x3rtjI8vnAeQ25qUw2KISz4NE9tqsHlQDhgwiaIbHPHuq0YNLL3sBrAwMDAIGtgSNB2vAbgsh0dYAQizHnZdS1wMVhYZNe1YAQiIzbNQiqyDO/uPEYxBNkgBgbM6GRQFZb6P2HivP9rD57/ryos9d/c3Py/ubn5f1VhKbgYMpuoMIC54vGF8wwd67YyCKnIYrgWxYCfJ5czVAR5w/lCKrIMU5tqGGQNDOHiFUHeDCnu2nA1KAbM2XmVgYGBgSHFXZshSJmPocNSDMVFMD5MHQMDjlhAduq7O4/hroHxkQOQCZ9mGJgVa4xiENGBCAOnXv0gRhl5AAABfn8RcN33JAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/UlEQVQ4jWNkwAFUhaX+YxO//fYZIzKfEZsiVWGp/x3rtjI8vnAeQ25qUw2KISz4NE9tqsHlQDhgwiaIbHPHuq0YNLL3sBrAwMDAIGtgSNB2vAbgsh0dYAQizHnZdS1wMVhYZNe1YAQiVgOEVGQZ3t15jGIIskE4DYDZLqQiCxd7d+cxQ8e6rQwVQd4MMIORDWFC1pxd18LQsW4rXBHMFY8vnMcZDngDUUhFlmFqUw2DrIEhQ0WQN4ZXMQz4eXI5XGGQMh9Dh6UYiqYOSzGGiiBvhhR3bbgYPAyQEwd6GCCLwfiwcGBC5qBrhoFZscYYBmEEIj5w6tUPYpSRBwB5m3ryb7R5oQAAAABJRU5ErkJggg=="]},"priest3":{"label":"牧师 3","size":48,"frames":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVQ4ja1SK27DQBB9tnqCrhSwklkXhSRolRMEhOUMYb5AQGQQGSxsQVjVG9TMoLAncEhRzFYKi68wBdFY+7MUqR2yntk37828NfDHyMKCEpJSwMvtGmEjAiUkmaaFPXcR8HQ8JEmeUs2n4+GB4e+Ru4mrbJo2OlPr5WGhWCwfVk8STKlPxWgKj1dW9XjJXpRVHZnI+MxNnl8KDL31SFwi4P6cSkhiUigh6fXtgz6/O1JCktaatNakhPRq/B3ikx7wFPbcRfuXVY1iscR+u8Hlds0yJSTt1nO8f/2A12AS07TYbzfjai6O/cgBeM1mNYNZzTxVzsNmz0RWDldx60Nvo9856QGDd+s5ht5OQf4nfgGmXpqtiSWydQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKElEQVQ4jWNgoBAwoguoCkv9x6bw9ttnGGoxDFAVlvrfsW4rw+ML5zEUTm2qwWoICzbNU5tqiHA8BDAhc5Bt7li3FYPG5j0mdAFZA0OibcdqAC7bcQFGBgZEyAupyDJERqXDJWFhkV3XAmfffvuMEdkrjKrCUv+z61oYZA0MGSqCvOEakMHUphqGjnVbMeSnNtUgYgEGhFRkGZYvm8nw7s5juCYhFVm4PMwyFBekuGszzNl5FW7AuzuP4bbIGhgydJVlMLy785gBWR3MOyj+SXHXZmBgYGAwE+NgSFt8Fu6CWbHGDGmLz6JohLFZYBxVYan/6+5+YmBgYGCA0TBQcfwVhka4F2Cakf0JA+/uPEbx/7s7jzEMwZoOYIpT3LUZ3t15jEsJdQAAelOGCK9supgAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABI0lEQVQ4ja1SLW/DMBB9joYHamnAUtBqVNJqwNovKCgLHyvLHyioAqqAwA6UTNP+wcICBkdHUjLUskgFk1o8dgPTWY7tTgV7xL53d+8+bAEPWiryOQDYHQ8ixvdILRVVdYNu2waBm9UyKnIVS96slrFiUSSu4Vau6iY4Y+MlPpGOJxdXjwqcq34OdincXl6U1sm7yIsyWCLHC9cYDFOc9l1PxBUCfp9TS0UsCi0VrR9f6PW9JS0VGWPIGENaKsv5dzc+ugPuotu2qOoGg2FqfXlRIh1PsMhm2B0PQmipaD4d4fntEzwGi1R1g0U2s6O5cbyPBIAl59MRsttrVPc3vY7Y9pODV3BbPe27oKPYV05iyYynh7ue0EU/0cXH1/df7v/BD9IVnnmX8ub2AAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLklEQVQ4ja1RoU7EQBB9bU6gEN3kxCar6CrMXUho+AJEXT2OnOkPVDQVTUUliBoEFkVdPwAJpufvXJMTJFcNajE3m227JQhestnsm5k3M28djCAZV2MOAHbHg2PjB6RkXJV1g27bThKrPLWKLGzFVZ7amlnhmg+zc1k3k9u2njsmxGr95+5Wgbnuc9Cm0HhxVuggeRFnxayJAwHPF+j33UDEFDIFBn5IxpVkXAVBoI9kXL2+tZqnHMp/eHxWknHlSsZVnBUo6wb9vgMAPUW3bSc+UD6ZbTXR8wWqPIVYrZFE4SBGxUkUYnc8OAsA+H5/QXLaM7o4x/XyDJvTNABQ3iyxiULc315O/HBMMzxf6CJah7jeEDTNdOlhFhOe7q4mQuOvtHpA+Pj8+i38P/gBib2UI1VFzC8AAAAASUVORK5CYII="]},"skeleton1":{"label":"骷髅战士 1","size":48,"frames":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB1ElEQVQ4jaWTMWgTURzGf/+QIYsRe9JibMEaz8EIVQuBBkSESobckjiXLLGhdC0hgmSQDhK6SrmQJXTpIGapQyGLEDJIqrY2RbxEh5ZILB2Mi9s5xHfcJXEoftP7v/f/vvd9738nNSNpAyzuVIVzQPH8ipxZiPL2y4k93HhlKijfe33PXmL6KoAAth+Qp48e8Oq9ZWfTMfTInNNotfYxK40R0c/BS8LxCcbMtAiAroVGyEMirBbWnb2Xz58RvnVbOkeHOAIbxRW2S58AaLbrqLrZrjvEF6/fAHD88YMj4nPf1mzXPQT3GqBt5sinEszcuctqYZ3O0aEtAI8f3ufgoPPPGGu5TQBKS/Msb+05bvKpBD5dC3HaOwXArDSwWvse0lpuk8vaRc+IZ8PXJJ9KACC6FgKws+kYZqUxcrsbmXgEgPJuCwZjxB++HqLztYsemSMT/0l0MsDy1h5K0B1LuZqdCsq3Xh/rrIuoCajDTDzCjWwRZXEMBMA66wLgA5zc2XSM8m6LiWqB0tK8h6Dsu8nw91Mezq5e2o3oZIDyGDu+e9qEAGwUVzArDYIXAk7txrsfvz11zUgOBJ7c1G13jP6vQaOqx6FmJFncqVIzkrb87+/8B0FlvVaNoJqmAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB1ElEQVQ4jaWTP2hTURjFfzc4ZDFFUhqMCVhjQJqCihqws1DhvSXZpUtoCV1DyCAZpIM83irhBZfQxUHqYgchDkLIIKlabDqYvDgoTyLGYlx0ug7Pe/te/wzime69fOfc8537XdE2CxLgzvNngn+A4p1R5NLtPK8+fJZHC88nYuLLeBo6G0w8AAFI0TYLvPz9nadvBnJtZYls7uphYX8Xp9U9dntmYVFcmR5gplMIgGw8eYx8VGS9vqHPHj24T2ZhUbj7e4cCtlXmSfM9AL1hB7XvDTua+HBrG4BP795qkUjwtt6wEyIE1wBDp0qtaJC+dp31+gbu/p4U2XiSzKUk7sg7tY1KtQFA894NVjd3tJta0SAC4I48CeC0ugz6uyFSpdpgNj4TeuL5zEVRKxoAiLu3buKOPGlbZU06DaXlHACPX/TBf0aEClCRS8s58nNRbRXAtsohV/OJmPg4njKYeP4gKdtrK0s4rS6Xt7ZpUmd1c4fZ+IyoVBvBAdNkwM8gOCy2VaZWNHj99RcA3yY/QvZBT6IWEInEOR2Ssvm3T438XPTEXCJG6gLj8YG0rTJOq0vsbFQE+1ZQjhTaZsEXMNMpGcxh+tMvVPuToMhtsyDF/37nP586zXi3krwPAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACAklEQVQ4jY2TPWhaYRSGn8862EIM5QYlttIm1kWFKIEMQodCwUEX0zm4iCJZRTKEDCFDEdcgShZxyZQucQg4ikMwbfOjHdSkIT9gUinVxe3rkNzbe5VA3+XjO5z38L7nR1QjUbl/dS1+PBtxftmXjGH+jSLOL/u0+7eGeDUSBZBmQDy3veD8641MxoK4vQtaUrt5TKFUl7N2qxgvDPBx/4sQAG7FMUEeK2KIuTw+0W2d0e7fYlaDbu8Cu8VTABqdGrlsit3iKY3OA3l1Y0srsL25Ll0en6AFJn3lRqdGo1Mz/HUknP4ATn+A1Y0tuq0z6fL4EACfPrzn5KT7pI10Jg9APORl56DJ570KV9+/sb25jsmtOLjv3QNQKNVpN48NpHQmz4wyLQCWbBYA1pbDOP0BAIRbcQDIZCw40SwV1imLGAxHsriySKJ8xJzrrbjo/pQAJte8Q2tiPOSluLIIQDIW1N7BcCQBDu9GxENeHskCEMKtOGQumzL4XLJZSJSPNAW5bMpga85uFRe9wb8xqr5VG+/2KhTZIFE+YkaZFulMXr+hGhkex6j3nsumWFsOc3g3AuBX/4+mTIV+rU2AsNtfaquqytw5aBoaqU5gHCaAXu+3zGVTFEp1rFMWofetQlU0DnP49Ssq1zdaHwbDh0T1/xQerxGqkejECf8vqpGo/AuBd9gxaGbuGQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACCUlEQVQ4jYWTP2hTURTGfzdm6GIcnhj6NGgb3pJXSELBoSAiKBkSh1TXkiU0hC4ipVQoHWqHUrKWkFCH4NJFRWiHQkCEkKFEa9MmDvlTS9uUFLLEJdt1yMvjvbTqB3e4h/N995zvnCvykajcPj0TP2/0aJ50JEMYv6+I5kmHWqdli+cjUQDpfLr9Sbx59pjm93OZiE2h6X4zqVY5IJMrylG3SwwLGxACQFPUK+QhEVvM65sQjeoRtU4L5yCo6X62socAlOoFUutJtrKHlOp98tzyqimwsbIkvb4JQRUcVuVSvUCpXrDdLSQ8gSCeQJC55VUa1SPp9U0gAF48eUS53PhrG/MLaQDiIZ3N3QprH3c4/bHPxspSv4JyuUGt0xKZXJFa5cBGml9Ic1u5JQAe3hkBYHE6jCcQ7LuoKSqjbhcX7e6VEVogAJmdmWT2/TfGvA/EceOXBMODi3ZXJmJTxEM62ZlJABKxKauABNi77BEP6RhkAQind1yl0Wyh6X7mc2kwRGaN0Vl9GbQ15naJ43a3v1yaosrP795KTVFl6vVLqSmq/PB1X3559VxqinrdQVNUszQHYBoHkFpPsjgdZu+yZ+2feEg3c6xr7QBsmzYoc3O3YnNxMIFhOAYvpNaTZHJFXDdHzLsVlopscIbv3WXn7Nxso/u7n2ht6zoYvxHykei/5v8/EfkHRZPZEjtGyXQAAAAASUVORK5CYII="]},"skeleton2":{"label":"骷髅战士 2","size":48,"frames":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB7UlEQVQ4jX2TT2gTQRTGf1OKWPwDZcTi2rCQMhejrLIHMXgseMj2kCDeSi6SEHoRKaWH0EObU8m1hCx4CF56kSLUkxEVZEWoSilFJEGph0rAtKBovY2HdKb50/rBMPNm3vfmve/NiHqQ1nQgJtfXUNLhJDTauwDUgzSABhgyZAAlHeKuNIc9I+7K/uACYNgsCm/fEXclX3baOp9NohLe0c3bm1RrkY67UgBMrq+ZLIQwTofRB8h9QQCEKcVk0AOV8FgNtwDYaL6hvFxgNdxioxkdq8tAAEP8n92V8ZF4AGNjo7Ra+yeWMTtXsRzodGVISYeJK1cBdKu1rwGqtYjG9mY3idm5ChNxRwDWX0lHCyPezEIJgNj1G8xnUsfWe0GeEafOXmR356ueWSixsli078CSAe7fSRBO+wAslXIA5LNJfrR/a0M2vlbElcVi73WHQXLFsCNawgMiDHk+k+Ja8rZASccMXX54V3fPT15/1C8fTGklHa2ko58+WrLrzNQ9lHR6umD+BPls0jwai3DaJ/f4vTGF7UI9SJMav2w3y8sFqrWI8+dOWxug9OyT8N1RYfwqt25SD9IMAzqIjYvvBwd8aO/Z9v389RfA2t/2/vCi0QTsbwTQpgv60sgIvhcTz199Fr4XE8CA3QcN8A9GUMUIqeMW+AAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB0UlEQVQ4jX2TP0hbURTGfzcINgUHvbTBBzHy5C1GiDbg4Cw4GIcEcSsuogQXkRAcpIPtJFklNLRD6eJSpODQP4FWFKUQKWIjiFFwiYgEQRen3g559+a9p/aDy72He853vnPuuaKcSiuaEKObGzjS4jGcNOoAlFNpAAUQ0sEAjrSwY1Jf+pYdk0FyAdCmD9m9X9gxydl5Q81Nj+DEE63M1QPefthVdkwKgNHNDa1CCO3kst8LDpAACF2KVuCDE0+wXjoEoFLbobCaZb10SKW2+2Bf2jzZDSq1nf/aXn/hSIu+/gFOj/7o1+CxMnL5IoDo6x/gy/a3FgGg5l+9ASA6OMRSZtyQ5PJFCqtZcvkikUin+BsKc3VRN8l8BNHBIQCWMuMP1quhk62tLLeauLay7HOaGYsz/PwJsx/3AYwKbyLTEHepwuKk8u6ftn6rHwsTypGWcqSlPr9/bc6OtFRmYqo1gbij6W1iLl9kZizOu69VSi+TRg3u8J006j4CIpFOLi+v1dz0iB4ag56up+JZRzv759foYKD5McqptClDy0z22gRk+wh1XEhLfyG7mszVAwBubu98djDYhdK/UXWHwyQTUfH957FIJqICuGcHoAD+AWSTvbYbeHCZAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABw0lEQVQ4jX2TMUhbURSGvxtChbYO7bUKD2LkyV0aJUq24FhwUAeDuImLKOIiEoJDcNBMxVWCQQdxcSml0KVUaAsSERQRyVAilixCoCGgCG63g+9e3ns++8Pj3gPn/9855z9XHI5PakB8+PoZJR3cpOS60dKE4CaluG60qLduADgcnwTQcUAAAfLCbBaVSltyvXbB9l5Vu0kpACsCCGFuSjoAT8ghEQDhEyAeTlSpNAeVSwBOr47Y/LjIQeWS06vqE9FIAUP8X+yH7R+gp+cNzWb72TbyhbLlGMSUdOh/PwCgm822Btjeq1KvXfhJ5Atl+l1HADYf0MIMb2mtBEBiaJjV3FhkuV3ylXjxupubxh+9tFZia71IzJ+QGBoGYG40RWUmA8BGaR6Ahdksf1v32pBNrh3i1nox+DtPZL5YAfBmUsWQV3NjDGZHBEo65tObK1Paf376da5/LE9oJR2tpKO/7G7Ye25iGiWdgAt2fY0L+UKZudEUO99qj9Xsn5kUu5HP2uhtnUXv25fiXWcHZ402hhyAacOUmelzCZUd6Uzce1UsHp88Knv+3949BOIwDC/m7z2TTojvP3+LTDohouII6H8+ocaFOBG+FQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB4ElEQVQ4jX2TMWgTURjHfy9ksIMt4Q3ig3CY8BYjjeW2zopLC1ZKByF0kZaQRUrppFl6g5YMOpUcKgSXLlUEO4gVLUhEqZSmTUWSVOIQUYhDBen2XLznXZL6hwf3Hd/vf+/7v3dic2LKAOLS86doqUg5ksN219CjlCPFYbtLo9sBYHNiCsDEAQFE4PnZcXQma+FGfZdypWpSjhSANQGECJ60VAB9cI8JgAgZEO9t1Jksa/4eANvNt5RW8qz5e2w3q32mAw0C8H91WJERRkfT1GqtE8dYXFrtGyEWwAC1WovEyJAoV6o06rthiMWlVdIpZQMPltBSkT5/gdbBft/RnbTjcH8MoHWwbwpFj0LR486TDW5cyeDnXACWvTkAEiND4uyZYZRzzvZbg0DJi2MAPHhR58OPY/ycy+1bPgAzV8fMt+9HptP+YgpFz/YGs5jwKi1MGy2VWd/aMa9vThotlXn2cNloqcy9+4/M+taO0VKZa5MzkUAsWFqYtsDd65etcfAugLVU/64xYEOcnx0Pbp2Vn3OZe/wxEmaj24lkIABKK3nKlSrDp0/ZGsDb+CRcJyHCMED8719F/t17AHv+R7+OI/XXn7951WjarwVcLLx1N5sUL998Fm42KQbVA2T+ABgA3lJVd/AoAAAAAElFTkSuQmCC"]},"skull":{"label":"骷髅头","size":44,"frames":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABoUlEQVQ4jW2Tv0sjQRTHPxMECwtDNlyx1UHYNLIKG9vkDjFWsYh/heBfYGNh418gpLO86u6KuypZjjO27gouNhvSppCsRDCF1Vi4b5jd5FvNDO/7473hqbDX13xCHf79jcBzXHOeZDNshL0+gAaoCNku8ByXetAB0NvNXTzHLQjanIocxF3I83is24Mhr+mjBnQ96BgRK6lacc6h24MhAN1mjVH6wt3pEfWgo+bxuNBSxSZLbHnrNmumsD0YMo/HhSSmD89x2fl2yNNtWHC2MUpfALg7PQJQkmJDCp5uQ335794UXhzsl4eGiNvYKD90mzUuDvYJzq7Y8lvmfZlE4l6AmcHXvZYS1zIZYMtvEZxdrQiYX8gHo0VApykAD6Mb2oMhbz9/8DC6MbxJNsNz3JUWlIhYxay7rySQFNWGz2Ka6HVtLJOI+Pq8kKBiF0yyGYtpQrXhq/j6nGUSAZ9fJ+Rqwy+YqnwxKC+SJAH40vqunqP/utrw1WKaMMlmhL0+UZah8m1U60TWQcg5tAxRbx6fKCyB8grb2Dw+4f3PLw3wAbGKrpBuh0nnAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABiElEQVQ4jY2TMUvDUBSFvycFB4eGpjhkEkqypULatUVK61SH+isUf4GLg4u/oNCto5N0cWpFxA4imIrNVik4OYhKBZ2fQ/PiezGCZ8pLzjm55953xUW7I1lCNM8HuLZDMajzOrmWea8sPmZTAB7fnlG4aHcAJMCKEqPhdXIta70hH7OpBGTeK+PaDq7t6DShDATA/s1tmsDx5R26UTGo49oOzfNBYiIAo+xiUBeqgpZXAGA0ewdgvLcNIPQ4KkJSdloMGM8qjkJOL7nlFaA3BOCoUSWNWm/IeG9b6j3LpUktr8BRo0pwcMKaX0nef0WhimAg6cHGZoWnh1ACv8S6yaR7aPQhB/GMH0zy59kpAPejPrXekM+zU+5HfYPj2s6vCIL4gqTJ6bMRQXe0Sj6LeSSzYqQjuLbzM0YVZTGPsEq+mHQP+YpCYDl/JbZKvvFT45BVCcB6ZUu8hFfSKvliMY+SvXBtBxEvhn49k49ZUGKlE/E2iiyTv6DEgFQ9kKs7u/8SA8RcCfANoSqwSnxH9toAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjUlEQVQ4jXWTsUtCURTGf1caggIlJcihRZ5LPAdttSKqycX/QvAvaGlo6S8I3BqdJJAmfUgpLpEv6G09XBreEBoGOt+GvJd7H88PLtxzON+533fuvcKr1SUgLp4eAXCyeRTCecQmeLU6gEwBQiWdbJ5c+QRAposlnGxerw0QwozWhbLa6jFqXOl8ulgSv58fiaq24rIVqq2e3o8aVxIgVz4R+EOriVCyZ/5Q7h46Yjt3wMwfymqrx2VxD4D+549qBCDMBilAE5ZfoYyTAWuvZmNZ0EWG7Jvz40Rbazt6dkINDuB28KbJ5eYdO25Fk1fBBP/+WvOUjZRKmCfHyQA7boVy887KOdk8KdXp6PRCmLKXnTbLTltf57LTNhXYMwjnEbx4SokEeO8/WIXxWHuJS8oUXBbTQCbZMOYgwnn0b8EsCOcRi2lApuAK//6aVTAB/u9fkTMF1zrUCpKUAOxXzsT35FlmCq5YTAP7Ja5/Feo3mk2SoMiKh1ery3F3wGu0SiQk4TVaMe4O8Gp1+QfZELG6oj95OgAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABgklEQVQ4jZWTPWvCUBSGnysu4qCodHAqiG6xoK6RItXJxT8hgvgDXLr2FxSydexUunSKHYpuQlJoNsU1gxhQaObbxRvz1ULPcnPPPee9z3vJEe/DkQTE3dsr/4n34QhAZgERP6yXq8H31nP/0hGpzZVWl4O9lIVGU5w2X38KZdKSB3spdcPktPmSgCw0mtTL1QiZimwaNkC/UQLDBGA1GUiASqsrsJcRmkwYG5Dn9SIC6IaJbpgc7KX81YLCVmtcRIWyk7AQx77vdRJ+dcNUdoLHz8aL+o0S970OrekDea0d5H3HYjUZJEQDC9c3baFujTcD5LU2relDJFcvVy8oZ19SCcjNBoDPxRO6YfL98szn4kmVi63nUi9XExaEEgkVk7YPN0SQijWN486RaTZ8x8J+nEcIIn/i1nM57hyKNU3Yj3N8xwJgNRkEzcWaFrlUnKeK8DSGSQCu2rdib33IYk0Tx53D1nPVNJIBZG48Y+36CZKzRbG3PgCC5rXrkxvPAOQPaWuqrRZfi/IAAAAASUVORK5CYII="]},"vampire":{"label":"吸血鬼","size":48,"frames":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3UlEQVQ4jX2ST0sbURTFfzdGUgMVzKClY/6AMUowtBBaQ4ToRrrpUJhVF+2nELrqtouCkK2gfgG7cZNuZDbWRcHQ0oK1xBTBJM5GprRQxCD2uQhvOmGGXrhwue+de88574lj2YpByGpjF4CCYfK/2KhWABRATIP1YcEw6asbfSGUfXVDo9vzMTFdrDZ2fXBCRpSnrojKhIyo971zvU/8zQDTqSmSEleeugrRLi/X+PzhAEPucHndl+Rogrbn+hJwLJu58btocHm5Rq6YJ1fM8+zlC7wLl1wxT9tzSY4mtG+DAalUinrrmNelB0qD09ksANubWz6L7c0tCobJ5XXfZy56gHb13dIKb+N/SWez9DodgKH67KAJIG3PBSAekCkPxyd4c9Li3PulqOGz0EMAzmiG/AEGz2dVKxQMUwXz07cvofrR7Lz/V4beH1Cv1p5zeHTKYmkmctHh0Sn7e/9kxKIuBMHr9R2sbIf1+k7kwBCDaIHR2LbnDpmoB6qVJ4+Hmvt7TXRP09dnMceycSwbgEx6EsCXsFiaGaqDsVGt4Fg2MU37aXqabu8iZKLWHvSgbKR0qbSJCmCpuiAfm99lNjMlP3//kdZJV+bnMgLI5L0JOf76Q3J5U+6PjfmYWx14xQOMS8yHAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5UlEQVQ4jX2TT2saURTFf2+0taSo1SEJaDRgq9IgFAzatKBuQhbtLOqm7VfoNtBPIbgtJNkWaqBkY7sIbkxI/0TaUsgmCoGqFVIZJAQkEuzrorzpWIccuHDh3XPPObz3RM0oSv5CrFZ3AIjrIa7Cqwf3ASSApsjqMK6HGMmxGpiqkRxT7XQtjqaa1eqORfYIlzTlBU7lES75rvtT6QlLGSAcnGNGuKUpL6Zsp/M5vu7to4sbDC9HYuaah5bZw20fGvMbRU7nc5j9HgD3llf4/uUTi3dv8+2gQVwPSXsEAGpGkTs+r0VeiEYB2NrYtAS2NjaJ6yGGlyPLuQAIBoOs6LOsJ5fk0w91a0G33QaY6H/sNwBEy+xNLlDXsv2wwIuPn1nMZSwXdhy8fuu84Doay5EwzW5f2glv9t7zPP9oovcHvOJscE7L7E3ePyBfrj/j8OiEbCo2pQ5weHRCffdfDM1pwE4ulSsY0TalcsVx4ZQDxylniKl3MD8XEKe/BlYMhfpug8JaxurtwlrNKFIzigD8T86mYlYceyx/wMvjhTA1o4imbKf14IQ/RVDZS+UK2VSMwlqGs8G5TPh8AFKo71ztdMUgcgvN7SKZiADQPx1w3Oxw3OyQTESYnQ8AcNMc8sSvS4A/YzjRfSBOR+EAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABz0lEQVQ4jXWSz0tUURTHP3d8NSJM4ntM0fxwQBuHSghGNEeYmU20qNnMpvoX2onQXxGEu0DdBhVEm2ghsxnFXvpQCQTJASGTgRheIoU0yHRb2L2+23t9N/dwz/l+7/ece0SjVpeAuPPuLQB5J0VX9oiLPkkEurIn4qKP56XbANIChEoGyb78FcXHEf0ywBEimEzblxkQViS5WCmztbKKI/o5Oe2KgQtxWn4bK1jU4zeKXKyU8TttAG5NTPNp8yO566Nsr3nknZR2EVPkRq3OtUsJTc4MDwOwtLCoH1haWCTvpDg57WrnAsC2baadJHOFG/LBh6YWODw4ADDiL6segGj5bVMAkACvZ6o8dtfJlSe1iyDWXryJFrhIjIlsmr3DjvF9L1fe86hyz4gHhxLi+OgHLb9tfiEgn8w9ZGNnn6nxkdDrABs7+zSXz9uIRRUEyU+fvTLOfxFyEFXUnC9RnXVD3NAe/BWU1buTxmV11kXdKfsqZ7SQzSQBdAtT4yNGrDA4lNCxpewXxrJ83vuqhxgFJdJc9s43sVGrcz+TDpFV8f+GWHRsGrU6FmeDEzOlm8L1dklesQH4fvyTzrcj5YzCWBbX2wUgN5ri6tk2yz+wvLXFlumjPQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5klEQVQ4jXWRz2vScRjHX48zlIEb+iUDNxXcVCphsNC2gXoJD+XFS+tf6CrsrxC8BtuuQQbRJToML24sK6kIgqFClIZQw0wWKxn26VDfT99vuuf08Hme96/nI9V8QQFy48ljAKJGgJEa45IZxZQaqbG4ZIZ769cBlBMQc2gF99XPaXgMcSsLRsQ6XPD5mRXnVPBqJs3r/QMMcXN6NpLZCy7a/R5O69KYX5jg1Uya/nEPgJVra7x99Zzw5SXeHDaIGgHtwmGCq/kCy3MeDV4MhQDY3d7RArvbO0SNAKdnI+1cAHw+H2vGRYrxK+r2s5om+NTpANj6jwcNAGn3e3YCQAE83Mhyt/6CcDqpXVjr8P6jcwlYmfPidLv4cPxNf+GD/afcydz8v7cTwJ8vjMeCNFtdlc0lSSUiE+oApXKFea9HhoMT2v3evyMCNFtdtVXctIFL5Qr5UIdSuQJANpdkODjRDm0OAJXNJantNaaqmwR/59Lu9yYJzCVr1fYa+s1CLhMRLvm9AugIqUTE1ltKC9sIPn8ZqK3iJi/fvT83AsC816N7RzVfoJovTCyZiubxSuUKqUREH/HW4gLVfAGHmRtgY/2q1BtHshz0y9fhd2m2uhKPBQWQeCwo9caRjH+MJLwUMCOo39Gnu1D20+E7AAAAAElFTkSuQmCC"]}}
    var STYLE_NAMES = Object.keys(STYLES);

    var KB_LAYOUT = [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
      ['Shift', 'Space', '拼', 'Backspace', 'Enter', 'Close', '', '', '', '']
    ];

    var KB_SHIFT_MAP = {
      '1': '!', '2': '@', '3': '#', '4': '$', '5': '%',
      '6': '^', '7': '&', '8': '*', '9': '(', '0': ')',
      ';': ':', ',': '<', '.': '>', '/': '?'
    };

    // Offline pinyin dictionary: toneless ascii syllable -> Han candidates, most common first.
    // Generated from public datasets; see dict-pinyin.json and the header note in it.
    var PINYIN = /*PINYIN_START*/{"a":["啊","阿","吖","锕","呵","嗄"],"ai":["爱","艾","哎","唉","哀","挨","埃","矮","碍","暧","癌","蔼"],"an":["按","安","暗","案","岸","俺","黯","庵","鞍","谙","氨","胺"],"ang":["昂","肮","盎"],"ao":["傲","奥","熬","敖","澳","凹","懊","嗷","拗","袄","鳌","翱"],"ba":["把","吧","八","爸","巴","罢","拔","霸","疤","跋","扒","叭"],"bai":["白","百","败","摆","拜","柏","掰","伯","佰","稗","捭","擘"],"ban":["半","办","般","板","班","伴","版","搬","扮","斑","扳","瓣"],"bang":["帮","膀","邦","棒","绑","榜","傍","磅","梆","镑","谤","蚌"],"bao":["保","报","包","宝","抱","暴","爆","薄","堡","饱","豹","胞"],"bei":["被","备","北","背","呗","杯","辈","悲","贝","倍","卑","惫"],"ben":["本","奔","笨","贲","苯","锛","畚","坌"],"beng":["崩","蹦","绷","迸","甭","嘣","泵","甏"],"bi":["比","必","毕","笔","避","闭","鼻","逼","臂","壁","彼","碧"],"bian":["边","便","变","遍","编","辩","鞭","辨","扁","辫","贬","蝙"],"biao":["表","标","镖","彪","飙","婊","骠","镳","膘","裱","杓","飑"],"bie":["别","憋","瘪","鳖","蹩"],"bin":["宾","彬","斌","滨","鬓","缤","镔","濒","槟","殡","膑","摈"],"bing":["并","兵","冰","病","柄","饼","禀","秉","丙","炳","槟","摒"],"bo":["波","伯","博","薄","脖","拨","播","勃","玻","膊","柏","搏"],"bu":["不","部","步","布","补","怖","捕","卜","簿","埔","哺","埠"],"ca":["擦","嚓"],"cai":["才","菜","彩","采","财","材","猜","蔡","裁","踩","睬"],"can":["参","残","惨","餐","灿","惭","蚕","璨","粲","骖","黪","掺"],"cang":["藏","苍","仓","舱","沧","伧"],"cao":["草","操","艹","曹","嘈","糙","槽","漕","屮","艚","螬"],"ce":["测","侧","册","策","厕","恻"],"cen":["岑","涔"],"ceng":["曾","层","蹭","噌"],"cha":["差","查","察","茶","插","诧","叉","岔","嚓","茬","衩","碴"],"chai":["拆","柴","钗","差","豺","侪","虿","瘥"],"chan":["产","颤","缠","禅","蝉","搀","铲","婵","掺","阐","忏","馋"],"chang":["长","常","场","唱","厂","尝","昌","畅","肠","偿","敞","怅"],"chao":["超","朝","潮","吵","嘲","抄","炒","巢","钞","晁","焯","耖"],"che":["车","彻","扯","撤","澈","掣","砗","坼"],"chen":["沉","陈","臣","晨","尘","趁","辰","衬","嗔","琛","称","宸"],"cheng":["成","城","程","称","承","诚","盛","乘","撑","呈","惩","丞"],"chi":["吃","持","迟","赤","痴","池","尺","齿","斥","驰","耻","翅"],"chong":["冲","充","重","虫","崇","宠","忡","憧","铳","舂","艟","茺"],"chou":["抽","仇","臭","丑","愁","筹","瞅","酬","绸","畴","踌","惆"],"chu":["出","处","楚","除","初","触","厨","础","储","畜","褚","搐"],"chuai":["揣","踹","搋","啜","嘬"],"chuan":["传","穿","船","川","喘","串","钏","椽","舛","遄","氚"],"chuang":["床","窗","创","疮","闯","怆","幢"],"chui":["吹","垂","锤","捶","炊","槌","陲","棰","椎"],"chun":["春","纯","唇","蠢","淳","醇","椿","鹑","莼","蝽"],"chuo":["戳","啜","龊","辍","绰","踔"],"ci":["此","次","刺","词","辞","慈","赐","磁","伺","瓷","茨","雌"],"cong":["从","匆","聪","丛","葱","琮","淙","囱","骢","苁","枞","璁"],"cou":["凑","辏","腠"],"cu":["粗","促","醋","簇","猝","蹙","蹴","卒","徂","酢","殂","蔟"],"cuan":["窜","蹿","篡","撺","攒","汆","爨","镩"],"cui":["脆","催","翠","崔","摧","粹","悴","璀","啐","萃","瘁","淬"],"cun":["存","村","寸","忖","皴"],"cuo":["错","措","挫","搓","撮","磋","蹉","锉","厝","矬","嵯","痤"],"da":["大","打","答","达","搭","哒","瘩","嗒","沓","耷","鞑","靼"],"dai":["带","代","待","呆","袋","戴","黛","歹","贷","逮","怠","殆"],"dan":["但","单","淡","担","弹","丹","蛋","胆","旦","诞","耽","惮"],"dang":["当","党","荡","挡","档","铛","裆","宕","砀","凼","谠","菪"],"dao":["到","倒","道","刀","导","岛","盗","叨","蹈","祷","捣","稻"],"de":["的","地","得","德","锝"],"dei":["得"],"deng":["等","灯","登","瞪","邓","凳","蹬","噔","镫","磴","澄","戥"],"di":["地","第","弟","底","低","帝","敌","抵","递","迪","滴","的"],"dia":["嗲"],"dian":["点","电","店","殿","典","颠","垫","甸","惦","奠","掂","癫"],"diao":["掉","调","雕","吊","钓","刁","叼","貂","凋","碉","鲷","铫"],"die":["爹","蝶","跌","叠","碟","迭","谍","喋","牒","堞","耋","鲽"],"ding":["定","顶","丁","盯","订","叮","鼎","钉","锭","町","仃","酊"],"diu":["丢","铥"],"dong":["动","东","洞","懂","冬","董","冻","栋","咚","峒","胴","侗"],"dou":["都","斗","抖","豆","逗","兜","陡","窦","痘","蚪","蔸","篼"],"du":["度","独","毒","读","杜","肚","赌","督","渡","嘟","堵","妒"],"duan":["断","段","短","端","锻","缎","煅","椴","簖"],"dui":["对","队","堆","兑","怼","碓"],"dun":["顿","盾","蹲","敦","沌","遁","吨","钝","墩","炖","盹","趸"],"duo":["多","躲","朵","夺","堕","哆","跺","踱","舵","咄","度","剁"],"e":["饿","呃","恶","额","俄","愕","鹅","噩","娥","厄","峨","鄂"],"ei":["诶"],"en":["嗯","恩","摁","蒽"],"eng":["嗯"],"er":["而","儿","二","尔","耳","饵","迩","贰","洱","珥","铒","鸸"],"fa":["发","法","罚","乏","伐","阀","筏","砝","珐","垡"],"fan":["翻","反","饭","烦","凡","犯","范","番","繁","返","泛","帆"],"fang":["放","房","防","方","仿","芳","访","妨","坊","纺","肪","舫"],"fei":["飞","非","费","菲","废","妃","肥","啡","匪","沸","肺","绯"],"fen":["分","份","纷","奋","愤","粉","氛","吩","芬","焚","坟","忿"],"feng":["风","封","凤","峰","疯","锋","枫","丰","奉","冯","缝","逢"],"fo":["佛"],"fou":["否","缶"],"fu":["服","夫","父","复","福","府","副","负","付","富","妇","附"],"ga":["尬","嘎","伽","噶","旮","咖","尕","尜","轧","钆","呷"],"gai":["该","改","盖","概","丐","钙","溉","赅","垓","陔","戤"],"gan":["感","干","敢","赶","甘","尴","杆","肝","竿","橄","赣","秆"],"gang":["刚","港","钢","岗","冈","缸","纲","罡","杠","肛","筻","戆"],"gao":["高","告","搞","糕","稿","膏","羔","皋","镐","睾","篙","诰"],"ge":["个","哥","各","格","歌","革","隔","阁","葛","割","胳","戈"],"gei":["给"],"gen":["跟","根","亘","艮","哏","茛"],"geng":["更","耿","哽","耕","羹","庚","梗","赓","埂","鲠","粳","绠"],"gong":["公","工","功","攻","宫","共","供","恭","弓","贡","躬","拱"],"gou":["够","狗","构","勾","购","沟","钩","苟","垢","篝","佝","媾"],"gu":["古","故","顾","股","姑","骨","孤","谷","鼓","固","估","咕"],"gua":["挂","瓜","刮","寡","卦","呱","褂","剐","鸹","诖","栝","胍"],"guai":["怪","乖","拐","掴"],"guan":["关","管","官","观","馆","惯","冠","贯","灌","罐","棺","倌"],"guang":["光","广","逛","咣","犷","胱","桄"],"gui":["鬼","贵","规","归","跪","柜","诡","瑰","桂","龟","轨","闺"],"gun":["滚","棍","衮","鲧","磙","辊","绲"],"guo":["过","国","果","郭","锅","裹","蝈","聒","帼","掴","椁","虢"],"ha":["哈","蛤","铪"],"hai":["还","海","孩","害","骇","嗨","骸","亥","咳","氦","醢","胲"],"han":["汉","寒","喊","韩","汗","含","涵","翰","憾","罕","撼","悍"],"hang":["行","航","杭","夯","沆","颃","绗"],"hao":["好","号","毫","豪","浩","耗","昊","郝","嚎","皓","壕","嗥"],"he":["和","何","合","喝","呵","河","赫","核","贺","盒","荷","鹤"],"hei":["黑","嘿"],"hen":["很","狠","恨","痕"],"heng":["哼","横","衡","恒","亨","蘅","珩","桁"],"hong":["红","轰","洪","虹","宏","鸿","哄","弘","烘","泓","闳","讧"],"hou":["后","候","厚","吼","侯","猴","喉","逅","篌","瘊","鲎","堠"],"hu":["乎","呼","忽","护","胡","虎","湖","糊","户","互","狐","壶"],"hua":["话","花","化","华","划","画","滑","哗","猾","桦","骅","铧"],"huai":["坏","怀","淮","槐","徊","踝"],"huan":["换","缓","还","环","幻","唤","欢","患","焕","桓","鬟","宦"],"huang":["黄","皇","晃","慌","荒","恍","谎","惶","凰","煌","簧","徨"],"hui":["会","回","挥","灰","慧","辉","恢","毁","悔","惠","汇","绘"],"hun":["混","婚","魂","昏","浑","荤","馄","诨","珲","阍","溷"],"huo":["或","活","火","伙","获","惑","货","祸","霍","豁","和","夥"],"ji":["级","集","几","及","机","记","季","击","急","鸡","挤","系"],"jia":["家","加","价","假","架","甲","佳","夹","贾","嘉","嫁","驾"],"jian":["见","间","剑","件","建","键","渐","简","坚","肩","箭","舰"],"jiang":["将","江","讲","降","蒋","奖","僵","姜","疆","匠","浆","酱"],"jiao":["叫","教","交","脚","角","较","娇","焦","骄","轿","搅","狡"],"jie":["接","解","姐","结","界","节","杰","街","借","介","阶","洁"],"jin":["进","今","金","紧","近","尽","仅","禁","劲","锦","巾","筋"],"jing":["经","惊","竟","静","精","睛","警","京","境","景","敬","镜"],"jiong":["炯","窘","迥","炅","扃"],"jiu":["就","九","酒","久","旧","救","究","舅","纠","疚","揪","咎"],"ju":["巨","举","居","局","具","据","句","聚","剧","距","惧","拒"],"juan":["卷","娟","倦","捐","眷","绢","鹃","涓","圈","隽","镌","蠲"],"jue":["觉","绝","决","爵","诀","嚼","掘","角","厥","倔","撅","珏"],"jun":["均","君","军","俊","郡","峻","钧","骏","菌","竣","浚","麇"],"ka":["卡","咖","喀","咔","咯","胩"],"kai":["开","凯","慨","铠","楷","恺","揩","锴","忾","剀","垲","锎"],"kan":["看","堪","砍","刊","侃","坎","勘","槛","阚","瞰","龛","戡"],"kang":["抗","康","扛","亢","炕","慷","糠","伉","钪","闶"],"kao":["靠","考","烤","铐","拷","犒","尻","栲"],"ke":["可","刻","克","客","科","课","颗","咳","渴","柯","棵","壳"],"ken":["肯","恳","啃","垦","裉"],"keng":["坑","吭","铿"],"kong":["空","恐","控","孔","崆","箜","倥"],"kou":["口","扣","寇","叩","抠","蔻","芤","筘","眍"],"ku":["苦","哭","酷","库","裤","枯","骷","窟","绔","喾","刳"],"kua":["夸","跨","垮","胯","挎","侉"],"kuai":["快","块","筷","会","蒯","哙","侩","脍","狯","郐"],"kuan":["宽","款","髋"],"kuang":["况","狂","矿","旷","眶","框","匡","筐","哐","邝","诳","诓"],"kui":["亏","愧","溃","盔","魁","窥","奎","葵","傀","睽","馈","逵"],"kun":["困","昆","坤","捆","鲲","琨","锟","髡","阃","悃","醌"],"kuo":["括","扩","阔","廓","蛞"],"la":["啦","拉","辣","垃","腊","喇","蜡","落","剌","邋","旯","瘌"],"lai":["来","莱","赖","籁","睐","癞","濑","徕","崃","涞","赉","铼"],"lan":["蓝","烂","懒","拦","篮","岚","兰","栏","览","澜","揽","滥"],"lang":["狼","浪","郎","朗","廊","螂","琅","啷","榔","锒","阆","蒗"],"lao":["老","劳","牢","姥","捞","唠","佬","烙","落","酪","涝","崂"],"le":["了","乐","勒","叻","泐","鳓","仂"],"lei":["雷","类","泪","累","勒","嘞","蕾","磊","垒","擂","肋","儡"],"leng":["冷","愣","楞","棱","塄"],"li":["里","力","理","李","立","离","利","梨","丽","历","礼","厉"],"lia":["俩"],"lian":["连","脸","联","练","恋","怜","炼","莲","链","帘","廉","敛"],"liang":["两","量","亮","良","凉","梁","辆","粮","谅","踉","靓","晾"],"liao":["聊","料","疗","辽","廖","撩","寥","僚","缭","燎","撂","獠"],"lie":["列","裂","猎","咧","烈","劣","冽","趔","洌","鬣","捩","埒"],"lin":["林","临","琳","淋","邻","麟","凛","拎","霖","鳞","吝","躏"],"ling":["令","灵","领","另","凌","玲","零","龄","铃","陵","岭","菱"],"liu":["流","刘","留","六","柳","溜","琉","榴","浏","瘤","硫","遛"],"lo":["咯"],"long":["龙","隆","笼","拢","胧","珑","咙","聋","垄","窿","陇","泷"],"lou":["楼","搂","漏","髅","露","陋","喽","娄","篓","镂","偻","蝼"],"lu":["路","露","陆","鲁","录","撸","卢","鹿","炉","碌","芦","禄"],"luan":["乱","卵","鸾","峦","挛","銮","孪","栾","滦","脔","娈"],"lun":["论","伦","轮","仑","沦","抡","纶","囵"],"luo":["落","罗","洛","络","裸","逻","骆","萝","螺","锣","珞","骡"],"lv":["绿","律","率","旅","吕","缕","侣","驴","屡","履","捋","滤"],"lve":["略","掠","锊"],"ma":["吗","马","妈","麻","嘛","骂","码","玛","抹","蚂","蟆","犸"],"mai":["买","卖","埋","脉","麦","迈","霾","劢","唛","荬"],"man":["满","慢","漫","曼","蛮","瞒","蔓","馒","幔","谩","鳗","缦"],"mang":["忙","芒","茫","氓","莽","盲","蟒","邙","漭","硭"],"mao":["毛","冒","貌","猫","矛","帽","贸","茂","茅","髦","卯","锚"],"me":["么"],"mei":["没","美","每","妹","眉","梅","媚","魅","玫","枚","媒","霉"],"men":["们","门","闷","懑","扪","焖","钔"],"meng":["梦","猛","蒙","孟","盟","朦","萌","懵","檬","蜢","勐","虻"],"mi":["密","米","迷","秘","弥","蜜","眯","咪","谜","觅","靡","泌"],"mian":["面","免","勉","绵","眠","棉","缅","冕","腼","娩","湎","沔"],"miao":["妙","秒","描","苗","庙","渺","瞄","淼","喵","缈","藐","邈"],"mie":["灭","蔑","乜","咩","篾"],"min":["民","敏","抿","悯","闵","珉","泯","闽","皿","岷","缗","愍"],"ming":["明","名","命","鸣","冥","铭","茗","瞑","溟","酩","暝","螟"],"miu":["谬","缪"],"mo":["魔","莫","默","模","摸","摩","磨","末","漠","抹","墨","没"],"mou":["某","谋","眸","缪","牟","哞","鍪","侔","蛑"],"mu":["目","母","木","模","慕","幕","姆","穆","牧","墓","沐","暮"],"n":["嗯"],"na":["那","哪","拿","娜","纳","呐","捺","衲","钠","肭","镎"],"nai":["奶","奈","耐","乃","鼐","氖","萘","艿","柰","佴"],"nan":["难","男","南","喃","楠","腩","囡","赧","蝻"],"nang":["囊","囔","馕","攮","曩"],"nao":["脑","闹","恼","挠","瑙","孬","呶","淖","猱","铙","垴","蛲"],"ne":["呢","讷","呐"],"nei":["内","馁"],"nen":["嫩","恁"],"neng":["能"],"ng":["嗯"],"ni":["你","尼","泥","逆","拟","腻","倪","霓","匿","妮","溺","昵"],"nian":["年","念","黏","拈","捻","碾","撵","蔫","廿","辇","鲇","鲶"],"niang":["娘","酿"],"niao":["鸟","尿","袅","茑","脲"],"nie":["捏","聂","孽","涅","蹑","嗫","啮","臬","镊","镍","蘖","颞"],"nin":["您"],"ning":["宁","凝","狞","拧","柠","咛","泞","佞","甯","聍"],"niu":["牛","扭","纽","妞","钮","拗","忸","狃"],"nong":["弄","农","浓","哝","侬","脓"],"nou":["耨"],"nu":["怒","努","奴","弩","驽","孥","胬"],"nuan":["暖"],"nuo":["诺","挪","懦","喏","糯","娜","傩","搦","锘"],"nv":["女","钕","恧","衄"],"nve":["虐","疟"],"o":["哦","噢","喔"],"ou":["欧","偶","呕","殴","鸥","藕","区","怄","瓯","讴","沤","耦"],"pa":["怕","爬","帕","啪","趴","扒","琶","耙","葩","杷","筢"],"pai":["派","排","拍","牌","徘","湃","俳","哌","蒎"],"pan":["盘","判","叛","盼","潘","攀","畔","蹒","磐","蟠","爿","泮"],"pang":["旁","胖","庞","彷","乓","螃","滂","逄","磅","耪"],"pao":["跑","炮","泡","抛","袍","咆","刨","庖","狍","疱","匏","脬"],"pei":["陪","配","佩","培","赔","裴","沛","呸","胚","帔","辔","霈"],"pen":["喷","盆","湓"],"peng":["碰","朋","鹏","捧","砰","蓬","篷","彭","棚","膨","澎","怦"],"pi":["皮","批","屁","疲","匹","劈","披","脾","啤","辟","僻","霹"],"pian":["片","偏","骗","篇","翩","便","骈","蹁","谝","胼","犏"],"piao":["飘","漂","票","瞟","嫖","瓢","缥","剽","骠","朴","殍","嘌"],"pie":["撇","瞥","苤","氕"],"pin":["品","拼","贫","频","聘","嫔","颦","姘","牝"],"ping":["平","凭","评","瓶","屏","萍","苹","坪","乒","娉","枰","鲆"],"po":["破","婆","迫","颇","坡","魄","泼","泊","珀","叵","鄱","粕"],"pou":["剖","裒","掊"],"pu":["普","扑","铺","朴","仆","谱","葡","菩","噗","浦","瀑","蒲"],"qi":["起","气","其","奇","期","七","器","骑","齐","弃","妻","企"],"qia":["卡","恰","掐","洽","髂"],"qian":["前","钱","千","潜","牵","倩","浅","签","歉","欠","乾","谦"],"qiang":["强","枪","墙","抢","腔","呛","跄","蔷","锵","羌","戕","戗"],"qiao":["巧","悄","瞧","敲","桥","乔","俏","翘","窍","鞘","憔","峭"],"qie":["且","切","窃","怯","妾","茄","惬","趄","锲","伽","挈","箧"],"qin":["亲","秦","琴","侵","勤","寝","擒","钦","芹","沁","禽","覃"],"qing":["请","轻","清","青","情","庆","晴","倾","卿","擎","顷","蜻"],"qiong":["穷","琼","穹","茕","邛","筇","蛩","銎"],"qiu":["求","球","秋","丘","邱","囚","裘","酋","仇","虬","糗","鳅"],"qu":["去","取","区","趣","曲","屈","躯","驱","娶","趋","渠","觑"],"quan":["全","权","拳","圈","劝","泉","犬","券","蜷","痊","诠","荃"],"que":["却","确","缺","雀","瘸","鹊","阙","阕","榷","炔","悫"],"qun":["群","裙","逡","麇"],"ran":["然","染","燃","冉","髯","苒","蚺"],"rang":["让","嚷","壤","攘","瓤","禳","穰"],"rao":["绕","扰","饶","娆","桡","荛"],"re":["热","惹"],"ren":["人","任","认","忍","仁","刃","壬","妊","仞"],"reng":["仍","扔"],"ri":["日"],"rong":["容","荣","冗","戎","溶","熔","绒","茸","融","嵘","榕"],"rou":["肉","揉","柔"],"ru":["如","入","乳","儒","孺","汝","蠕","辱","嚅","洳"],"ruan":["软"],"rui":["锐","枘"],"run":["润"],"ruo":["若","弱","偌"],"sa":["萨","撒","洒","仨","卅","挲"],"sai":["赛","塞","腮","噻"],"san":["三","散","伞","叁","毵"],"sang":["丧","嗓","桑","搡"],"sao":["嫂","扫","搔","埽"],"se":["色","塞","涩","啬"],"sen":["森"],"seng":["僧"],"sha":["杀","沙","傻","刹","厦","啥","煞","砂","纱","唼","歃"],"shai":["晒","筛"],"shan":["山","善","闪","删","扇","擅","杉","汕","珊","衫","剡","埏"],"shang":["上","商","伤","尚","墒","晌","裳","赏","垧","殇"],"shao":["少","勺","哨","捎","梢","烧","稍","绍","劭"],"she":["社","设","射","奢","慑","折","摄","涉","舌","舍","蛇","佘"],"shen":["什","身","神","深","甚","审","申","伸","参","呻","娠","婶"],"sheng":["生","声","省","胜","升","圣","盛","剩","牲","绳","嵊"],"shi":["是","时","事","实","十","使","世","市","式","师","识","士"],"shou":["手","受","收","首","守","授","售","兽","寿","瘦"],"shu":["数","书","术","属","述","树","输","束","熟","叔","墅","孰"],"shua":["刷","耍","唰"],"shuai":["帅","摔","率","甩","衰","蟀"],"shuan":["拴","栓","涮"],"shuang":["双","爽","孀"],"shui":["水","谁","税","睡"],"shun":["顺","吮"],"shuo":["说","朔","烁","妁","搠","槊"],"si":["斯","四","司","思","死","私","丝","似","嗣","嘶","寺","巳"],"song":["送","松","宋","怂","耸","讼","诵","凇","崧","嵩","忪","悚"],"sou":["嗽","搜","擞","艘","叟","嗖","嗾"],"su":["苏","诉","速","素","俗","僳","塑","宿","肃","嗉","夙","愫"],"suan":["算","蒜","酸"],"sui":["随","虽","岁","碎","穗"],"sun":["损","孙","榫"],"suo":["所","索","唆","梭","琐","缩","锁","唢","嗍","嗦","娑","桫"],"ta":["他","她","它","塔","塌","挞","踏","蹋","榻"],"tai":["太","台","态","抬","汰","泰","胎"],"tan":["谈","探","坦","叹","坍","坛","弹","摊","檀","毯","滩","潭"],"tang":["唐","堂","倘","塘","搪","棠","汤","淌","烫","糖","膛","趟"],"tao":["讨","逃","套","掏","桃","涛","淘","滔","萄","啕","洮"],"te":["特","忑","忒","慝"],"teng":["疼","腾","藤"],"ti":["体","提","题","替","剃","剔","啼","嚏","屉","惕","梯","涕"],"tian":["天","田","填","恬","添","甜","舔","忝","掭","殄"],"tiao":["条","跳","挑","眺","调","佻","粜"],"tie":["铁","帖","贴"],"ting":["听","停","庭","亭","厅","廷","挺","汀","艇","婷","梃","蜓"],"tong":["同","通","统","痛","彤","捅","桐","桶","童","筒","铜","仝"],"tou":["头","投","透","偷"],"tu":["图","突","土","徒","途","兔","凸","吐","屠","涂","秃","堍"],"tuan":["团","湍","彖","抟"],"tui":["推","退","腿"],"tun":["吞","屯","暾"],"tuo":["托","脱","唾","妥","拓","拖","椭","佗","坨","庹","柝","橐"],"wa":["哇","娃","挖","洼","瓦","蛙","袜","佤","娲"],"wai":["外","歪","崴"],"wan":["完","万","晚","湾","玩","丸","婉","宛","弯","惋","挽","碗"],"wang":["王","望","往","网","亡","忘","妄","旺","枉","汪","惘"],"wei":["为","位","未","委","维","围","威","微","卫","危","味","谓"],"wen":["问","文","闻","温","稳","吻","纹","蚊","刎","汶"],"weng":["嗡","翁"],"wo":["我","握","卧","挝","斡","沃","涡","窝","蜗","倭","幄","渥"],"wu":["无","物","务","五","武","误","屋","午","吴","舞","乌","伍"],"xi":["西","系","息","希","细","喜","习","席","吸","戏","析","嘻"],"xia":["下","夏","侠","匣","吓","峡","暇","狭","瞎","虾","柙"],"xian":["现","先","线","显","限","险","县","鲜","仙","咸","嫌","宪"],"xiang":["想","向","相","像","象","响","项","香","乡","享","厢","巷"],"xiao":["小","笑","消","效","校","销","削","哮","啸","嚣","孝","宵"],"xie":["些","写","协","谢","卸","屑","懈","挟","携","斜","械","楔"],"xin":["心","新","信","寻","忻","欣","芯","薪","衅","辛","锌","囟"],"xing":["行","性","形","兴","星","型","幸","醒","刑","姓","惺","杏"],"xiong":["雄","兄","凶","匈","汹","熊","胸"],"xiu":["修","休","秀","嗅","宿","朽","绣","袖","锈","咻","岫","庥"],"xu":["许","需","须","续","序","虚","叙","吁","嘘","墟","婿","徐"],"xuan":["选","宣","喧","悬","旋","绚","儇","暄","楦","泫","渲","漩"],"xue":["学","血","雪","削"],"xun":["寻","训","迅","勋","巡","循","旬","殉","汛","熏","讯","询"],"ya":["亚","压","呀","牙","雅","丫","哑","崖","押","涯","芽","蚜"],"yan":["眼","言","研","验","严","演","烟","延","厌","咽","唁","堰"],"yang":["样","阳","养","央","洋","杨","扬","仰","佯","殃","氧","漾"],"yao":["要","药","摇","咬","妖","姚","尧","窑","耀","腰","舀","谣"],"ye":["也","业","夜","野","叶","爷","页","冶","咽","噎","掖","曳"],"yi":["一","以","意","已","义","议","易","医","依","益","疑","异"],"yin":["因","引","音","印","银","阴","隐","吟","姻","寅","尹","殷"],"ying":["应","英","影","营","迎","婴","映","樱","硬","莹","萤","蝇"],"yo":["哟","唷"],"yong":["用","永","拥","佣","勇","咏","庸","恿","泳","涌","俑","喁"],"you":["有","又","由","友","游","优","右","油","尤","佑","幼","幽"],"yu":["于","与","语","育","预","余","域","鱼","遇","予","雨","玉"],"yuan":["原","员","院","元","远","愿","源","园","圆","冤","垣","怨"],"yue":["月","约","越","乐","岳","悦","曰","跃","刖","樾"],"yun":["运","云","允","匀","孕","晕","蕴","恽","愠","昀","殒","氲"],"za":["杂","匝","咋","砸","咂","拶"],"zai":["在","再","载","仔","哉","宰","栽","灾","崽"],"zan":["咱","攒","暂","赞","昝"],"zang":["脏","葬","奘"],"zao":["造","早","遭","凿","噪","枣","澡","灶","燥","皂","糟","躁"],"ze":["则","责","泽","择","仄","啧","帻","昃"],"zei":["贼"],"zen":["怎"],"zeng":["增","憎"],"zha":["炸","乍","喳","扎","札","柞","栅","榨","渣","眨","吒","咤"],"zhai":["债","宅","寨","摘","斋","窄"],"zhan":["战","展","站","占","崭","斩","栈","毡","沾","盏","瞻","粘"],"zhang":["长","张","章","掌","丈","仗","帐","彰","杖","樟","涨","胀"],"zhao":["照","找","招","兆","召","昭","朝","沼","爪","着","罩","著"],"zhe":["这","着","者","著","哲","折","浙","蔗","遮","柘"],"zhei":["这"],"zhen":["真","阵","镇","震","针","振","侦","帧","斟","枕","珍","诊"],"zheng":["正","政","争","证","整","征","郑","怔","拯","挣","症","睁"],"zhi":["之","只","知","制","直","指","至","治","质","支","致","志"],"zhong":["中","种","重","众","终","钟","仲","忠","肿","冢"],"zhou":["周","洲","州","咒","宙","帚","昼","皱","粥","舟","轴","妯"],"zhu":["主","住","注","助","逐","诸","朱","筑","嘱","拄","柱","株"],"zhua":["抓","爪"],"zhuai":["拽"],"zhuan":["转","专","传","撰","砖","赚","啭"],"zhuang":["装","状","庄","壮","妆","撞","桩"],"zhui":["追","坠","缀","惴"],"zhun":["准"],"zhuo":["卓","啄","拙","捉","桌","浊","着","茁","著","倬","擢","斫"],"zi":["子","自","资","字","仔","兹","咨","姿","孜","淄","渍","滋"],"zong":["总","宗","棕","纵","综","踪","偬"],"zou":["走","奏","揍"],"zu":["组","足","族","祖","卒","租","俎"],"zuan":["钻","攥"],"zui":["最","罪","嘴","醉"],"zun":["尊","遵","撙","樽"],"zuo":["作","做","坐","左","座","佐","昨","琢","唑","怍"]}/*PINYIN_END*/;

    // Every prefix of every syllable, so typing can reject impossible keystrokes early.
    var PY_PREFIX = (function () {
      var table = {};
      for (var key in PINYIN) {
        if (!Object.prototype.hasOwnProperty.call(PINYIN, key)) continue;
        for (var len = 1; len <= key.length; len++) table[key.slice(0, len)] = true;
      }
      return table;
    })();

    var CSS = `
      #dsh-gamepad-cursor-root {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 2147483647;
      }
      #dsh-gamepad-cursor-root.dgc-cursor-hidden .dgc-cursor {
        display: none;
      }
      #dsh-gamepad-cursor-root .dgc-cursor {
        position: fixed;
        left: 0;
        top: 0;
        width: 28px;
        height: 28px;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 2147483647;
      }
      #dsh-gamepad-cursor-root .dgc-cursor.dgc-default {
        width: 26px;
        height: 26px;
        border: 2px solid rgba(255, 255, 255, 0.95);
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.12);
        box-shadow:
          0 0 0 1px rgba(0, 0, 0, 0.55),
          0 0 10px rgba(0, 0, 0, 0.45),
          inset 0 0 4px rgba(0, 0, 0, 0.25);
      }
      #dsh-gamepad-cursor-root .dgc-cursor.dgc-default::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #fff;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.95);
      }
      #dsh-gamepad-cursor-root .dgc-cursor.dgc-sprite {
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        image-rendering: pixelated;
        filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.55));
      }
      #dsh-gamepad-cursor-root .dgc-toast {
        position: fixed;
        left: 50%;
        bottom: 28px;
        transform: translateX(-50%);
        padding: 6px 14px;
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.88);
        border: 1px solid rgba(148, 163, 184, 0.35);
        color: #e2e8f0;
        font: 600 13px/1.4 "Segoe UI", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.15s;
        z-index: 2147483647;
        white-space: nowrap;
      }
      #dsh-gamepad-cursor-root .dgc-toast.show {
        opacity: 1;
      }
      #dsh-gamepad-cursor-root .dgc-settings {
        position: fixed;
        left: 50%;
        bottom: 90px;
        transform: translateX(-50%);
        min-width: 240px;
        padding: 12px 18px 14px;
        border-radius: 14px;
        background: rgba(15, 23, 42, 0.92);
        border: 1px solid rgba(56, 189, 248, 0.5);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        color: #e2e8f0;
        font: 600 14px/1.5 "Segoe UI", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
        text-align: center;
        pointer-events: none;
        z-index: 2147483647;
      }
      #dsh-gamepad-cursor-root .dgc-settings[hidden] {
        display: none;
      }
      #dsh-gamepad-cursor-root .dgc-settings-title {
        color: #7dd3fc;
        font-size: 13px;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
      }
      #dsh-gamepad-cursor-root .dgc-settings-value {
        font-size: 26px;
        font-weight: 800;
        color: #fff;
      }
      #dsh-gamepad-cursor-root .dgc-settings-bar {
        height: 6px;
        margin: 8px auto 6px;
        width: 100%;
        max-width: 200px;
        border-radius: 999px;
        background: rgba(148, 163, 184, 0.25);
        overflow: hidden;
      }
      #dsh-gamepad-cursor-root .dgc-settings-bar i {
        display: block;
        height: 100%;
        border-radius: 999px;
        background: linear-gradient(90deg, #38bdf8, #4ade80);
        transition: width 0.08s;
      }
      #dsh-gamepad-cursor-root .dgc-settings-hint {
        color: #94a3b8;
        font-size: 12px;
        font-weight: 400;
        margin-top: 6px;
      }
      #dsh-gamepad-cursor-root .dgc-setting-row {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 2px 10px;
        padding: 6px 10px;
        margin: 3px 0;
        border-radius: 10px;
        border: 1px solid transparent;
        text-align: left;
      }
      #dsh-gamepad-cursor-root .dgc-setting-row.active {
        background: rgba(56, 189, 248, 0.12);
        border-color: rgba(56, 189, 248, 0.55);
      }
      #dsh-gamepad-cursor-root .dgc-setting-name {
        color: #cbd5e1;
        font-size: 13px;
      }
      #dsh-gamepad-cursor-root .dgc-setting-row.active .dgc-setting-name {
        color: #7dd3fc;
      }
      #dsh-gamepad-cursor-root .dgc-setting-val {
        color: #fff;
        font-size: 14px;
        font-weight: 700;
      }
      #dsh-gamepad-cursor-root .dgc-setting-row .dgc-settings-bar {
        grid-column: 1 / -1;
        margin: 2px 0 0;
        max-width: none;
      }
      #dsh-gamepad-cursor-root .dgc-keyboard {
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 12px 12px;
        border-radius: 14px;
        background: rgba(15, 23, 42, 0.94);
        border: 1px solid rgba(148, 163, 184, 0.35);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        color: #e2e8f0;
        font: 600 13px/1.4 "Segoe UI", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
        text-align: center;
        pointer-events: none;
        user-select: none;
        z-index: 2147483647;
      }
      #dsh-gamepad-cursor-root .dgc-keyboard[hidden] {
        display: none;
      }
      #dsh-gamepad-cursor-root .dgc-kb-title {
        color: #7dd3fc;
        font-size: 12px;
        margin-bottom: 6px;
        letter-spacing: 0.5px;
      }
      #dsh-gamepad-cursor-root .dgc-kb-row {
        display: flex;
        justify-content: center;
        gap: 4px;
        margin: 3px 0;
      }
      #dsh-gamepad-cursor-root .dgc-kb-key {
        flex: 1;
        min-width: 40px;
        height: 34px;
        padding: 0 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 7px;
        background: rgba(30, 41, 59, 0.92);
        border: 1px solid rgba(148, 163, 184, 0.3);
        color: #e2e8f0;
        font-weight: 600;
      }
      #dsh-gamepad-cursor-root .dgc-kb-key.active {
        background: #38bdf8;
        border-color: #7dd3fc;
        color: #0f172a;
        box-shadow: 0 0 12px rgba(56, 189, 248, 0.65);
      }
      #dsh-gamepad-cursor-root .dgc-kb-key.blank {
        background: transparent;
        border-color: transparent;
        box-shadow: none;
        pointer-events: none;
      }
      #dsh-gamepad-cursor-root .dgc-kb-strip {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px;
        min-height: 32px;
        margin: 2px 0 8px;
        padding: 4px 10px;
        border-radius: 8px;
        background: rgba(15, 23, 42, 0.88);
        border: 1px solid rgba(56, 189, 248, 0.35);
        text-align: left;
      }
      #dsh-gamepad-cursor-root .dgc-kb-buf {
        min-width: 64px;
        color: #7dd3fc;
        font-weight: 700;
        letter-spacing: 1px;
      }
      #dsh-gamepad-cursor-root .dgc-kb-cand {
        padding: 2px 8px;
        border-radius: 6px;
        background: rgba(30, 41, 59, 0.92);
        border: 1px solid rgba(148, 163, 184, 0.28);
        color: #e2e8f0;
        font-size: 16px;
      }
      #dsh-gamepad-cursor-root .dgc-kb-cand.active {
        background: #38bdf8;
        border-color: #7dd3fc;
        color: #0f172a;
        box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
      }
      #dsh-gamepad-cursor-root .dgc-kb-hint {
        color: #94a3b8;
        font-size: 12px;
      }
      #dsh-gamepad-cursor-root .dgc-cursor.dgc-clickable {
        transform: translate(-50%, -50%) scale(1.2);
      }
      #dsh-gamepad-cursor-root .dgc-cursor.dgc-default.dgc-clickable {
        border-color: #4ade80;
        box-shadow:
          0 0 0 2px rgba(74, 222, 128, 0.8),
          0 0 16px rgba(74, 222, 128, 0.6),
          inset 0 0 6px rgba(0, 0, 0, 0.2);
      }
      #dsh-gamepad-cursor-root .dgc-cursor.dgc-default.dgc-clickable::after {
        background: #4ade80;
        box-shadow: 0 0 6px #4ade80;
      }
      #dsh-gamepad-cursor-root .dgc-cursor.dgc-sprite.dgc-clickable {
        filter:
          drop-shadow(0 0 4px rgba(74, 222, 128, 0.9))
          drop-shadow(0 2px 2px rgba(0, 0, 0, 0.55))
          brightness(1.15);
      }
      html.dgc-cursor-active,
      html.dgc-cursor-active * {
        cursor: none !important;
      }
    `;

    function apply(ctx) {
      ctx.effect(function () {
        var style = document.createElement('style');
        style.setAttribute('data-plugin', PLUGIN_ID);
        style.textContent = CSS;
        document.head.appendChild(style);

        var root = document.createElement('div');
        root.id = 'dsh-gamepad-cursor-root';
        root.setAttribute('data-plugin', PLUGIN_ID);
        root.innerHTML =
          '<div class="dgc-cursor dgc-default" id="dgc-cursor"></div>' +
          '<div class="dgc-toast" id="dgc-toast"></div>' +
          '<div class="dgc-settings" id="dgc-settings" hidden></div>' +
          '<div class="dgc-keyboard" id="dgc-keyboard" hidden></div>';
        document.body.appendChild(root);

        var cursor = root.querySelector('#dgc-cursor');
        var toast = root.querySelector('#dgc-toast');
        var settingsPanel = root.querySelector('#dgc-settings');
        var keyboardPanel = root.querySelector('#dgc-keyboard');
        var enabled = false;
        var pos = loadPos();
        var vel = { x: 0, y: 0 };
        var prevButtons = new Map();
        var styleIndex = loadStyleIndex();
        var sensitivity = loadSensitivity();
        var wheelSensitivity = loadWheelSensitivity();
        var snapStrength = loadSnapStrength();
        var hoverEl = null;
        var hoverClickable = false;
        var hoverUpdating = false;
        var frameIndex = 0;
        var frameTimer = 0;
        var lastTime = performance.now();
        var toastTimer = 0;
        var lastMoveX = pos.x;
        var lastMoveY = pos.y;
        var rafId = 0;
        var lastSaveTime = 0;
        var settingsOpen = false;
        var settingsIndex = 0;
        var sensRepeatTimer = 0;
        var hoverCheckTimer = 0;
        var scrollAccum = 0;
        var snapTimer = 0;
        var cursorCache = typeof WeakMap !== 'undefined' ? new WeakMap() : null;
        var kbOpen = false;
        var kbRow = 0;
        var kbCol = 0;
        var kbRepeatTimer = 0;
        var kbShift = false;
        var kbMode = 'en';
        var pyBuffer = '';
        var pyCands = [];
        var pyIndex = 0;

        // Start disabled so opening DSH leaves the native cursor untouched.
        root.classList.add('dgc-cursor-hidden');
        applyStyleVisual();
        updateCursorVisual();

        function loadPos() {
          try {
            var raw = localStorage.getItem(POS_KEY);
            if (raw) {
              var p = JSON.parse(raw);
              if (typeof p.x === 'number' && typeof p.y === 'number') {
                return { x: Math.max(0, Math.min(window.innerWidth, p.x)), y: Math.max(0, Math.min(window.innerHeight, p.y)) };
              }
            }
          } catch (e) {}
          return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        }

        function savePos() {
          try {
            localStorage.setItem(POS_KEY, JSON.stringify({ x: Math.round(pos.x), y: Math.round(pos.y) }));
          } catch (e) {}
        }

        function savePosThrottled() {
          var now = performance.now();
          if (now - lastSaveTime >= 500) {
            lastSaveTime = now;
            savePos();
          }
        }

        function loadStyleIndex() {
          try {
            var saved = localStorage.getItem(STYLE_KEY);
            if (saved !== null) {
              var i = parseInt(saved, 10);
              if (!isNaN(i) && i >= 0 && i < STYLE_NAMES.length) return i;
            }
          } catch (e) {}
          return 0;
        }

        function saveStyleIndex() {
          try {
            localStorage.setItem(STYLE_KEY, String(styleIndex));
          } catch (e) {}
        }

        function loadSensitivity() {
          try {
            var raw = parseFloat(localStorage.getItem(SENS_KEY));
            if (!isNaN(raw)) {
              return Math.min(SENS_MAX, Math.max(SENS_MIN, raw));
            }
          } catch (e) {}
          return 1;
        }

        function saveSensitivity() {
          try {
            localStorage.setItem(SENS_KEY, sensitivity.toFixed(1));
          } catch (e) {}
        }

        function loadWheelSensitivity() {
          try {
            var raw = parseFloat(localStorage.getItem(WHEEL_KEY));
            if (!isNaN(raw)) {
              return Math.min(WHEEL_MAX, Math.max(WHEEL_MIN, raw));
            }
          } catch (e) {}
          return 1;
        }

        function saveWheelSensitivity() {
          try {
            localStorage.setItem(WHEEL_KEY, wheelSensitivity.toFixed(1));
          } catch (e) {}
        }

        function loadSnapStrength() {
          try {
            var raw = parseFloat(localStorage.getItem(SNAP_KEY));
            if (!isNaN(raw)) {
              return Math.min(SNAP_MAX, Math.max(SNAP_MIN, raw));
            }
          } catch (e) {}
          return 0.35;
        }

        function saveSnapStrength() {
          try {
            localStorage.setItem(SNAP_KEY, snapStrength.toFixed(2));
          } catch (e) {}
        }

        function showToast(text) {
          toast.textContent = text;
          toast.classList.add('show');
          toastTimer = 1800;
        }

        function settingValue(index) {
          if (index === 0) return sensitivity;
          if (index === 1) return wheelSensitivity;
          if (index === 2) return snapStrength;
          return styleIndex;
        }

        function settingMin(index) {
          if (index === 0) return SENS_MIN;
          if (index === 1) return WHEEL_MIN;
          if (index === 2) return SNAP_MIN;
          return 0;
        }

        function settingMax(index) {
          if (index === 0) return SENS_MAX;
          if (index === 1) return WHEEL_MAX;
          if (index === 2) return SNAP_MAX;
          return STYLE_NAMES.length - 1;
        }

        function settingLabel(index) {
          if (index === 0) return '移动灵敏度';
          if (index === 1) return '滚轮灵敏度';
          if (index === 2) return '吸附力度';
          return '光标样式';
        }

        function settingFormat(index, value) {
          if (index === 2) return value.toFixed(2);
          if (index === 3) return STYLES[STYLE_NAMES[styleIndex]].label;
          return value.toFixed(1) + 'x';
        }

        function updateSettingsPanel() {
          var rows = [];
          for (var i = 0; i < 4; i++) {
            var value = settingValue(i);
            var min = settingMin(i);
            var max = settingMax(i);
            var pct = Math.round((value - min) / (max - min) * 100);
            var active = i === settingsIndex ? ' active' : '';
            rows.push(
              '<div class="dgc-setting-row' + active + '">' +
                '<span class="dgc-setting-name">' + settingLabel(i) + '</span>' +
                '<span class="dgc-setting-val">' + settingFormat(i, value) + '</span>' +
                '<div class="dgc-settings-bar"><i style="width:' + pct + '%"></i></div>' +
              '</div>'
            );
          }
          settingsPanel.innerHTML =
            '<div class="dgc-settings-title">手柄设置</div>' +
            rows.join('') +
            '<div class="dgc-settings-hint">▲▼ 选择 · ◀▶ 调整 · A/B 关闭</div>';
        }

        function openSettings() {
          if (!enabled) return;
          settingsOpen = true;
          settingsIndex = 0;
          settingsPanel.hidden = false;
          updateSettingsPanel();
          showToast('手柄设置');
        }

        function closeSettings() {
          settingsOpen = false;
          settingsPanel.hidden = true;
          saveSensitivity();
          saveWheelSensitivity();
          saveSnapStrength();
          toastTimer = 0;
          toast.classList.remove('show');
        }

        function toggleSettings() {
          if (settingsOpen) closeSettings();
          else openSettings();
        }

        function currentStep() {
          if (settingsIndex === 0) return SENS_STEP;
          if (settingsIndex === 1) return WHEEL_STEP;
          if (settingsIndex === 2) return SNAP_STEP;
          return 1;
        }

        function adjustSensitivity(delta) {
          if (settingsIndex === 0) {
            sensitivity = Math.min(SENS_MAX, Math.max(SENS_MIN, sensitivity + delta));
            sensitivity = Math.round(sensitivity * 10) / 10;
            saveSensitivity();
          } else if (settingsIndex === 1) {
            wheelSensitivity = Math.min(WHEEL_MAX, Math.max(WHEEL_MIN, wheelSensitivity + delta));
            wheelSensitivity = Math.round(wheelSensitivity * 10) / 10;
            saveWheelSensitivity();
          } else if (settingsIndex === 2) {
            snapStrength = Math.min(SNAP_MAX, Math.max(SNAP_MIN, snapStrength + delta));
            snapStrength = Math.round(snapStrength * 100) / 100;
            saveSnapStrength();
          } else if (settingsIndex === 3) {
            var dir = delta > 0 ? 1 : -1;
            styleIndex = (styleIndex + dir + STYLE_NAMES.length) % STYLE_NAMES.length;
            applyStyle();
            if (settingsOpen) updateSettingsPanel();
            return;
          }
          if (settingsOpen) updateSettingsPanel();
          showToast(settingLabel(settingsIndex) + '：' + settingFormat(settingsIndex, settingValue(settingsIndex)));
        }

        function kbDisplay(label) {
          if (label === 'Shift') return '⇧';
          if (label === 'Space') return '空格';
          if (label === 'Backspace') return '⌫';
          if (label === 'Enter') return '回车';
          if (label === 'Close') return '关闭';
          if (label === '拼') return '中/EN';
          if (kbShift && KB_SHIFT_MAP[label]) return KB_SHIFT_MAP[label];
          if (kbShift && label.length === 1 && label >= 'a' && label <= 'z') return label.toUpperCase();
          return label;
        }

        function renderKeyboard() {
          var title = '虚拟键盘 · ' + (kbMode === 'py' ? '拼音' : '英文') + ' · Y 关闭';
          var html = '<div class="dgc-kb-title">' + title + '</div>';
          html += '<div class="dgc-kb-strip">';
          html += '<span class="dgc-kb-buf">' + (kbMode === 'py' ? (pyBuffer || '拼音') : 'EN') + '</span>';
          if (kbMode === 'py') {
            if (pyCands.length) {
              var shown = Math.min(pyCands.length, 9);
              for (var i = 0; i < shown; i++) {
                html += '<span class="dgc-kb-cand' + (i === pyIndex ? ' active' : '') + '">' + pyCands[i] + '</span>';
              }
              html += '<span class="dgc-kb-hint">' + shown + ' 个候选 · 数字键/X 上屏 · B 退格</span>';
            } else {
              html += '<span class="dgc-kb-hint">' + (pyBuffer ? '无此音节 · B 退格' : '敲字母组音节 · 空格上屏首个') + '</span>';
            }
          } else {
            html += '<span class="dgc-kb-hint">A 按键 · B 关闭 · 拼 切拼音</span>';
          }
          html += '</div>';
          for (var r = 0; r < KB_LAYOUT.length; r++) {
            html += '<div class="dgc-kb-row">';
            for (var c = 0; c < KB_LAYOUT[r].length; c++) {
              var label = KB_LAYOUT[r][c];
              if (label === '') {
                html += '<div class="dgc-kb-key blank"></div>';
                continue;
              }
              var cls = 'dgc-kb-key';
              if (label === 'Shift' || label === 'Space' || label === '拼' || label === 'Backspace' || label === 'Enter' || label === 'Close') cls += ' wide';
              if (r === kbRow && c === kbCol) cls += ' active';
              html += '<div class="' + cls + '">' + kbDisplay(label) + '</div>';
            }
            html += '</div>';
          }
          keyboardPanel.innerHTML = html;
        }

        function openKeyboard() {
          if (!enabled) return;
          if (settingsOpen) closeSettings();
          kbOpen = true;
          kbRow = 0;
          kbCol = 0;
          kbShift = false;
          pyBuffer = '';
          pyCands = [];
          pyIndex = 0;
          keyboardPanel.hidden = false;
          renderKeyboard();
          showToast('虚拟键盘');
        }

        function closeKeyboard() {
          kbOpen = false;
          keyboardPanel.hidden = true;
          toastTimer = 0;
          toast.classList.remove('show');
        }

        function toggleKeyboard() {
          if (kbOpen) closeKeyboard();
          else openKeyboard();
        }

        function nearestCol(row, col) {
          var len = KB_LAYOUT[row].length;
          if (KB_LAYOUT[row][col]) return col;
          for (var d = 1; d < len; d++) {
            if (col - d >= 0 && KB_LAYOUT[row][col - d]) return col - d;
            if (col + d < len && KB_LAYOUT[row][col + d]) return col + d;
          }
          return col;
        }

        function kbMove(dx, dy) {
          var row = kbRow + dy;
          if (row < 0) row = 0;
          if (row >= KB_LAYOUT.length) row = KB_LAYOUT.length - 1;
          var col = kbCol + dx;
          if (col < 0) col = 0;
          if (col >= KB_LAYOUT[row].length) col = KB_LAYOUT[row].length - 1;
          if (dy !== 0) {
            kbCol = nearestCol(row, col);
          } else if (dx !== 0) {
            var c = col;
            while (c >= 0 && c < KB_LAYOUT[row].length && KB_LAYOUT[row][c] === '') {
              c += dx;
            }
            if (c < 0 || c >= KB_LAYOUT[row].length) c = col;
            kbCol = c;
          } else {
            kbCol = nearestCol(row, col);
          }
          kbRow = row;
          renderKeyboard();
        }

        function setNativeValue(el, value) {
          try {
            var proto = el.tagName === 'TEXTAREA' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
            var desc = Object.getOwnPropertyDescriptor(proto, 'value');
            if (desc && desc.set) {
              desc.set.call(el, value);
              return;
            }
          } catch (e) {}
          el.value = value;
        }

        function insertText(text) {
          var el = document.activeElement;
          if (!el) return;
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            var start = el.selectionStart != null ? el.selectionStart : el.value.length;
            var end = el.selectionEnd != null ? el.selectionEnd : start;
            setNativeValue(el, el.value.slice(0, start) + text + el.value.slice(end));
            var pos = start + text.length;
            try {
              el.setSelectionRange(pos, pos);
            } catch (e) {}
            try {
              el.dispatchEvent(new Event('input', { bubbles: true }));
            } catch (e) {}
          } else if (el.isContentEditable) {
            el.focus();
            var ok = false;
            try {
              ok = document.execCommand('insertText', false, text);
            } catch (e) {}
            if (!ok) {
              var sel = window.getSelection();
              if (sel && sel.rangeCount) {
                var range = sel.getRangeAt(0);
                range.deleteContents();
                var node = document.createTextNode(text);
                range.insertNode(node);
                range.setStartAfter(node);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
              }
            }
            try {
              el.dispatchEvent(new Event('input', { bubbles: true }));
            } catch (e) {}
          }
        }

        function editableText(node) {
          try {
            return node && node.textContent != null ? node.textContent : '';
          } catch (e) {
            return '';
          }
        }

        function editorRootOf(el) {
          var node = el;
          try {
            var found = el.closest ? el.closest('[contenteditable="true"],[contenteditable=""]') : null;
            if (found) node = found;
          } catch (e) {}
          return node || el;
        }

        function fireKey(el, key) {
          var evt = null;
          try {
            evt = new KeyboardEvent('keydown', {
              key: key,
              code: key,
              keyCode: key === 'Backspace' ? 8 : 46,
              which: key === 'Backspace' ? 8 : 46,
              bubbles: true,
              cancelable: true,
              composed: true
            });
          } catch (e) {
            evt = null;
          }
          if (evt && el.dispatchEvent) {
            try {
              el.dispatchEvent(evt);
            } catch (e) {}
          }
          return evt;
        }

        function deleteCharBeforeCaret() {
          try {
            var sel = window.getSelection();
            if (!sel || !sel.rangeCount) return false;
            var range = sel.getRangeAt(0);
            if (!range.collapsed) {
              range.deleteContents();
              return true;
            }
            var node = range.startContainer;
            var offset = range.startOffset;
            if (node && node.nodeType === 3 && offset > 0) {
              var cut = document.createRange();
              cut.setStart(node, offset - 1);
              cut.setEnd(node, offset);
              cut.deleteContents();
              sel.removeAllRanges();
              sel.addRange(cut);
              return true;
            }
          } catch (e) {}
          return false;
        }

        function backspace() {
          var el = document.activeElement;
          if (!el) return;
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            var start = el.selectionStart != null ? el.selectionStart : el.value.length;
            var end = el.selectionEnd != null ? el.selectionEnd : start;
            if (start === end && start > 0) start--;
            setNativeValue(el, el.value.slice(0, start) + el.value.slice(end));
            try {
              el.setSelectionRange(start, start);
            } catch (e) {}
            try {
              el.dispatchEvent(new Event('input', { bubbles: true }));
            } catch (e) {}
            return;
          }
          if (!el.isContentEditable) return;
          var root = editorRootOf(el);
          try {
            el.focus();
          } catch (e) {}
          var before = editableText(root);
          // 1) Real Backspace keydown: the editor's own keymap deletes through its model,
          //    which is the only path that also works at block and first-character edges.
          fireKey(root, 'Backspace');
          if (editableText(root) !== before) return;
          // 2) Native editing command.
          try {
            document.execCommand('delete');
          } catch (e) {}
          if (editableText(root) !== before) return;
          // 3) Last resort: cut the character before the caret by hand.
          if (deleteCharBeforeCaret()) {
            try {
              el.dispatchEvent(new Event('input', { bubbles: true }));
            } catch (e) {}
          }
        }

        function pressEnter() {
          var el = document.activeElement;
          if (!el) return;
          var evt = null;
          try {
            evt = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true, cancelable: true });
          } catch (e) {}
          var prevented = false;
          if (evt && el.dispatchEvent) prevented = !el.dispatchEvent(evt);
          if (!prevented) {
            if (el.tagName === 'TEXTAREA' || el.isContentEditable) {
              insertText('\n');
            }
          }
          try {
            el.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', code: 'Enter', bubbles: true }));
          } catch (e) {}
        }

        function toggleKbMode() {
          kbMode = kbMode === 'py' ? 'en' : 'py';
          pyBuffer = '';
          pyCands = [];
          pyIndex = 0;
          renderKeyboard();
          showToast(kbMode === 'py' ? '拼音输入：敲字母组音节，数字键/X 上屏' : '英文键盘');
        }

        function pyPush(ch) {
          var next = pyBuffer + ch;
          if (!PINYIN[next] && !PY_PREFIX[next]) {
            showToast('“' + next + '” 不是有效音节 · 数字键/X 上屏 · B 退格');
            return;
          }
          pyBuffer = next;
          pyCands = PINYIN[next] || [];
          pyIndex = 0;
          renderKeyboard();
        }

        function pyBack() {
          if (!pyBuffer) return;
          pyBuffer = pyBuffer.slice(0, -1);
          pyCands = PINYIN[pyBuffer] || [];
          pyIndex = 0;
          renderKeyboard();
        }

        function pyCommit(index) {
          if (!pyCands.length) {
            if (pyBuffer) showToast('无可选字 · B 退格');
            return;
          }
          var pick = typeof index === 'number' ? index : pyIndex;
          if (pick < 0 || pick >= pyCands.length) pick = 0;
          insertText(pyCands[pick]);
          pyBuffer = '';
          pyCands = [];
          pyIndex = 0;
          renderKeyboard();
        }

        function pyMoveCand(delta) {
          if (!pyCands.length) return;
          pyIndex = (pyIndex + delta + pyCands.length) % pyCands.length;
          renderKeyboard();
        }

        function pressKbKey(label) {
          if (label === 'Close') {
            closeKeyboard();
            return;
          }
          if (label === '拼') {
            toggleKbMode();
            return;
          }
          if (kbMode === 'py') {
            if (label === 'Space') {
              pyCommit();
              return;
            }
            if (label === 'Backspace') {
              if (pyBuffer) pyBack();
              else backspace();
              return;
            }
            if (label === 'Enter') {
              pyCommit();
              return;
            }
            if (label.length === 1 && label >= '1' && label <= '9') {
              var idx = parseInt(label, 10) - 1;
              if (idx < pyCands.length) pyCommit(idx);
              return;
            }
            if (label.length === 1 && label >= 'a' && label <= 'z') {
              pyPush(label);
              return;
            }
            if (label === 'Shift') return;
            // digits 0 and punctuation fall through to direct insertion
          }
          if (label === 'Shift') {
            kbShift = !kbShift;
            renderKeyboard();
            return;
          }
          if (label === 'Space') {
            insertText(' ');
            return;
          }
          if (label === 'Backspace') {
            backspace();
            return;
          }
          if (label === 'Enter') {
            pressEnter();
            return;
          }
          var out = label;
          if (kbShift && KB_SHIFT_MAP[label]) {
            out = KB_SHIFT_MAP[label];
          } else if (kbShift && label.length === 1 && label >= 'a' && label <= 'z') {
            out = label.toUpperCase();
          }
          insertText(out);
        }

        function pressArrow(dir) {
          var key = dir === 'left' ? 'ArrowLeft' : 'ArrowRight';
          var code = key;
          var el = document.activeElement;
          if (!el) return;
          var evt = null;
          try {
            evt = new KeyboardEvent('keydown', { key: key, code: code, bubbles: true, cancelable: true });
          } catch (e) {}
          var prevented = false;
          if (evt && el.dispatchEvent) prevented = !el.dispatchEvent(evt);
          if (!prevented && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
            var start = el.selectionStart != null ? el.selectionStart : 0;
            var end = el.selectionEnd != null ? el.selectionEnd : start;
            if (start === end) {
              var pos = dir === 'left' ? Math.max(0, start - 1) : Math.min(el.value.length, start + 1);
              try {
                el.setSelectionRange(pos, pos);
              } catch (e) {}
            } else {
              var p = dir === 'left' ? start : end;
              try {
                el.setSelectionRange(p, p);
              } catch (e) {}
            }
          }
          try {
            el.dispatchEvent(new KeyboardEvent('keyup', { key: key, code: code, bubbles: true }));
          } catch (e) {}
        }

        function getPageCursor(node) {
          if (cursorCache && cursorCache.has(node)) return cursorCache.get(node);
          var html = document.documentElement;
          var had = html.classList.contains('dgc-cursor-active');
          if (had) html.classList.remove('dgc-cursor-active');
          var cursor = '';
          try {
            cursor = window.getComputedStyle(node).cursor;
          } catch (e) {
          } finally {
            if (had) html.classList.add('dgc-cursor-active');
          }
          if (cursorCache) cursorCache.set(node, cursor);
          return cursor;
        }

        function getClickableElement(el) {
          if (!el) return null;
          var selector = [
            'a[href]',
            'button',
            'input',
            'textarea',
            'select',
            'summary',
            '[role="button"]',
            '[role="link"]',
            '[role="menuitem"]',
            '[role="tab"]',
            '[role="checkbox"]',
            '[role="radio"]',
            '[role="switch"]',
            '[role="option"]',
            '[onclick]',
            '[onmousedown]',
            '[onpointerdown]',
            '[data-clickable]',
            'label[for]',
            '[contenteditable="true"]'
          ].join(',');
          var node = el;
          for (var i = 0; i < 6 && node && node.nodeType === 1; i++) {
            try {
              if (node.matches && node.matches(selector)) return node;
              if (node.style && (node.style.cursor === 'pointer' || node.style.cursor === 'grab' || node.style.cursor === 'text')) return node;
              var cursor = getPageCursor(node);
              if (cursor === 'pointer' || cursor === 'grab' || cursor === 'text') return node;
            } catch (e) {}
            node = node.parentElement;
          }
          return null;
        }

        function isClickable(el) {
          return !!getClickableElement(el);
        }

        function applyStyleVisual() {
          var name = STYLE_NAMES[styleIndex];
          var st = STYLES[name];
          if (!st) return;
          if (st.frames && st.frames.length) {
            cursor.classList.remove('dgc-default');
            cursor.classList.add('dgc-sprite');
            cursor.style.width = (st.size || 48) + 'px';
            cursor.style.height = (st.size || 48) + 'px';
            cursor.style.backgroundImage = 'url("' + st.frames[0] + '")';
            frameIndex = 0;
            frameTimer = 0;
          } else {
            cursor.classList.remove('dgc-sprite');
            cursor.classList.add('dgc-default');
            cursor.style.width = '';
            cursor.style.height = '';
            cursor.style.backgroundImage = '';
          }
        }

        function applyStyle() {
          applyStyleVisual();
          saveStyleIndex();
          var st = STYLES[STYLE_NAMES[styleIndex]];
          showToast('光标样式：' + st.label + ' (' + (styleIndex + 1) + '/' + STYLE_NAMES.length + ')');
        }

        function getGamepad() {
          var pads = navigator.getGamepads ? navigator.getGamepads() : [];
          for (var i = 0; i < pads.length; i++) {
            if (pads[i]) return pads[i];
          }
          return null;
        }

        function isEditable(el) {
          if (!el) return false;
          var tag = el.tagName;
          return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
        }

        function readMove(pad) {
          var dx = 0;
          var dy = 0;
          if (pad) {
            var ax = pad.axes[0] || 0;
            var ay = pad.axes[1] || 0;
            var dead = 0.18;
            if (Math.abs(ax) < dead) ax = 0;
            else ax = (Math.abs(ax) - dead) / (1 - dead) * (ax < 0 ? -1 : 1);
            if (Math.abs(ay) < dead) ay = 0;
            else ay = (Math.abs(ay) - dead) / (1 - dead) * (ay < 0 ? -1 : 1);
            dx = ax;
            dy = ay;

            if (pad.buttons[12] && pad.buttons[12].pressed) dy = -1;
            if (pad.buttons[13] && pad.buttons[13].pressed) dy = 1;
            if (pad.buttons[14] && pad.buttons[14].pressed) dx = -1;
            if (pad.buttons[15] && pad.buttons[15].pressed) dx = 1;
          }

          var len = Math.sqrt(dx * dx + dy * dy);
          if (len > 1) {
            dx /= len;
            dy /= len;
          }
          return { x: dx, y: dy };
        }

        function getTarget() {
          var el = document.elementFromPoint(pos.x, pos.y);
          return el || document.body;
        }

        function dispatchMouse(type, el, button, detail) {
          if (!el || !el.dispatchEvent) return;
          var isUp = type.indexOf('up') >= 0;
          var opts = {
            bubbles: true,
            cancelable: true,
            view: window,
            detail: detail || 1,
            screenX: pos.x,
            screenY: pos.y,
            clientX: pos.x,
            clientY: pos.y,
            button: button || 0,
            buttons: isUp ? 0 : (button === 2 ? 2 : (button === 1 ? 4 : 1))
          };
          var evt;
          try {
            evt = new MouseEvent(type, opts);
          } catch (e) {
            evt = document.createEvent('MouseEvent');
            evt.initMouseEvent(type, true, true, window, detail || 1, pos.x, pos.y, pos.x, pos.y, false, false, false, false, button || 0, null);
          }
          try { evt.which = button + 1; } catch (e) {}
          try { evt.button = button; } catch (e) {}
          el.dispatchEvent(evt);
        }

        function dispatchPointer(type, el, button, detail) {
          if (!el || !el.dispatchEvent) return;
          var isUp = type.indexOf('up') >= 0;
          var opts = {
            bubbles: true,
            cancelable: true,
            view: window,
            detail: detail || 1,
            screenX: pos.x,
            screenY: pos.y,
            clientX: pos.x,
            clientY: pos.y,
            button: button || 0,
            buttons: isUp ? 0 : (button === 2 ? 2 : (button === 1 ? 4 : 1)),
            pointerId: 1,
            pointerType: 'mouse',
            isPrimary: true,
            width: 1,
            height: 1,
            pressure: button === 0 ? 0.5 : 0
          };
          var evt;
          try {
            evt = new PointerEvent(type, opts);
          } catch (e) {
            evt = new MouseEvent(type, opts);
          }
          try { evt.which = button + 1; } catch (e) {}
          try { evt.button = button; } catch (e) {}
          el.dispatchEvent(evt);
        }

        function updateHover(force) {
          if (hoverUpdating) return;
          hoverUpdating = true;
          try {
            var el = getTarget();
            if (el !== hoverEl) {
              if (hoverEl) {
                dispatchMouse('mouseout', hoverEl, 0, 1);
                dispatchPointer('pointerout', hoverEl, 0, 1);
              }
              hoverEl = el;
              if (el) {
                dispatchMouse('mouseover', el, 0, 1);
                dispatchPointer('pointerover', el, 0, 1);
              }
            }
            var clickable = isClickable(el);
            if (clickable !== hoverClickable) {
              hoverClickable = clickable;
              cursor.classList.toggle('dgc-clickable', clickable);
            }
            if (force || el) {
              dispatchMouse('mousemove', el, 0, 1);
              dispatchPointer('pointermove', el, 0, 1);
            }
          } finally {
            hoverUpdating = false;
          }
        }

        function leftClick() {
          var el = getTarget();
          if (!el) return;
          dispatchPointer('pointerdown', el, 0, 1);
          dispatchMouse('mousedown', el, 0, 1);
          dispatchPointer('pointerup', el, 0, 1);
          dispatchMouse('mouseup', el, 0, 1);
          dispatchMouse('click', el, 0, 1);
          if (isEditable(el) && typeof el.focus === 'function') el.focus();
        }

        function rightClick() {
          var el = getTarget();
          if (!el) return;
          dispatchPointer('pointerdown', el, 2, 1);
          dispatchMouse('mousedown', el, 2, 1);
          dispatchPointer('pointerup', el, 2, 1);
          dispatchMouse('mouseup', el, 2, 1);
          dispatchMouse('contextmenu', el, 2, 1);
        }

        function doubleClick() {
          var el = getTarget();
          if (!el) return;
          dispatchPointer('pointerdown', el, 0, 2);
          dispatchMouse('mousedown', el, 0, 2);
          dispatchPointer('pointerup', el, 0, 2);
          dispatchMouse('mouseup', el, 0, 2);
          dispatchMouse('click', el, 0, 2);
          dispatchMouse('dblclick', el, 0, 2);
        }

        function middleClick() {
          var el = getTarget();
          if (!el) return;
          dispatchPointer('pointerdown', el, 1, 1);
          dispatchMouse('mousedown', el, 1, 1);
          dispatchPointer('pointerup', el, 1, 1);
          dispatchMouse('mouseup', el, 1, 1);
          dispatchMouse('auxclick', el, 1, 1);
        }

        function findScrollable(el) {
          var node = el;
          while (node && node.nodeType === 1) {
            var cs = window.getComputedStyle ? window.getComputedStyle(node) : null;
            var overflowY = cs ? cs.overflowY : '';
            if ((overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay') && node.scrollHeight > node.clientHeight + 1) {
              return node;
            }
            node = node.parentElement;
          }
          return null;
        }

        function simulateWheel(rawDelta) {
          if (!rawDelta) return;
          var el = getTarget();
          var evt = null;
          var opts = {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: pos.x,
            clientY: pos.y,
            deltaY: rawDelta,
            deltaMode: 0
          };
          try {
            evt = new WheelEvent('wheel', opts);
          } catch (e) {}
          var canceled = false;
          if (evt && el && el.dispatchEvent) {
            canceled = !el.dispatchEvent(evt);
          }
          if (!canceled) {
            var scroller = findScrollable(el);
            if (scroller) {
              scroller.scrollTop += rawDelta;
            } else if (window.scrollBy) {
              window.scrollBy(0, rawDelta);
            } else if (document.scrollingElement) {
              document.scrollingElement.scrollTop += rawDelta;
            }
          }
        }

        function applySnap(delta) {
          if (snapStrength <= 0) return;
          snapTimer -= delta;
          if (snapTimer > 0) return;
          snapTimer = 80;

          var current = getTarget();
          if (getClickableElement(current)) return;

          var radius = 18 + 42 * snapStrength;
          var best = null;
          var bestDist = Infinity;
          var steps = 8;
          for (var i = 0; i < steps; i++) {
            var angle = Math.PI * 2 * i / steps;
            var px = Math.round(pos.x + Math.cos(angle) * radius);
            var py = Math.round(pos.y + Math.sin(angle) * radius);
            if (px < 0 || py < 0 || px > window.innerWidth || py > window.innerHeight) continue;
            var el = document.elementFromPoint(px, py);
            var ce = getClickableElement(el);
            if (!ce) continue;
            var rect = ce.getBoundingClientRect();
            var cx = rect.left + rect.width / 2;
            var cy = rect.top + rect.height / 2;
            var d = Math.sqrt((cx - pos.x) * (cx - pos.x) + (cy - pos.y) * (cy - pos.y));
            if (d < bestDist) {
              bestDist = d;
              best = { x: cx, y: cy };
            }
          }
          if (best && bestDist < radius + 30) {
            var pull = Math.min(0.6, snapStrength * 0.45);
            pos.x += (best.x - pos.x) * pull;
            pos.y += (best.y - pos.y) * pull;
            pos.x = Math.max(0, Math.min(window.innerWidth, pos.x));
            pos.y = Math.max(0, Math.min(window.innerHeight, pos.y));
            updateCursorVisual();
          }
        }

        function nextStyle(delta) {
          styleIndex = (styleIndex + delta + STYLE_NAMES.length) % STYLE_NAMES.length;
          applyStyle();
          updateCursorVisual();
          if (settingsOpen) updateSettingsPanel();
        }

        function toggleEnabled() {
          enabled = !enabled;
          root.classList.toggle('dgc-cursor-hidden', !enabled);
          document.documentElement.classList.toggle('dgc-cursor-active', enabled);
          if (enabled) {
            pos = loadPos();
            updateCursorVisual();
            showToast('光标已开启');
          } else {
            if (settingsOpen) {
              settingsOpen = false;
              settingsPanel.hidden = true;
            }
            if (kbOpen) {
              kbOpen = false;
              keyboardPanel.hidden = true;
            }
            showToast('光标已关闭，按 F9 重新开启');
          }
        }

        function updateCursorVisual() {
          cursor.style.left = pos.x + 'px';
          cursor.style.top = pos.y + 'px';
        }

        function update(delta) {
          var pad = getGamepad();
          var input = readMove(pad);
          sensRepeatTimer = Math.max(0, sensRepeatTimer - delta);
          kbRepeatTimer = Math.max(0, kbRepeatTimer - delta);

          if (pad) {
            var lb = pad.buttons[4];
            var rb = pad.buttons[5];
            var select = pad.buttons[8];
            var start = pad.buttons[9];
            var a = pad.buttons[0];
            var b = pad.buttons[1];
            var x = pad.buttons[2];
            var y = pad.buttons[3];
            var r3 = pad.buttons[11];

            // Start can always show/hide the cursor.
            if (start && start.pressed && !prevButtons.get(9)) toggleEnabled();

            if (!enabled) {
              prevButtons.set(4, !!(lb && lb.pressed));
              prevButtons.set(5, !!(rb && rb.pressed));
              prevButtons.set(8, !!(select && select.pressed));
              prevButtons.set(9, !!(start && start.pressed));
              prevButtons.set(0, !!(a && a.pressed));
              prevButtons.set(1, !!(b && b.pressed));
              prevButtons.set(2, !!(x && x.pressed));
              prevButtons.set(3, !!(y && y.pressed));
              prevButtons.set(11, !!(r3 && r3.pressed));
              return;
            }

            // Y toggles the virtual keyboard.
            if (y && y.pressed && !prevButtons.get(3)) toggleKeyboard();
            prevButtons.set(3, !!(y && y.pressed));

            if (kbOpen) {
              var navX = 0;
              var navY = 0;
              if (pad.buttons[14] && pad.buttons[14].pressed) navX -= 1;
              if (pad.buttons[15] && pad.buttons[15].pressed) navX += 1;
              if (pad.buttons[12] && pad.buttons[12].pressed) navY -= 1;
              if (pad.buttons[13] && pad.buttons[13].pressed) navY += 1;
              var kax = pad.axes[0] || 0;
              var kay = pad.axes[1] || 0;
              if (Math.abs(kax) > 0.5) navX += kax > 0 ? 1 : -1;
              if (Math.abs(kay) > 0.5) navY += kay > 0 ? 1 : -1;
              if ((navX !== 0 || navY !== 0) && kbRepeatTimer <= 0) {
                kbMove(navX, navY);
                kbRepeatTimer = 130;
              }
              var kbLabel = KB_LAYOUT[kbRow][kbCol];
              var pyActive = kbMode === 'py' && pyCands.length > 0;
              if (lb && lb.pressed && !prevButtons.get(4)) {
                if (pyActive) pyMoveCand(-1);
                else pressArrow('left');
              }
              if (rb && rb.pressed && !prevButtons.get(5)) {
                if (pyActive) pyMoveCand(1);
                else pressArrow('right');
              }
              if (a && a.pressed && !prevButtons.get(0)) pressKbKey(kbLabel);
              if (x && x.pressed && !prevButtons.get(2)) {
                if (kbMode === 'py' && pyCands.length) pyCommit();
              }
              if (b && b.pressed && !prevButtons.get(1)) {
                if (kbMode === 'py' && pyBuffer) pyBack();
                else closeKeyboard();
              }
              if (select && select.pressed && !prevButtons.get(8)) closeKeyboard();
              if (y && y.pressed && !prevButtons.get(3)) closeKeyboard();

              prevButtons.set(4, !!(lb && lb.pressed));
              prevButtons.set(5, !!(rb && rb.pressed));
              prevButtons.set(9, !!(start && start.pressed));
              prevButtons.set(0, !!(a && a.pressed));
              prevButtons.set(1, !!(b && b.pressed));
              prevButtons.set(2, !!(x && x.pressed));
              prevButtons.set(11, !!(r3 && r3.pressed));
              return;
            }

            // Select opens/closes the settings panel.
            if (select && select.pressed && !prevButtons.get(8)) toggleSettings();
            prevButtons.set(8, !!(select && select.pressed));

            if (settingsOpen) {
              var step = currentStep();
              var sel = 0;
              var adj = 0;

              if (pad.buttons[12] && pad.buttons[12].pressed) sel -= 1;
              if (pad.buttons[13] && pad.buttons[13].pressed) sel += 1;
              var ay = pad.axes[1] || 0;
              if (Math.abs(ay) > 0.5) sel += ay > 0 ? 1 : -1;
              if (sel !== 0 && sensRepeatTimer <= 0) {
                settingsIndex = (settingsIndex + sel + 4) % 4;
                updateSettingsPanel();
                sensRepeatTimer = 150;
              }

              if (lb && lb.pressed) adj -= step;
              if (rb && rb.pressed) adj += step;
              var ax = pad.axes[0] || 0;
              if (Math.abs(ax) > 0.5) adj += ax > 0 ? step : -step;
              if (pad.buttons[14] && pad.buttons[14].pressed) adj -= step;
              if (pad.buttons[15] && pad.buttons[15].pressed) adj += step;
              if (adj !== 0 && sensRepeatTimer <= 0) {
                adjustSensitivity(adj);
                sensRepeatTimer = 120;
              }

              if (a && a.pressed && !prevButtons.get(0)) closeSettings();
              if (b && b.pressed && !prevButtons.get(1)) closeSettings();

              prevButtons.set(4, !!(lb && lb.pressed));
              prevButtons.set(5, !!(rb && rb.pressed));
              prevButtons.set(9, !!(start && start.pressed));
              prevButtons.set(0, !!(a && a.pressed));
              prevButtons.set(1, !!(b && b.pressed));
              prevButtons.set(2, !!(x && x.pressed));
              prevButtons.set(11, !!(r3 && r3.pressed));
              return;
            }

            if (lb && lb.pressed && !prevButtons.get(4)) pressArrow('left');
            if (rb && rb.pressed && !prevButtons.get(5)) pressArrow('right');
            if (a && a.pressed && !prevButtons.get(0)) leftClick();
            if (b && b.pressed && !prevButtons.get(1)) rightClick();
            if (x && x.pressed && !prevButtons.get(2)) doubleClick();
            if (r3 && r3.pressed && !prevButtons.get(11)) middleClick();

            prevButtons.set(4, !!(lb && lb.pressed));
            prevButtons.set(5, !!(rb && rb.pressed));
            prevButtons.set(9, !!(start && start.pressed));
            prevButtons.set(0, !!(a && a.pressed));
            prevButtons.set(1, !!(b && b.pressed));
            prevButtons.set(2, !!(x && x.pressed));
            prevButtons.set(11, !!(r3 && r3.pressed));
          } else {
            prevButtons.set(4, false);
            prevButtons.set(5, false);
            prevButtons.set(8, false);
            prevButtons.set(9, false);
            prevButtons.set(0, false);
            prevButtons.set(1, false);
            prevButtons.set(2, false);
            prevButtons.set(3, false);
            prevButtons.set(11, false);
            scrollAccum = 0;
          }

          if (!enabled) return;

          var speed = 760 * sensitivity; // px/sec
          var smooth = 10; // higher = snappier
          var targetVX = input.x * speed;
          var targetVY = input.y * speed;
          var t = Math.min(1, delta / 1000 * smooth);
          vel.x += (targetVX - vel.x) * t;
          vel.y += (targetVY - vel.y) * t;
          pos.x += vel.x * delta / 1000;
          pos.y += vel.y * delta / 1000;
          pos.x = Math.max(0, Math.min(window.innerWidth, pos.x));
          pos.y = Math.max(0, Math.min(window.innerHeight, pos.y));

          // Light magnetic snap toward nearby clickable elements.
          applySnap(delta);

          var moved = Math.abs(pos.x - lastMoveX) > 0.3 || Math.abs(pos.y - lastMoveY) > 0.3;
          hoverCheckTimer -= delta;
          if (moved) {
            lastMoveX = pos.x;
            lastMoveY = pos.y;
            updateHover(true);
            hoverCheckTimer = 150;
          } else if (hoverCheckTimer <= 0) {
            updateHover(false);
            hoverCheckTimer = 150;
          }
          updateCursorVisual();
          savePosThrottled();

          // Right stick simulates the mouse wheel (vertical).
          if (pad) {
            var ry = pad.axes[3] || 0;
            var dead = 0.18;
            if (Math.abs(ry) < dead) {
              ry = 0;
            } else {
              ry = (Math.abs(ry) - dead) / (1 - dead) * (ry < 0 ? -1 : 1);
            }
            if (ry !== 0) {
              scrollAccum += ry * wheelSensitivity * 900 * delta / 1000;
              var intDelta = Math.round(scrollAccum);
              if (intDelta !== 0) {
                simulateWheel(intDelta);
                scrollAccum -= intDelta;
              }
            } else {
              scrollAccum = 0;
            }
          }

          // Sprite animation: play while the cursor is actually moving.
          var st = STYLES[STYLE_NAMES[styleIndex]];
          if (st && st.frames && st.frames.length) {
            var isMoving = Math.abs(vel.x) > 8 || Math.abs(vel.y) > 8;
            if (isMoving) {
              frameTimer += delta;
              var frameDuration = 90;
              while (frameTimer >= frameDuration) {
                frameTimer -= frameDuration;
                frameIndex = (frameIndex + 1) % st.frames.length;
              }
            } else {
              frameIndex = 0;
              frameTimer = 0;
            }
            cursor.style.backgroundImage = 'url("' + st.frames[frameIndex] + '")';
          }
        }

        function loop(time) {
          if (disposed) return;
          var delta = Math.min(time - lastTime, 50);
          lastTime = time;
          update(delta);

          if (toastTimer > 0) {
            toastTimer -= delta;
            if (toastTimer <= 0) toast.classList.remove('show');
          }

          rafId = requestAnimationFrame(loop);
        }

        function onKeyDown(e) {
          // Keyboard shortcuts: F9 toggles the virtual cursor, F8 cycles its
          // style. Everything else is left alone so typing and page shortcuts
          // keep working.
          if (e.repeat) return;
          if (e.code === 'F9') {
            e.preventDefault();
            toggleEnabled();
          } else if (e.code === 'F8') {
            e.preventDefault();
            nextStyle(1);
          }
        }

        function onMouseMove(e) {
          // Ignore synthetic mouse events we dispatch ourselves; otherwise this
          // creates an infinite mousemove loop and freezes the page.
          if (e.isTrusted === false) return;
          if (!enabled) return;
          pos.x = e.clientX;
          pos.y = e.clientY;
          lastMoveX = pos.x;
          lastMoveY = pos.y;
          updateCursorVisual();
          savePosThrottled();
          updateHover(false);
        }

        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('mousemove', onMouseMove);

        var disposed = false;
        rafId = requestAnimationFrame(loop);

        return function () {
          disposed = true;
          cancelAnimationFrame(rafId);
          window.removeEventListener('keydown', onKeyDown);
          window.removeEventListener('mousemove', onMouseMove);
          document.documentElement.classList.remove('dgc-cursor-active');
          root.remove();
          style.remove();
        };
      });
    }

    exports.apply = apply;
    return module.exports;
  },
});
