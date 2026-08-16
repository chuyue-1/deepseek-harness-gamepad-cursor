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
      ['Shift', 'Space', '', 'Backspace', 'Enter', 'Close', '', '', '', '']
    ];

    var KB_SHIFT_MAP = {
      '1': '!', '2': '@', '3': '#', '4': '$', '5': '%',
      '6': '^', '7': '&', '8': '*', '9': '(', '0': ')',
      ';': ':', ',': '<', '.': '>', '/': '?'
    };

    var CSS = `
      #dsh-gamepad-cursor-root {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 2147483647;
      }
      #dsh-gamepad-cursor-root[hidden] {
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
        var enabled = true;
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

        document.documentElement.classList.add('dgc-cursor-active');
        applyStyle();
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
          if (kbShift && KB_SHIFT_MAP[label]) return KB_SHIFT_MAP[label];
          if (kbShift && label.length === 1 && label >= 'a' && label <= 'z') return label.toUpperCase();
          return label;
        }

        function renderKeyboard() {
          var html = '<div class="dgc-kb-title">虚拟键盘 · Y 关闭</div>';
          for (var r = 0; r < KB_LAYOUT.length; r++) {
            html += '<div class="dgc-kb-row">';
            for (var c = 0; c < KB_LAYOUT[r].length; c++) {
              var label = KB_LAYOUT[r][c];
              if (label === '') {
                html += '<div class="dgc-kb-key blank"></div>';
                continue;
              }
              var cls = 'dgc-kb-key';
              if (label === 'Shift' || label === 'Space' || label === 'Backspace' || label === 'Enter' || label === 'Close') cls += ' wide';
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
          } else if (el.isContentEditable) {
            el.focus();
            try {
              document.execCommand('delete');
            } catch (e) {}
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

        function pressKbKey(label) {
          if (label === 'Close') {
            closeKeyboard();
            return;
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

        function applyStyle() {
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
          saveStyleIndex();
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
        }

        function toggleEnabled() {
          enabled = !enabled;
          root.hidden = !enabled;
          document.documentElement.classList.toggle('dgc-cursor-active', enabled);
          if (enabled) {
            pos = loadPos();
            updateCursorVisual();
            showToast('光标已开启');
          } else {
            toast.classList.remove('show');
            toastTimer = 0;
            if (settingsOpen) {
              settingsOpen = false;
              settingsPanel.hidden = true;
            }
            if (kbOpen) {
              kbOpen = false;
              keyboardPanel.hidden = true;
            }
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
            var r3 = pad.buttons[10];

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
              prevButtons.set(10, !!(r3 && r3.pressed));
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
              if (lb && lb.pressed && !prevButtons.get(4)) pressArrow('left');
              if (rb && rb.pressed && !prevButtons.get(5)) pressArrow('right');
              if (a && a.pressed && !prevButtons.get(0)) pressKbKey(kbLabel);
              if (b && b.pressed && !prevButtons.get(1)) closeKeyboard();
              if (select && select.pressed && !prevButtons.get(8)) closeKeyboard();
              if (y && y.pressed && !prevButtons.get(3)) closeKeyboard();

              prevButtons.set(4, !!(lb && lb.pressed));
              prevButtons.set(5, !!(rb && rb.pressed));
              prevButtons.set(9, !!(start && start.pressed));
              prevButtons.set(0, !!(a && a.pressed));
              prevButtons.set(1, !!(b && b.pressed));
              prevButtons.set(2, !!(x && x.pressed));
              prevButtons.set(10, !!(r3 && r3.pressed));
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
              prevButtons.set(10, !!(r3 && r3.pressed));
              return;
            }

            if (lb && lb.pressed && !prevButtons.get(4)) pressArrow('left');
            if (rb && rb.pressed && !prevButtons.get(5)) pressArrow('right');
            if (a && a.pressed && !prevButtons.get(0)) leftClick();
            if (b && b.pressed && !prevButtons.get(1)) rightClick();
            if (x && x.pressed && !prevButtons.get(2)) doubleClick();
            if (r3 && r3.pressed && !prevButtons.get(10)) middleClick();

            prevButtons.set(4, !!(lb && lb.pressed));
            prevButtons.set(5, !!(rb && rb.pressed));
            prevButtons.set(9, !!(start && start.pressed));
            prevButtons.set(0, !!(a && a.pressed));
            prevButtons.set(1, !!(b && b.pressed));
            prevButtons.set(2, !!(x && x.pressed));
            prevButtons.set(10, !!(r3 && r3.pressed));
          } else {
            prevButtons.set(4, false);
            prevButtons.set(5, false);
            prevButtons.set(8, false);
            prevButtons.set(9, false);
            prevButtons.set(0, false);
            prevButtons.set(1, false);
            prevButtons.set(2, false);
            prevButtons.set(3, false);
            prevButtons.set(10, false);
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
          // The only keyboard shortcut kept: toggle the virtual cursor on/off.
          // All other keyboard handling is intentionally removed so the plugin
          // does not interfere with normal typing / page shortcuts.
          if (e.repeat) return;
          if (e.code === 'F9') {
            e.preventDefault();
            toggleEnabled();
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
