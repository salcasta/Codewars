//Remove exclamation marks

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


function removeExclamationMarks(s) {
  let remove = s.replace( /!/g, '')
  return remove
}
