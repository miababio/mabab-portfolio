import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

type Props = {}

const Grid = (props: Props) => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({ id, title, description, className, img, titleClassName, imgClassName, spareImg }) => (
          <BentoGridItem 
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid