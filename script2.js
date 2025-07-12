document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const previewContainer = document.getElementById('previewContainer');
    const itemForm = document.getElementById('itemForm');
    
    let uploadedFiles = [];
    
    // Handle drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
    });
    
    // Handle click to browse
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });
    
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length) {
            handleFiles(fileInput.files);
        }
    });
    
    // Handle file processing
    function handleFiles(files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.startsWith('image/')) {
                uploadedFiles.push(file);
                previewImage(file);
            }
        }
        
        // Reset file input to allow selecting the same file again
        fileInput.value = '';
    }
    
    // Create image preview
    function previewImage(file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const preview = document.createElement('div');
            preview.className = 'image-preview';
            
            const img = document.createElement('img');
            img.src = e.target.result;
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-btn';
            removeBtn.innerHTML = '&times;';
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                removeImage(file, preview);
            });
            
            preview.appendChild(img);
            preview.appendChild(removeBtn);
            previewContainer.appendChild(preview);
        };
        
        reader.readAsDataURL(file);
    }
    
    // Remove image from preview and uploaded files
    function removeImage(file, previewElement) {
        uploadedFiles = uploadedFiles.filter(f => f !== file);
        previewContainer.removeChild(previewElement);
    }
    
    // Form submission
    itemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate required fields
        const title = document.getElementById('title').value.trim();
        const description = document.getElementById('description').value.trim();
        const category = document.getElementById('category').value;
        const type = document.getElementById('type').value;
        
        if (!title || !description || !category || !type) {
            alert('Please fill in all required fields');
            return;
        }
        
        if (uploadedFiles.length === 0) {
            if (!confirm('You haven\'t uploaded any images. Continue without images?')) {
                return;
            }
        }
        
        // Prepare form data
        const formData = new FormData();
        
        // Add images
        uploadedFiles.forEach(file => {
            formData.append('images', file);
        });
        
        // Add other fields
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('type', type);
        formData.append('size', document.getElementById('size').value.trim());
        formData.append('condition', document.getElementById('condition').value);
        formData.append('tags', document.getElementById('tags').value.trim());
        
        // Here you would normally send the data to your server
        // For demonstration, we'll just show the data
        console.log('Form data to be submitted:', Object.fromEntries(formData));
        
        // Simulate API call
        simulateApiCall(formData);
    });
    
    // Simulate API call (replace with actual fetch)
    function simulateApiCall(formData) {
        console.log('Simulating API call...');
        
        // Show loading state
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Listing Item...';
        
        // Simulate network delay
        setTimeout(() => {
            console.log('Item listed successfully!');
            alert('Item listed successfully!');
            
            // Reset form
            itemForm.reset();
            uploadedFiles = [];
            previewContainer.innerHTML = '';
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = 'List Item';
        }, 1500);
    }
});