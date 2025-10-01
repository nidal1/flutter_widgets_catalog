import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // config options here (i18n removed for App Router compatibility)
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
