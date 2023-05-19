// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: toir4xKH4aRMjXM9AUeVMJ
// Component: EDjZNNL20No
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent
import { useScreenVariants as useScreenVariants_7Ks1UnM646Mq } from "../rakija_site/PlasmicGlobalVariant__Screen"; // plasmic-import: 7ks_1UnM646mq/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "../rakija_site/plasmic_rakija_site.module.css"; // plasmic-import: toir4xKH4aRMjXM9AUeVMJ/projectcss
import sty from "./PlasmicVilijamovka.module.css"; // plasmic-import: EDjZNNL20No/css
import group1PngUT7LoZsTj from "../rakija_site/images/group1Png.png"; // plasmic-import: uT7loZsTJ/picture
import vector1Png3127LsLhox from "../rakija_site/images/vector1Png3.png"; // plasmic-import: 127lsLhox/picture
import hTk7NOoC2XjpegDZle6Hln from "./images/hTk7NOoC2Xjpeg.jpg"; // plasmic-import: _dZle6hln/picture

export const PlasmicVilijamovka__VariantProps = new Array();

export const PlasmicVilijamovka__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicVilijamovka__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_7Ks1UnM646Mq()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"parent"}
          data-plasmic-override={overrides.parent}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.parent
          )}
        >
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            brand={
              <a
                data-plasmic-name={"logoFillIn"}
                data-plasmic-override={overrides.logoFillIn}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.logoFillIn
                )}
                href={"#"}
              >
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link___5MEse
                  )}
                  href={`/`}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__xQwq2)}
                    displayHeight={"40px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={{
                      src: group1PngUT7LoZsTj,
                      fullWidth: 727,
                      fullHeight: 727,
                      aspectRatio: undefined
                    }}
                  />
                </a>
              </a>
            }
            className={classNames("__wab_instance", sty.navigationBar)}
            closeButton={
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___7Tya5)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/close.svg"}
              />
            }
            itemsGap={8}
            menuItems={
              <React.Fragment>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___461Yg
                  )}
                  href={`/about`}
                >
                  {"O NAMA"}
                </a>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__xr2Ti
                  )}
                  href={"/homepage#products"}
                >
                  {"PROIZVODI"}
                </a>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__nwQk2
                  )}
                  href={"/homepage#contact"}
                >
                  {"KONTAKT"}
                </a>
              </React.Fragment>
            }
            openButton={
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__bYk8D)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? {
                        src: vector1Png3127LsLhox,
                        fullWidth: 45,
                        fullHeight: 13,
                        aspectRatio: undefined
                      }
                    : "https://static1.plasmic.app/menu.svg"
                }
              />
            }
            responsiveBreakpoint={768}
          />

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__zNwSt)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__quXt8
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <h4
                          data-plasmic-name={"h4"}
                          data-plasmic-override={overrides.h4}
                          className={classNames(
                            projectcss.all,
                            projectcss.h4,
                            projectcss.__wab_text,
                            sty.h4
                          )}
                        >
                          {hasVariant(
                            globalVariants,
                            "screen",
                            "mobileOnly"
                          ) ? (
                            <React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "#AC8D5B" }}
                              >
                                {"LOREM IPSUM DOLOR"}
                              </span>
                            </React.Fragment>
                          ) : (
                            "Vilijamovka"
                          )}
                        </h4>
                      }

                      <React.Fragment>
                        {
                          "\nOUR MANIFEST\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat rem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore.\n\n"
                        }
                      </React.Fragment>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <h4
                          data-plasmic-name={"h4"}
                          data-plasmic-override={overrides.h4}
                          className={classNames(
                            projectcss.all,
                            projectcss.h4,
                            projectcss.__wab_text,
                            sty.h4
                          )}
                        >
                          {hasVariant(
                            globalVariants,
                            "screen",
                            "mobileOnly"
                          ) ? (
                            <React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "#AC8D5B" }}
                              >
                                {"LOREM IPSUM DOLOR"}
                              </span>
                            </React.Fragment>
                          ) : (
                            "Vilijamovka"
                          )}
                        </h4>
                      }

                      <React.Fragment>
                        {
                          "\nLorem ipsum dolor sit amet. Et facere consequatur qui molestiae natus et tempore nostrum qui explicabo enim et ipsum nemo et molestiae repudiandae et neque dicta. Vel provident iste aut voluptas consectetur ad nobis quae ut facere aperiam.\n"
                        }
                      </React.Fragment>
                    </React.Fragment>
                  )}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column___10H1M)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__uArDk)}
                  displayHeight={"751px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: hTk7NOoC2XjpegDZle6Hln,
                    fullWidth: 934,
                    fullHeight: 1400,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames(projectcss.all, sty.footer)}
          >
            <div
              data-plasmic-name={"footerParentColumns"}
              data-plasmic-override={overrides.footerParentColumns}
              className={classNames(projectcss.all, sty.footerParentColumns)}
            >
              <div className={classNames(projectcss.all, sty.column__hijhF)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mnYij
                  )}
                >
                  {""}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column___3Cecf)}>
                <p.PlasmicImg
                  data-plasmic-name={"logo"}
                  data-plasmic-override={overrides.logo}
                  alt={""}
                  className={classNames(sty.logo)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"50%"}
                  loading={"lazy"}
                  src={{
                    src: group1PngUT7LoZsTj,
                    fullWidth: 727,
                    fullHeight: 727,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__dgumT)}>
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cRr7M
                    )}
                  >
                    {"KONTAKT"}
                  </div>
                ) : null}
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mqLJy
                  )}
                >
                  {"Školska 73, Aleksandrovac 37230, Serbia "}
                </div>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__qA1PY
                  )}
                  href={"mailto:'gajiceva@gmai.com"}
                >
                  {"gajicevarakija@gmail.com"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  parent: [
    "parent",
    "navigationBar",
    "logoFillIn",
    "freeBox",
    "columns",
    "h4",
    "footer",
    "footerParentColumns",
    "logo"
  ],

  navigationBar: ["navigationBar", "logoFillIn"],
  logoFillIn: ["logoFillIn"],
  freeBox: ["freeBox", "columns", "h4"],
  columns: ["columns", "h4"],
  h4: ["h4"],
  footer: ["footer", "footerParentColumns", "logo"],
  footerParentColumns: ["footerParentColumns", "logo"],
  logo: ["logo"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicVilijamovka__ArgProps,
          internalVariantPropNames: PlasmicVilijamovka__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicVilijamovka__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "parent") {
    func.displayName = "PlasmicVilijamovka";
  } else {
    func.displayName = `PlasmicVilijamovka.${nodeName}`;
  }
  return func;
}

export const PlasmicVilijamovka = Object.assign(
  // Top-level PlasmicVilijamovka renders the root element
  makeNodeComponent("parent"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    logoFillIn: makeNodeComponent("logoFillIn"),
    freeBox: makeNodeComponent("freeBox"),
    columns: makeNodeComponent("columns"),
    h4: makeNodeComponent("h4"),
    footer: makeNodeComponent("footer"),
    footerParentColumns: makeNodeComponent("footerParentColumns"),
    logo: makeNodeComponent("logo"),
    // Metadata about props expected for PlasmicVilijamovka
    internalVariantProps: PlasmicVilijamovka__VariantProps,
    internalArgProps: PlasmicVilijamovka__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Vilijamovka",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicVilijamovka;
/* prettier-ignore-end */
