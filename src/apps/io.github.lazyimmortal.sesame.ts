import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'io.github.lazyimmortal.sesame',
  name: '芝麻粒-GR',
  groups: [
    {
      key: 1,
      name: '跳过首次打开提示',
      desc: '点击[我知道了]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'io.github.lazyimmortal.sesame.ui.MainActivity',
          matches: 'Button[text="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/i/25533841',
        },
      ],
    },
  ],
});
