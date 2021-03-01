export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '603d0a2fdcf91d00a733f94e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-4snuiedt',
                  apiId: '7e51fe73-5348-4bb0-bd82-ba776cac4317'
                },
                {
                  buildHookId: '603d0a2f61965a00c9c83146',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-t4swdgbq',
                  apiId: 'd97bb11b-b4d5-4062-9d0d-4aaa7989368d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisrindone/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-t4swdgbq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
