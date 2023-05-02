// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: toir4xKH4aRMjXM9AUeVMJ
// Component: -NFrkmsG80gR
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
import { ParallaxWrapper } from "@plasmicpkgs/react-scroll-parallax"; // plasmic-import: bozP4lLlAZ/codeComponent
import Button from "../../Button"; // plasmic-import: CzIKnLukEYe/component
import TextInput from "../../TextInput"; // plasmic-import: mbxfJX-hy_g/component
import { useScreenVariants as useScreenVariants_7Ks1UnM646Mq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 7ks_1UnM646mq/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_rakija_site.module.css"; // plasmic-import: toir4xKH4aRMjXM9AUeVMJ/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: -NFrkmsG80gR/css
import group1PngUT7LoZsTj from "./images/group1Png.png"; // plasmic-import: uT7loZsTJ/picture
import vector1Png3127LsLhox from "./images/vector1Png3.png"; // plasmic-import: 127lsLhox/picture
import maskGrouppng2NTlqluXgu from "./images/maskGrouppng2.png"; // plasmic-import: NTlqluXgu/picture
import maskGroup1Png2GwXHtFlPg from "./images/maskGroup1Png2.png"; // plasmic-import: gwXHtFlPg/picture
import maskGroup3Png2I9PPuApWk from "./images/maskGroup3Png2.png"; // plasmic-import: I9PPuApWk/picture
import maskGroup2Png23NkeRtvJw from "./images/maskGroup2Png2.png"; // plasmic-import: 3NKERtvJw/picture
import maskGroup4Png2LtRln4M9X from "./images/maskGroup4Png2.png"; // plasmic-import: ltRLN4M9x/picture
import statisticalRegionsOfSerbiaNuts1PngCzlxPqp1M from "../gajiceva/images/statisticalRegionsOfSerbiaNuts1Png.png"; // plasmic-import: czlxPqp1M/picture
import screenShot20230216At21855AMpngLa10StmJ from "./images/screenShot20230216At21855AMpng.png"; // plasmic-import: la10StmJ-/picture

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
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
          <div
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
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
                      sty.link__zt2Jq
                    )}
                    href={`/`}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__gA8Rw)}
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
                  className={classNames(sty.img__qC2Dr)}
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
                      sty.link___8TRqF
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
                      sty.link__oI0EN
                    )}
                    href={"/#products"}
                  >
                    {"PROIZVODI"}
                  </a>
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___6OAh
                    )}
                    href={"#contact"}
                  >
                    {"KONTAKT"}
                  </a>
                </React.Fragment>
              }
              openButton={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___4Pd17)}
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
              data-plasmic-name={"gajicevaRakija"}
              data-plasmic-override={overrides.gajicevaRakija}
              className={classNames(projectcss.all, sty.gajicevaRakija)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__q5LU0
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#B69760" }}
                  >
                    {"GAJIĆEVA"}
                  </span>
                </React.Fragment>
              </div>
              <div
                data-plasmic-name={"bottomText"}
                data-plasmic-override={overrides.bottomText}
                className={classNames(projectcss.all, sty.bottomText)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"socialsConvertToLinks"}
                  data-plasmic-override={overrides.socialsConvertToLinks}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    sty.socialsConvertToLinks
                  )}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__h6K2J
                    )}
                  >
                    {""}
                  </div>
                </p.Stack>
                <div
                  data-plasmic-name={"scroll"}
                  data-plasmic-override={overrides.scroll}
                  className={classNames(projectcss.all, sty.scroll)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zvzR
                    )}
                  >
                    {"Scroll"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"featuredProducts"}
            data-plasmic-override={overrides.featuredProducts}
            className={classNames(projectcss.all, sty.featuredProducts)}
            id={"products"}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"productsColumnsParent"}
              data-plasmic-override={overrides.productsColumnsParent}
              hasGap={true}
              className={classNames(projectcss.all, sty.productsColumnsParent)}
            >
              <div className={classNames(projectcss.all, sty.column__vzsTu)} />
              <div
                data-plasmic-name={"one"}
                data-plasmic-override={overrides.one}
                className={classNames(projectcss.all, sty.one)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__qrGtv)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: maskGrouppng2NTlqluXgu,
                    fullWidth: 119,
                    fullHeight: 362,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__emYuc
                  )}
                >
                  {"Vilijamovka"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__sLjr
                  )}
                >
                  {""}
                </div>
              </div>
              <div
                data-plasmic-name={"two2"}
                data-plasmic-override={overrides.two2}
                className={classNames(projectcss.all, sty.two2)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__bYp83)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: maskGroup1Png2GwXHtFlPg,
                    fullWidth: 118,
                    fullHeight: 361,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mDyRx
                  )}
                >
                  {"Kajsija"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__y5Bt
                  )}
                >
                  {""}
                </div>
              </div>
              <div
                data-plasmic-name={"three"}
                data-plasmic-override={overrides.three}
                className={classNames(projectcss.all, sty.three)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__cN8Ka)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: maskGroup3Png2I9PPuApWk,
                    fullWidth: 113,
                    fullHeight: 361,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___8Lj7J
                  )}
                >
                  {"Šljiva"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gjNo5
                  )}
                >
                  {""}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__lFbxd)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__w2XRh)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: maskGroup2Png23NkeRtvJw,
                    fullWidth: 122,
                    fullHeight: 361,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__enwzS
                  )}
                >
                  {"Dunja"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hjPbv
                  )}
                >
                  {""}
                </div>
              </div>
              <div
                data-plasmic-name={"two"}
                data-plasmic-override={overrides.two}
                className={classNames(projectcss.all, sty.two)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___2FyLh)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: maskGroup4Png2LtRln4M9X,
                    fullWidth: 118,
                    fullHeight: 361,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__trstz
                  )}
                >
                  {"Loza"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qCmCz
                  )}
                >
                  {""}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__ecCnG)} />
            </p.Stack>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__g8Ao6)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__pJg7O
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "Rakija \nkao stil života"
                : "RAKIJA PRAVLJENA ZA DUŠU..."}
            </div>
            <ParallaxWrapper
              data-plasmic-name={"scrollParallax"}
              data-plasmic-override={overrides.scrollParallax}
              className={classNames("__wab_instance", sty.scrollParallax)}
              speed={40}
            >
              <div
                data-plasmic-name={"whereCanYouTasteProdcuts"}
                data-plasmic-override={overrides.whereCanYouTasteProdcuts}
                className={classNames(
                  projectcss.all,
                  sty.whereCanYouTasteProdcuts
                )}
              >
                <div className={classNames(projectcss.all, sty.freeBox__jsxsB)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__d1Ukt
                    )}
                  >
                    {""}
                  </div>
                </div>
              </div>
            </ParallaxWrapper>
          </div>
          <div
            data-plasmic-name={"discover"}
            data-plasmic-override={overrides.discover}
            className={classNames(projectcss.all, sty.discover)}
          >
            <div
              data-plasmic-name={"discoverColumns"}
              data-plasmic-override={overrides.discoverColumns}
              className={classNames(projectcss.all, sty.discoverColumns)}
            >
              <div
                data-plasmic-name={"mapNeedToFindBetterMap"}
                data-plasmic-override={overrides.mapNeedToFindBetterMap}
                className={classNames(
                  projectcss.all,
                  sty.mapNeedToFindBetterMap
                )}
              >
                {true ? (
                  <div
                    data-plasmic-name={"map2NeedBetterMap"}
                    data-plasmic-override={overrides.map2NeedBetterMap}
                    className={classNames(
                      projectcss.all,
                      sty.map2NeedBetterMap
                    )}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___7TgH)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "auto"
                          : "768px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"552px"}
                      loading={"lazy"}
                      src={{
                        src: statisticalRegionsOfSerbiaNuts1PngCzlxPqp1M,
                        fullWidth: 744,
                        fullHeight: 1052,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                ) : null}
              </div>
              <div className={classNames(projectcss.all, sty.column__pGqZd)}>
                {true ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hQa9R
                    )}
                  >
                    {"REGION RAKIJA I VINA"}
                  </div>
                ) : null}
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iAn7U
                  )}
                >
                  {"ALEKSANDROVAČKI REGION JE NAJPOZNATIJI PO VINARIJAMA"}
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__vjkIk)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__d2Ob
                    )}
                  >
                    {"VISE"}
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"contact"}
            data-plasmic-override={overrides.contact}
            className={classNames(projectcss.all, sty.contact)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"contactParent"}
              data-plasmic-override={overrides.contactParent}
              hasGap={true}
              className={classNames(projectcss.all, sty.contactParent)}
              id={"contact"}
            >
              <div
                data-plasmic-name={"contact2"}
                data-plasmic-override={overrides.contact2}
                className={classNames(projectcss.all, sty.contact2)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__qbhZ2)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__c2C25
                    )}
                  >
                    {"Kako do nas?"}
                  </div>
                  {true ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ubJh8
                      )}
                    >
                      {""}
                    </div>
                  ) : null}
                  <TextInput
                    data-plasmic-name={"textInput"}
                    data-plasmic-override={overrides.textInput}
                    className={classNames("__wab_instance", sty.textInput)}
                    onChange={(...eventArgs) => {
                      p.generateStateOnChangeProp($state, [
                        "textInput",
                        "value"
                      ])((e => e.target?.value).apply(null, eventArgs));
                    }}
                    placeholder={"Name*"}
                    value={p.generateStateValueProp($state, [
                      "textInput",
                      "value"
                    ])}
                  />

                  <TextInput
                    data-plasmic-name={"textInput2"}
                    data-plasmic-override={overrides.textInput2}
                    className={classNames("__wab_instance", sty.textInput2)}
                    onChange={(...eventArgs) => {
                      p.generateStateOnChangeProp($state, [
                        "textInput2",
                        "value"
                      ])((e => e.target?.value).apply(null, eventArgs));
                    }}
                    placeholder={"Email*"}
                    value={p.generateStateValueProp($state, [
                      "textInput2",
                      "value"
                    ])}
                  />

                  <TextInput
                    data-plasmic-name={"textInput3"}
                    data-plasmic-override={overrides.textInput3}
                    className={classNames("__wab_instance", sty.textInput3)}
                    onChange={(...eventArgs) => {
                      p.generateStateOnChangeProp($state, [
                        "textInput3",
                        "value"
                      ])((e => e.target?.value).apply(null, eventArgs));
                    }}
                    placeholder={"Message*"}
                    value={p.generateStateValueProp($state, [
                      "textInput3",
                      "value"
                    ])}
                  />

                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button__kMYcu
                    )}
                  >
                    {"POŠALJI"}
                  </button>
                </div>
              </div>
              <div
                data-plasmic-name={"mapAndInfo"}
                data-plasmic-override={overrides.mapAndInfo}
                className={classNames(projectcss.all, sty.mapAndInfo)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___2Tdd)}
                  displayHeight={"401px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"559px"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: screenShot20230216At21855AMpngLa10StmJ,
                    fullWidth: 1846,
                    fullHeight: 1356,
                    aspectRatio: undefined
                  }}
                />

                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lWotf
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Street Address, Belgrade\n+123 456 9\nexample@gmail.com"
                      : ""}
                  </div>
                ) : null}
              </div>
            </p.Stack>
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
              <div className={classNames(projectcss.all, sty.column___5Pwxl)} />
              <div className={classNames(projectcss.all, sty.column__lLRk)}>
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
              <div className={classNames(projectcss.all, sty.column__yAycJ)}>
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___7JGt
                    )}
                  >
                    {"KONTAKT"}
                  </div>
                ) : null}
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gHnb
                  )}
                >
                  {"Školska 73, Aleksandrovac 37230, Serbia "}
                </div>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__f9Lq
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
    "hero",
    "navigationBar",
    "logoFillIn",
    "gajicevaRakija",
    "bottomText",
    "socialsConvertToLinks",
    "scroll",
    "featuredProducts",
    "productsColumnsParent",
    "one",
    "two2",
    "three",
    "two",
    "scrollParallax",
    "whereCanYouTasteProdcuts",
    "discover",
    "discoverColumns",
    "mapNeedToFindBetterMap",
    "map2NeedBetterMap",
    "contact",
    "contactParent",
    "contact2",
    "textInput",
    "textInput2",
    "textInput3",
    "mapAndInfo",
    "footer",
    "footerParentColumns",
    "logo"
  ],

  hero: [
    "hero",
    "navigationBar",
    "logoFillIn",
    "gajicevaRakija",
    "bottomText",
    "socialsConvertToLinks",
    "scroll"
  ],

  navigationBar: ["navigationBar", "logoFillIn"],
  logoFillIn: ["logoFillIn"],
  gajicevaRakija: [
    "gajicevaRakija",
    "bottomText",
    "socialsConvertToLinks",
    "scroll"
  ],

  bottomText: ["bottomText", "socialsConvertToLinks", "scroll"],
  socialsConvertToLinks: ["socialsConvertToLinks"],
  scroll: ["scroll"],
  featuredProducts: [
    "featuredProducts",
    "productsColumnsParent",
    "one",
    "two2",
    "three",
    "two"
  ],

  productsColumnsParent: [
    "productsColumnsParent",
    "one",
    "two2",
    "three",
    "two"
  ],

  one: ["one"],
  two2: ["two2"],
  three: ["three"],
  two: ["two"],
  scrollParallax: ["scrollParallax", "whereCanYouTasteProdcuts"],
  whereCanYouTasteProdcuts: ["whereCanYouTasteProdcuts"],
  discover: [
    "discover",
    "discoverColumns",
    "mapNeedToFindBetterMap",
    "map2NeedBetterMap"
  ],

  discoverColumns: [
    "discoverColumns",
    "mapNeedToFindBetterMap",
    "map2NeedBetterMap"
  ],

  mapNeedToFindBetterMap: ["mapNeedToFindBetterMap", "map2NeedBetterMap"],
  map2NeedBetterMap: ["map2NeedBetterMap"],
  contact: [
    "contact",
    "contactParent",
    "contact2",
    "textInput",
    "textInput2",
    "textInput3",
    "mapAndInfo"
  ],

  contactParent: [
    "contactParent",
    "contact2",
    "textInput",
    "textInput2",
    "textInput3",
    "mapAndInfo"
  ],

  contact2: ["contact2", "textInput", "textInput2", "textInput3"],
  textInput: ["textInput"],
  textInput2: ["textInput2"],
  textInput3: ["textInput3"],
  mapAndInfo: ["mapAndInfo"],
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "parent") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("parent"),
  {
    // Helper components rendering sub-elements
    hero: makeNodeComponent("hero"),
    navigationBar: makeNodeComponent("navigationBar"),
    logoFillIn: makeNodeComponent("logoFillIn"),
    gajicevaRakija: makeNodeComponent("gajicevaRakija"),
    bottomText: makeNodeComponent("bottomText"),
    socialsConvertToLinks: makeNodeComponent("socialsConvertToLinks"),
    scroll: makeNodeComponent("scroll"),
    featuredProducts: makeNodeComponent("featuredProducts"),
    productsColumnsParent: makeNodeComponent("productsColumnsParent"),
    one: makeNodeComponent("one"),
    two2: makeNodeComponent("two2"),
    three: makeNodeComponent("three"),
    two: makeNodeComponent("two"),
    scrollParallax: makeNodeComponent("scrollParallax"),
    whereCanYouTasteProdcuts: makeNodeComponent("whereCanYouTasteProdcuts"),
    discover: makeNodeComponent("discover"),
    discoverColumns: makeNodeComponent("discoverColumns"),
    mapNeedToFindBetterMap: makeNodeComponent("mapNeedToFindBetterMap"),
    map2NeedBetterMap: makeNodeComponent("map2NeedBetterMap"),
    contact: makeNodeComponent("contact"),
    contactParent: makeNodeComponent("contactParent"),
    contact2: makeNodeComponent("contact2"),
    textInput: makeNodeComponent("textInput"),
    textInput2: makeNodeComponent("textInput2"),
    textInput3: makeNodeComponent("textInput3"),
    mapAndInfo: makeNodeComponent("mapAndInfo"),
    footer: makeNodeComponent("footer"),
    footerParentColumns: makeNodeComponent("footerParentColumns"),
    logo: makeNodeComponent("logo"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
