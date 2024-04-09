          // Include other fields you want from the events
          // Include other fields you want from the events
          export const mainPageQuery = `*[_type == "mainPage"]{
            _id,
            mainArticle->{
              _id,
              title,
              slug,
              mainImage{
                asset->{
                  _id,
                  url
                }
              },
              body
              // Include other fields you want from the main article
            },
            trendingNews[]->{
              _id,
              title,
              slug
              // Include other fields you want from the trending news articles
            },
            funnyNews[]->{
              _id,
              title,
              slug
              // Include other fields you want from the funny news articles
            },
            subMainArticles[]->{
              _id,
              title,
              slug
              // Include other fields you want from the sub main articles
            },
            openPositions[]->{
              _id,
              positionTitle,
              description
              // Include other fields you want from the job postings
            },
            newJoinees[]->{
              _id,
              name,
              image{
                asset->{
                  _id,
                  url
                }
              }
              // Include other fields you want from the new joinees
            },
            events[]->{
              _id,
              title,
              startDate,
              location
              // Include other fields you want from the events
            }
            // Include other sections or metadata if necessary
          }
          `