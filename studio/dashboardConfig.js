export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd8db3a68b4bb009de2d8d3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-es3xx1zu',
                  apiId: '12db8c25-2c48-4e49-820c-665eccba871c'
                },
                {
                  buildHookId: '5fd8db3a26ecae00b52e75fd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-aae2nz1f',
                  apiId: '6410142f-d1d1-49a2-a8f7-1c53f5f5ef46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StudioCC17/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-aae2nz1f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
