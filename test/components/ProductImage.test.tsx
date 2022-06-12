import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Mostrar la imagen personalizada', () => {
    const wrapper = renderer.create(<ProductImage img="https://www.img.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Mostrar la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
