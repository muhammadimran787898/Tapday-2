import { User } from "@prisma/client"
import type { Icon } from "lucide-react"

import { Icons } from "@/components/icons"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type DocsConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type MarketingConfig = {
  map(arg0: (item: { disabled: any; href: string | import("url").UrlObject; title: string | number | boolean | import("react").ReactPortal | import("react").PromiseLikeOfReactNode | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | (string & import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) | (string & Iterable<import("react").ReactNode>) | (string & import("react").ReactPortal) | (string & import("react").PromiseLikeOfReactNode) | (number & import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) | (number & Iterable<import("react").ReactNode>) | (number & import("react").ReactPortal) | (number & import("react").PromiseLikeOfReactNode) | (false & import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) | (false & Iterable<import("react").ReactNode>) | (false & import("react").ReactPortal) | (false & import("react").PromiseLikeOfReactNode) | (true & import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) | (true & Iterable<import("react").ReactNode>) | (true & import("react").ReactPortal) | (true & import("react").PromiseLikeOfReactNode) | (import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> & string) | (import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> & number) | (import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> & false) | (import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> & true) | (import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> & Iterable<import("react").ReactNode>) | (import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> & import("react").ReactPortal) | (import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> & import("react").PromiseLikeOfReactNode) | (Iterable<import("react").ReactNode> & string) | (Iterable<import("react").ReactNode> & number) | (Iterable<import("react").ReactNode> & false) | (Iterable<import("react").ReactNode> & true) | (Iterable<import("react").ReactNode> & import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) | (Iterable<import("react").ReactNode> & import("react").ReactPortal) | (Iterable<import("react").ReactNode> & import("react").PromiseLikeOfReactNode) | (import("react").ReactPortal & string) | (import("react").ReactPortal & number) | (import("react").ReactPortal & false) | (import("react").ReactPortal & true) | (import("react").ReactPortal & import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) | (import("react").ReactPortal & Iterable<import("react").ReactNode>) | (import("react").ReactPortal & import("react").PromiseLikeOfReactNode) | (import("react").PromiseLikeOfReactNode & string) | (import("react").PromiseLikeOfReactNode & number) | (import("react").PromiseLikeOfReactNode & false) | (import("react").PromiseLikeOfReactNode & true) | (import("react").PromiseLikeOfReactNode & import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) | (import("react").PromiseLikeOfReactNode & Iterable<import("react").ReactNode>) | (import("react").PromiseLikeOfReactNode & import("react").ReactPortal) | null | undefined }, index: import("react").Key | null | undefined) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>
  mainNav: MainNavItem[]
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
}

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
    stripeCurrentPeriodEnd: number
    isPro: boolean
  }
