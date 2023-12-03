import type { Schema, Attribute } from '@strapi/strapi';

export interface FinalImageFinalImage extends Schema.Component {
  collectionName: 'components_final_image_final_images';
  info: {
    displayName: 'final_image';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    final_prod_image: Attribute.Media;
    options_images: Attribute.Media;
    home_images: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'final-image.final-image': FinalImageFinalImage;
    }
  }
}
