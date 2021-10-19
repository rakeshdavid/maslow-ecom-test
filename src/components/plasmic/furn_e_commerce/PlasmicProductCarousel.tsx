// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rzvCoVzaF3R2GUVDhpifyK
// Component: OfAA8Q5DZXYO
import * as React from "react"

import { Link, GatsbyLinkProps as LinkProps } from "gatsby"

import * as p from "@plasmicapp/react-web"

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import LinkButton from "../../LinkButton" // plasmic-import: bz5yyMq_-Bm9/component

import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css" // plasmic-import: rzvCoVzaF3R2GUVDhpifyK/projectcss
import * as sty from "./PlasmicProductCarousel.module.css" // plasmic-import: OfAA8Q5DZXYO/css

import DotCircleOIcon from "./icons/PlasmicIcon__DotCircleO" // plasmic-import: A-Sn7kDDdfE8/icon
import CircleOIcon from "./icons/PlasmicIcon__CircleO" // plasmic-import: D0UQ4Kf5dTbI/icon
import slider17FzzF0RCNgl from "./images/slider1.png" // plasmic-import: 7fzzF-0rCNgl/picture
import slider2UtjJqxA7Q0Fj from "./images/slider2.png" // plasmic-import: utjJqxA7q0fj/picture
import slider3JiWeezTxv3Nt from "./images/slider3.png" // plasmic-import: JiWeezTXV3Nt/picture

export type PlasmicProductCarousel__VariantMembers = {
  slider: "first" | "second" | "third"
}

export type PlasmicProductCarousel__VariantsArgs = {
  slider?: SingleChoiceArg<"first" | "second" | "third">
}

type VariantPropType = keyof PlasmicProductCarousel__VariantsArgs
export const PlasmicProductCarousel__VariantProps = new Array<VariantPropType>(
  "slider"
)

export type PlasmicProductCarousel__ArgsType = {}
type ArgPropType = keyof PlasmicProductCarousel__ArgsType
export const PlasmicProductCarousel__ArgProps = new Array<ArgPropType>()

export type PlasmicProductCarousel__OverridesType = {
  root?: p.Flex<"div">
  img?: p.Flex<"img">
}

export interface DefaultProductCarouselProps {
  slider?: SingleChoiceArg<"first" | "second" | "third">
  className?: string
}

function PlasmicProductCarousel__RenderFunc(props: {
  variants: PlasmicProductCarousel__VariantsArgs
  args: PlasmicProductCarousel__ArgsType
  overrides: PlasmicProductCarousel__OverridesType
  dataFetches?: PlasmicProductCarousel__Fetches
  forNode?: string
}) {
  const { variants, args, overrides, forNode, dataFetches } = props

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.freeBox__oge7J)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__xu8LK, {
            [sty.freeBox__slider_second__xu8LKe5Ipz]: hasVariant(
              variants,
              "slider",
              "second"
            ),
          })}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__ew5CF
            )}
          >
            {"Great Design Collection"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__aJrSt,
              {
                [sty.text__slider_first__aJrStpxIlb]: hasVariant(
                  variants,
                  "slider",
                  "first"
                ),
                [sty.text__slider_second__aJrSTe5Ipz]: hasVariant(
                  variants,
                  "slider",
                  "second"
                ),
                [sty.text__slider_third__aJrStXuqYm]: hasVariant(
                  variants,
                  "slider",
                  "third"
                ),
              }
            )}
          >
            {hasVariant(variants, "slider", "third")
              ? "Valvet Accent Arm Chair"
              : hasVariant(variants, "slider", "second")
              ? "Mapple Wood Accent Chair"
              : "Cloth Covered Accent Chair"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__zDQo6
            )}
          >
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
            }
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__if3FN)}>
            <div className={classNames(defaultcss.all, sty.freeBox__xWHoB)} />

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__aqhnd,
                {
                  [sty.text__slider_second__aqhnde5Ipz]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),
                  [sty.text__slider_third__aqhndXuqYm]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  ),
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $299.00"
                : hasVariant(variants, "slider", "second")
                ? " $199.00"
                : " $399.00"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__a8Y0,
                {
                  [sty.text__slider_first__a8Y0PxIlb]: hasVariant(
                    variants,
                    "slider",
                    "first"
                  ),
                  [sty.text__slider_second__a8Y0E5Ipz]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),
                  [sty.text__slider_third__a8Y0XuqYm]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  ),
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $399.00"
                : hasVariant(variants, "slider", "second")
                ? " $299.00"
                : " $499.00"}
            </div>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__vTsfz)}
          >
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton___023K)}
              text={"⊕ Add to cart"}
              type={"solidOrange" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__i6F1H)}
              text={"More Info"}
              type={"blankOrange" as const}
            />
          </p.Stack>
        </p.Stack>

        <div className={classNames(defaultcss.all, sty.freeBox__yNvdu)}>
          <img
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(defaultcss.img, sty.img, {
              [sty.img__slider_first]: hasVariant(variants, "slider", "first"),
              [sty.img__slider_second]: hasVariant(
                variants,
                "slider",
                "second"
              ),
              [sty.img__slider_third]: hasVariant(variants, "slider", "third"),
            })}
            src={
              hasVariant(variants, "slider", "third")
                ? slider3JiWeezTxv3Nt
                : hasVariant(variants, "slider", "second")
                ? slider2UtjJqxA7Q0Fj
                : slider17FzzF0RCNgl
            }
          />
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__pnnTc)}
      >
        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? CircleOIcon
              : hasVariant(variants, "slider", "second")
              ? CircleOIcon
              : DotCircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg__nydM4, {
            [sty.svg__slider_second__nydM4E5Ipz]: hasVariant(
              variants,
              "slider",
              "second"
            ),
            [sty.svg__slider_third__nydM4XuqYm]: hasVariant(
              variants,
              "slider",
              "third"
            ),
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "second")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg__htSui, {
            [sty.svg__slider_first__htSuiPxIlb]: hasVariant(
              variants,
              "slider",
              "first"
            ),
            [sty.svg__slider_second__htSuie5Ipz]: hasVariant(
              variants,
              "slider",
              "second"
            ),
            [sty.svg__slider_third__htSuiXuqYm]: hasVariant(
              variants,
              "slider",
              "third"
            ),
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg___3OAs4, {
            [sty.svg__slider_third___3OAs4XuqYm]: hasVariant(
              variants,
              "slider",
              "third"
            ),
          })}
          role={"img"}
        />
      </p.Stack>
    </div>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
  img: "img"
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductCarousel__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductCarousel__VariantsArgs
    args?: PlasmicProductCarousel__ArgsType
    overrides?: NodeOverridesType<T>
    dataFetches?: PlasmicProductCarousel__Fetches
  } & Omit<PlasmicProductCarousel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProductCarousel__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key }
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProductCarousel__ArgProps,
      internalVariantPropNames: PlasmicProductCarousel__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicProductCarousel__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCarousel"
  } else {
    func.displayName = `PlasmicProductCarousel.${nodeName}`
  }
  return func
}

export const PlasmicProductCarousel = Object.assign(
  // Top-level PlasmicProductCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicProductCarousel
    internalVariantProps: PlasmicProductCarousel__VariantProps,
    internalArgProps: PlasmicProductCarousel__ArgProps,
  }
)

export default PlasmicProductCarousel
/* prettier-ignore-end */
