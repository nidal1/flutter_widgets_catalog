import 'package:flutter/material.dart';

class TextFormFieldExample extends StatelessWidget {
  const TextFormFieldExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          child: TextFormField(
            decoration: const InputDecoration(labelText: 'Enter something'),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter some text';
              }
              return null;
            },
          ),
        ),
      ),
    );
  }
}
