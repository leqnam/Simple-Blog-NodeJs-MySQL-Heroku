<% include ../components/header.ejs %>

    <!-- content -->
    <div class="sidebar">
        <div class="picture">
            <% var hash = hex_md5(locals.userDisplayName); %>
                <img src=<%='https://secure.gravatar.com/avatar/' + hash + '?size=220&default=https%3A%2F%2Fwww.parse.com%2Fimages%2Faccounts%2Fno_avatar.png' %> /> </div>
        <div class="username">
            <%= userDisplayName %>
        </div>
        <div class="blog_description">
            <%= userDescription %>
        </div>
    </div>

    <div class="main_content">
        <% posts.forEach(function(post) { %>
            <div class="post_link">
                <h1>
                    <a href="<%= '/posts/' + post.CATID %>">
                        <%= post.CATNAME %>
                    </a>
                </h1>

            </div>
            <% }) %>
    </div>


    <% include ../components/footer.ejs %>