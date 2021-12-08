/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { classNames } from '../../functions/styling'
import { ExternalLink } from '../Link'
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg'
const solutions = [
    {
        name: 'Main Site and Blog',
        description: 'Website of DeGen Haus.',
        href: 'https://degen.haus'
    },
    {
        name: 'Docs',
        description: 'Documentation for users of DeGen Haus.',
        href: 'https://docs.horus.exchange'
    },
    {
        name: 'Github',
        description: 'DeGen Haus on GitHub.',
        href: 'https://github.com/degenhouse'
    },
    {
        name: 'Youtube',
        description: 'DeGen Haus YouTube Channel.',
        href: 'https://www.youtube.com/channel/UCkIwOtsZKIqh7Zxs56291Mw'
    },
    {
        name: 'Telegram',
        description: 'Join the community on TG.',
        href: 'https://t.me/DegenHouse'
    }
]

export default function Menu() {
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button
                        className={classNames(open ? 'text-secondary' : 'text-primary', 'focus:outline-none')}
                    >
                        <MenuIcon
                            title="More"
                            className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'inline-flex items-center ml-2 h-5 w-5 group-hover:text-secondary hover:text-high-emphesis'
                            )}
                            aria-hidden="true"
                        />
                    </Popover.Button>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel
                            static
                            className="absolute z-10 bottom-12 md:top-12 left-full transform -translate-x-full mt-3 px-2 w-screen max-w-xs sm:px-0"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-dark-900 px-5 py-6 sm:gap-8 sm:p-8">
                                    {solutions.map(item => (
                                        <ExternalLink
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 p-3 block rounded-md hover:bg-dark-800 transition ease-in-out duration-150"
                                        >
                                            <p className="text-base font-medium text-high-emphesis">{item.name}</p>
                                            <p className="mt-1 text-sm text-secondary">{item.description}</p>
                                        </ExternalLink>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}