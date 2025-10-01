'use client';

import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import { categories, widgets } from '@/constants';
import Container from './Container';
import { SearchDialog } from './SearchDialog';

const HeroSection = () => {
  const t = useTranslations('HeroSection');

  // Calculate dynamic stats
  const numCategories = categories.filter((c) => c !== 'All').length;
  const numComponents = widgets.length;
  const numVariants = widgets.reduce(
    (acc, widget) => acc + (widget.properties?.length || 0),
    0
  );

  return (
    <Container className="py-10">
      <div className="flex flex-col items-center">
        {/* main heading */}
        <h1 className="text-3xl">{t('title')}</h1>
        {/* end main heading */}

        {/* subtitle */}
        <p
          className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400"
          dangerouslySetInnerHTML={{
            __html: t.raw('subtitle'),
          }}
        />
        {/* end subtitle */}

        {/* search input */}
        <SearchDialog />
        {/* end search input */}

        {/* categories / components / variants */}
        <div className="flex gap-4 mt-6 flex-wrap justify-center w-full">
          <Card className="flex-1 max-w-[200px]">
            <div className="text-center p-4">
              <span className="text-3xl font-bold text-foreground">
                {numCategories}
              </span>
              <br />
              <span className="text-sm font-medium text-muted-foreground">
                {t('categories')}
              </span>
            </div>
          </Card>

          <Card className="flex-1 max-w-[200px]">
            <div className="text-center p-4">
              <span className="text-3xl font-bold text-foreground">
                {numComponents}
              </span>
              <br />
              <span className="text-sm font-medium text-muted-foreground">
                {t('components')}
              </span>
            </div>
          </Card>

          <Card className="flex-1 max-w-[200px]">
            <div className="text-center p-4">
              <span className="text-3xl font-bold text-foreground">
                {numVariants}
              </span>
              <br />
              <span className="text-sm font-medium text-muted-foreground">
                {t('variants')}
              </span>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
