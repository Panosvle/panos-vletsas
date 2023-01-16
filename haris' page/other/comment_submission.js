function add_comment () {

    // get the submit form's values
    let user_name = document.getElementById('user_name').value
    let comment_text = document.getElementById('comment_text').value

    // if fields are empty return
    if (user_name === '' || comment_text === '') {
        alert('Please fill in both the user name and comment text to be able to submit the comment.')
        return
    }

    // reset the value of the fields
    document.getElementById('user_name').value = ''
    document.getElementById('comment_text').value = ''

    // create comment class
    let comment = document.createElement('div')
    comment.className = 'comment'

    // create the div for the username
    let comment_user_name = document.createElement('div')
    comment_user_name.className = 'user_name'

    // create the bold node for the username
    let bold_user_name = document.createElement('b')
    bold_user_name.innerHTML = user_name

    // append the bolded username to the div
    comment_user_name.appendChild(bold_user_name)

    // append to the actual comment div
    comment.appendChild(comment_user_name)

    // creat the div for the comment text
    let text_node = document.createElement('div')
    text_node.className = 'user_comment'
    text_node.innerHTML = comment_text

    // append the comment text div to the comment div
    comment.appendChild(text_node)

    // append the new comment div to the comments div, also add a horizontal line
    // to better separate the comments
    let comment_list = document.getElementById('comment_list')
    let horizontal_line = document.createElement('hr')
    comment_list.appendChild(horizontal_line)
    comment_list.appendChild(comment)
}