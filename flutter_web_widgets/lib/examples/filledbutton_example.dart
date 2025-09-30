import 'package:flutter/material.dart';

class FilledButtonExample extends StatelessWidget {
  const FilledButtonExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: FilledButton(onPressed: () {}, child: const Text('Filled Button')),
    );
  }
}
