import {
  ReactPortal,
  PromiseLikeOfReactNode,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  Key,
  JSX
} from 'react'
import { MarketingConfig } from 'types'
import { UrlObject } from 'url'

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: 'Features',
      href: '/#features'
    },
    {
      title: 'Pricing',
      href: '/pricing'
    },
    {
      title: 'Blog',
      href: '/blog'
    },
    {
      title: 'Documentation',
      href: '/docs'
    }
  ],
  map: function (arg0: (item: { disabled: any; href: string | UrlObject; title: string | number | boolean | ReactPortal | PromiseLikeOfReactNode | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | (string & ReactPortal) | (string & PromiseLikeOfReactNode) | (number & ReactPortal) | (number & PromiseLikeOfReactNode) | (false & ReactPortal) | (false & PromiseLikeOfReactNode) | (true & ReactPortal) | (true & PromiseLikeOfReactNode) | (ReactPortal & string) | (ReactPortal & number) | (ReactPortal & false) | (ReactPortal & true) | (ReactPortal & PromiseLikeOfReactNode) | (PromiseLikeOfReactNode & string) | (PromiseLikeOfReactNode & number) | (PromiseLikeOfReactNode & false) | (PromiseLikeOfReactNode & true) | (PromiseLikeOfReactNode & ReactPortal) | (string & ReactElement<any, string | JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | (number & ReactElement<any, string | JSXElementConstructor<any>>) | (number & Iterable<ReactNode>) | (false & ReactElement<any, string | JSXElementConstructor<any>>) | (false & Iterable<ReactNode>) | (true & ReactElement<any, string | JSXElementConstructor<any>>) | (true & Iterable<ReactNode>) | (ReactElement<any, string | JSXElementConstructor<any>> & string) | (ReactElement<any, string | JSXElementConstructor<any>> & number) | (ReactElement<any, string | JSXElementConstructor<any>> & false) | (ReactElement<any, string | JSXElementConstructor<any>> & true) | (ReactElement<any, string | JSXElementConstructor<any>> & Iterable<ReactNode>) | (ReactElement<any, string | JSXElementConstructor<any>> & ReactPortal) | (ReactElement<any, string | JSXElementConstructor<any>> & PromiseLikeOfReactNode) | (Iterable<ReactNode> & string) | (Iterable<ReactNode> & number) | (Iterable<ReactNode> & false) | (Iterable<ReactNode> & true) | (Iterable<ReactNode> & ReactElement<any, string | JSXElementConstructor<any>>) | (Iterable<ReactNode> & ReactPortal) | (Iterable<ReactNode> & PromiseLikeOfReactNode) | (ReactPortal & ReactElement<any, string | JSXElementConstructor<any>>) | (ReactPortal & Iterable<ReactNode>) | (PromiseLikeOfReactNode & ReactElement<any, string | JSXElementConstructor<any>>) | (PromiseLikeOfReactNode & Iterable<ReactNode>) | null | undefined }, index: Key | null | undefined) => JSX.Element): ReactNode | Iterable<ReactNode> {
    throw new Error('Function not implemented.')
  }
}
