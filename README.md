# Product Card

Proyecto de manejo de items para prueba de despliegue en npm.

###

## Modo de uso

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "";
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 5,
    maxValue: 10,
  }}
>
  {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
