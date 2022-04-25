export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6266b6e2dc882624b994d90e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7rgqwy3g',
                  apiId: 'dfc84809-2ed9-423e-aed9-fdf1f765f5f1'
                },
                {
                  buildHookId: '6266b6e222f1f421bbccf22f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nz3eqhs3',
                  apiId: 'd7c28dcd-9e88-41c9-9885-d0ba0b486094'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Tearveng/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nz3eqhs3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
