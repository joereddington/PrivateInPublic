// Saves options to chrome.storage.sync.
function save_options() {
  var passcode = document.getElementById('passcode').value;
  chrome.storage.sync.set({
    passcode: passcode
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    passcode: "changeme"
  }, function(items) {
    document.getElementById('passcode').value = items.passcode || "hardcoded";
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
