import Image from "next/image";
const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <Image
          // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/image.png"
          alt="Next.js Logo"
          width={548}
          height={272}
          priority
          style={{ left: -4 }}
        />
      </div>
      <div
        style={{
          margin: "12px 1px 0px 0px",
          width: 548,
          fontFamily: "Avenir Next",
          backgroundColor: "white",
          color: "black"
        }}
      >
        <div
          style={{
            width: 496,
            height: 150,
            top: 296,
            left: 24,
            backgroundColor: "white",
            margin: "16px 16px 0px 16px"
          }}
        >
          <div style={{ width: 496, height: 112 }}>
            <div
              style={{
                width: 280,
                height: 112,
                float: "left",
                marginBottom: 20
              }}
            >
              <div style={{ width: 280, height: 54 }}>
                <div
                  style={{
                    width: 40,
                    height: 154,
                    float: "left",
                    marginLeft: 16,
                    textAlign: "center",
                    position: "relative"
                  }}
                >
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/icon.png"
                    alt="Icon"
                    width={40}
                    height={154}
                  />
                </div>
                <div
                  style={{
                    width: 208,
                    height: 54,
                    float: "right",
                    marginTop: -10
                  }}
                >
                  <div
                    style={{
                      width: 242,
                      fontWeight: 600,
                      fontSize: 23,
                      height: 31
                    }}
                  >
                    Forret At Bukit TimahX
                  </div>
                  <div>
                    <span
                      style={{
                        width: 208,
                        fontWeight: 400,
                        fontSize: 14
                      }}
                    >
                      70 andannsd1
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    width: 208,
                    height: 54,
                    float: "none",
                    marginTop: "70px",
                    position: "absolute"
                  }}
                >
                  <div>Forret At Bukit Timah1</div>
                  <div>Forret At Bukit Timah2</div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: 216,
                height: 112,
                float: "right"
              }}
            >
              <div style={{ width: 216, marginLeft: 80, height: 54 }}>
                <div style={{ width: 216, height: 54, float: "right" }}>
                  <div
                    style={{
                      width: 216,
                      height: 31,

                      fontWeight: 26,
                      fontSize: 19
                    }}
                  >
                    $2.111 - $2.113 psf
                  </div>
                  <div style={{ width: 208, height: 19 }}>70 andannsd</div>
                </div>
              </div>
            </div>
          </div>
          <Image
            // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/btn_link.png"
            alt="Next.js Logo"
            width={496}
            height={22}
            priority
          />
        </div>
      </div>
    </main>
  );
}
