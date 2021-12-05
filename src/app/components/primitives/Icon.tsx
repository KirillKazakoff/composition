/* eslint-disable react/jsx-no-constructed-context-values */
import { IconContext } from '@react-icons/all-files/lib';

import React from 'react';

type IconProps = {
    settings: IconContext;
    children: React.ReactNode;
};

export default function Icon({ children, settings }: IconProps) {
    return <IconContext.Provider value={settings}>{children}</IconContext.Provider>;
}
