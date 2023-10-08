'use client';

import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { Background } from '#components/checkout/background';
import { Content } from '#components/checkout/content';
import { CheckoutProps } from '#components/checkout/props';
import { Wrapper } from '#components/checkout/wrapper';
import { eventSelector } from '#slices/event';
import '#components/checkout/styles.scss';

const Checkout: FC<CheckoutProps> = ({ onClose, isOpen }) => {
  const t = useTranslations('Checkout');
  const { image } = useSelector(eventSelector);

  return (
    <Transition as={Fragment} show={isOpen}>
      <Dialog
        as="div"
        className="evenia-checkout"
        onClose={onClose}
      >
        <Background />
        <Wrapper>
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Image
              alt={image.alt}
              className="evenia-checkout__image"
              height={245}
              src={image.src ?? '/checkout.webp'}
              width={492}
            />
            <Dialog.Panel className="evenia-checkout__modal">
              <Dialog.Title as="h3" className="evenia-checkout__header">
                { t('summary') }
              </Dialog.Title>
              <Content />
            </Dialog.Panel>
          </Transition.Child>
        </Wrapper>
      </Dialog>
    </Transition>
  );
};

export { Checkout };
