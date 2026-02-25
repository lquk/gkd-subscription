import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'io.github.lazyimmortal.sesame',
  name: '芝麻粒-GR',
  groups: [
    {
      key: 1,
      name: '跳过提示',
      desc: '点击[我知道了]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'id="io.github.lazyimmortal.sesame:id/title_template"',
          matches: '*[vid="buttonPanel"] > Button[id="android:id/button1"]',
          snapshotUrls: 'https://i.gkd.li/i/25533841',
        },
      ],
    },
  ],
});
